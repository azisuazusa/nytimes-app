/*
 * @flow
 */

import React, { Component } from 'react';
import { Container } from 'native-base';
import SegmentHeader from '../../components/Home/SegmentHeader';

type Props = {};

export default class Home extends Component<Props> {
  render() {
    return (
      <Container>
        <SegmentHeader />
      </Container>
    );
  }
}
