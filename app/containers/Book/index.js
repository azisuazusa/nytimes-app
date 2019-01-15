/*
 * @flow
 */

import React, { Component } from 'react';
import { Container, Form, Item, Spinner } from 'native-base';
import { FlatList } from 'react-native';
import CommonPicker from '../../components/Common/CommonPicker';
import BookItem from '../../components/Book/BookItem';
import constants from '../../configs/constants';
import bookApi from '../../apis/book';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {
  searchListValue: string,
  books: Array<any>,
  isLoading: boolean 
};

export default class Book extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchListValue: 'e-book-fiction',
      books: [],
      isLoading: true
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    const { searchListValue } = this.state;
    bookApi.getBooks(searchListValue)
      .then(result => {
        this.setState({
          books: result.data.results,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log('Get Book Error', error);
      });
  }

  onValueSearchListChange(searchListValue: string) {
    this.setState({ searchListValue, isLoading: true }, this.getBooks);
  }

  onPressBook(webUrl: string) {
    const { navigation: { navigate } } = this.props;
    navigate('MyWebView', { webUrl });
  }

  renderBookItem(book: any) {
    if (book.book_details.length == 0) return null;
    const { title, description, author } = book.book_details[0];
    return (
      <BookItem
        title={title}
        description={description}
        author={author}
        publishedDate={book.published_date}
        productUrl={book.amazon_product_url}
        onPress={this.onPressBook.bind(this)} />
    );
  }

  render() {
    const { searchListValue, books, isLoading } = this.state;
    return (
      <Container>
        <Form>
          <Item>
            <CommonPicker
              data={constants.bookList}
              onValueChange={this.onValueSearchListChange.bind(this)}
              value={searchListValue} />
          </Item>
        </Form>
        { isLoading && <Spinner /> }
        { !isLoading
          && books.length > 0
          && <FlatList
              data={books}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => this.renderBookItem(item)} />
        }
      </Container>
    );
  }
}
