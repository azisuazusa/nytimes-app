/*
 * @flow
 */

import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Segment, Text } from 'native-base';

type Props = {
  active: number,
  onPressArticle: () => void,
  onPressBook: () => void
};

export default class SegmentHeader extends Component<Props> {
  static defaultProps = {
    active: 0
  }

  render() {
    const { active, onPressArticle, onPressBook } = this.props;
    return (
      <Header hasSegment>
        <Left />
        <Body>
          <Segment>
            <Button first active={active == 0} onPress={() => onPressArticle()}>
              <Text>Articles</Text>
            </Button>
            <Button last active={active == 1} onPress={() => onPressBook()}>
              <Text>Books</Text>
            </Button>
          </Segment>
        </Body>
        <Right />
      </Header>
    );
  }
}
