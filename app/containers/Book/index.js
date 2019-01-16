/*
 * @flow
 */

import React, { Component } from 'react';
import { Container, Form, Item } from 'native-base';
import { FlatList } from 'react-native';
import CommonPicker from '../../components/Common/CommonPicker';
import BookItem from '../../components/Book/BookItem';
import constants from '../../configs/constants';
import bookApi from '../../apis/book';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import moment from 'moment';

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {
  searchListValue: string,
  books: Array<any>,
  isLoading: boolean,
  offset: number,
  page: number
};

export default class Book extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchListValue: 'e-book-fiction',
      books: [],
      isLoading: true,
      offset: 0,
      page: 1
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks(loadMore: boolean = false) {
    const { searchListValue, offset, books, page } = this.state;
    let newOffset = 0;
    let newPage = 1;
    let newLoadMore = loadMore && books.length == page * 20; 
    if (newLoadMore) {
      this.setState({ isLoading: true });
      newOffset = offset + 20;
      newPage = page + 1;
    }
    bookApi.getBooks(searchListValue, newOffset)
      .then(result => {
        let newBooks = result.data.results;
        if (newLoadMore) newBooks = books.concat(result.data.results); 
        this.setState({
          books: newBooks,
          offset: newOffset,
          page: newPage,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log('Get Book Error', error);
      });
  }

  onValueSearchListChange(searchListValue: string) {
    this.setState({ searchListValue }, this.getBooks);
  }

  onPressBook(webUrl: string) {
    const { navigation: { navigate } } = this.props;
    navigate('MyWebView', { webUrl });
  }

  renderBookItem(book: any) {
    if (book.book_details.length == 0) return null;
    const { title, description, author } = book.book_details[0];
    const publishedDate = moment(book.published_date);
    return (
      <BookItem
        title={title}
        description={description}
        author={author}
        publishedDate={publishedDate.format("dddd, MMMM Do YYYY")}
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
        <FlatList
          data={books}
          refreshing={isLoading}
          onRefresh={this.getBooks.bind(this)}
          onEndReached={this.getBooks.bind(this, true)}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => this.renderBookItem(item)} />
      </Container>
    );
  }
}
