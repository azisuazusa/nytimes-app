/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import { Container, Form, Item, Spinner, Text } from 'native-base';
import { FlatList, ScrollView } from 'react-native';
import SearchBox from '../../components/Article/SearchBox';
import ArticleItem from '../../components/Article/ArticleItem';
import articleApi from '../../apis/article';
import { NavigationScreenProp, NavigationState } from 'react-navigation';
import moment from 'moment';

type Props = {
  navigation: NavigationScreenProp<NavigationState>
};

type State = {
  searchValue: string,
  sortValue: string,
  isLoading: boolean,
  articles: Array<any>
};

export default class Article extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      sortValue: '',
      isLoading: true,
      articles: []
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles() {
    const { searchValue, sortValue } = this.state;
    articleApi.getArticles(searchValue, sortValue)
      .then(result => {
        this.setState({
          articles: result.data.response.docs,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log('Get Article Error', error);
      });
  }

  onChangeSearchValue(searchValue: string) {
    this.setState({ searchValue, isLoading: true }, this.getArticles);
  }

  onChangeSortValue(sortValue: string) {
    this.setState({ sortValue, isLoading: true }, this.getArticles);
  }

  onPressArticle(webUrl: string) {
    const { navigation: { navigate } } = this.props;
    navigate('MyWebView', { webUrl });
  }

  renderArticleItem(article: any) {
    let image = '';
    let bylineOriginal = '';
    if (article.multimedia.length > 0) {
      image = article.multimedia[0].url;
    }
    if (article.byline != undefined) {
      bylineOriginal = article.byline.original;
    }
    const headline = article.headline.main.replace('; ', '\n');
    const pubDate = moment(article.pub_date);
    return (
      <ArticleItem
        typeOfMaterial={article.type_of_material}
        headline={headline}
        image={image}
        webUrl={article.web_url}
        onPress={this.onPressArticle.bind(this)}
        bylineOriginal={bylineOriginal}
        pubDate={pubDate.format('dddd, MMMM Do YYYY')} />
    );
  }

  render() {
    const { searchValue, sortValue, isLoading, articles } = this.state;
    return (
      <Container>
        <Form>
          <Item>
            <SearchBox
              textValue={searchValue}
              pickerValue={sortValue}
              onChangeText={this.onChangeSearchValue.bind(this)}
              onValueChange={this.onChangeSortValue.bind(this)} />
          </Item>
        </Form>
        { isLoading && <Spinner /> }
        { !isLoading
            && articles.length > 0
            && <FlatList
                data={articles}
                keyExtractor={(item) => item._id}
                renderItem={({item}) => this.renderArticleItem(item)} />
        }
      </Container>
    );
  }
}
