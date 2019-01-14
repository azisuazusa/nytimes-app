/*
 * @flow
 */

import React, { Component } from 'react';
import { Container, Form, Item, Content } from 'native-base';
import SearchBox from '../../components/Article/SearchBox';

type Props = {};
type State = {
  searchValue: string,
  sortValue: string
};

export default class Article extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchValue: '',
      sortValue: ''
    }
  }

  onChangeSearchValue(searchValue: string) {
    this.setState({ searchValue });
  }

  onChangeSortValue(sortValue: string) {
    this.setState({ sortValue });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <SearchBox
                value={searchValue}
                onChangeText={this.onChangeSearchValue.bind(this)}
                onValueChange={this.onChangeSortValue.bind(this)} />
            </Item>
          </Form>
          <Container>
          </Container>
        </Content>
      </Container>
    );
  }
}
