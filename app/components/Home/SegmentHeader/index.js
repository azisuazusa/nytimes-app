/*
 * @flow
 */

import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Segment, Text } from 'native-base';

type Props = {};

export default class SegmentHeader extends Component<Props> {
  render() {
    return (
      <Header hasSegment>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Segment>
            <Button first active><Text>Articles</Text></Button>
            <Button last><Text>Books</Text></Button>
          </Segment>
        </Body>
        <Right />
      </Header>
    );
  }
}
