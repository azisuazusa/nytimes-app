/*
 * @flow
 */

import React, { Component } from 'react';
import { Container, Form, Item } from 'native-base';
import CommonPicker from '../../components/Common/CommonPicker';
import constants from '../../configs/constants';

type Props = {};
type State = {
  searchListValue: string
};

export default class Book extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      searchListValue: ''
    }
  }

  onValueSearchListChange(searchListValue: string) {
    this.setState({ searchListValue });
  }

  render() {
    const { searchListValue } = this.state;
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
      </Container>
    );
  }
}
