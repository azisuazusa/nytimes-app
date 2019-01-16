/*
 * @flow
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import { Container, Form, Item, Text } from 'native-base';
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
  articles: Array<any>,
  page: number
};

export default class Article extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      sortValue: '',
      isLoading: true,
      articles: [],
      page: 0
    }
  }

  componentDidMount() {
    this.getArticles();
  }

  getArticles(loadMore: boolean = false) {
    this.setState({ isLoading: true });
    const { searchValue, sortValue, page, articles } = this.state;
    let newPage = 0;
    if (loadMore) newPage = page + 1;
    articleApi.getArticles(searchValue, sortValue, newPage)
      .then(result => {
        let newArticles = result.data.response.docs;
        if (loadMore) newArticles = articles.concat(result.data.response.docs);
        this.setState({
          articles: newArticles,
          page: newPage,
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log('Get Article Error', error);
      });
  }

  onChangeSearchValue(searchValue: string) {
    this.setState({ searchValue }, this.getArticles);
  }

  onChangeSortValue(sortValue: string) {
    this.setState({ sortValue }, this.getArticles);
  }

  onPressArticle(webUrl: string) {
    const { navigation: { navigate } } = this.props;
    navigate('MyWebView', { webUrl });
  }

  renderArticleItem({ item }: any) {
    let image = '';
    let bylineOriginal = '';
    if (item.multimedia.length > 0) image = item.multimedia[0].url;
    if (item.byline != undefined) bylineOriginal = item.byline.original;
    const headline = item.headline.main.replace('; ', '\n');
    const pubDate = moment(item.pub_date);
    return (
      <ArticleItem
        typeOfMaterial={item.type_of_material}
        headline={headline}
        image={image}
        webUrl={item.web_url}
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
        <FlatList
          data={articles}
          onRefresh={this.getArticles.bind(this)}
          refreshing={isLoading}
          keyExtractor={(item) => item._id}
          onEndReached={this.getArticles.bind(this, true)}
          renderItem={this.renderArticleItem.bind(this)} />
      </Container>
    );
  }
}
