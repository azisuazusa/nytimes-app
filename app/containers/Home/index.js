/*
 * @flow
 */

import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import SegmentHeader from '../../components/Home/SegmentHeader';
import Article from '../Article';
import Book from '../Book';

type Props = {};
type State = {
  active: number
};

export default class Home extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      active: 0
    }
  }

  onPressSegment(active: number) {
    this.setState({ active });
  }

  render() {
    const { active } = this.state;
    return (
      <Container>
        <SegmentHeader
          active={active}
          onPressArticle={() => this.onPressSegment(0)}
          onPressBook={() => this.onPressSegment(1)} />
        <Content>
          {(active == 0) ? <Article /> : <Book />}
        </Content>
      </Container>
    );
  }
}
