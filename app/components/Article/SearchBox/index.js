/*
 * @flow
 */

import React, { Component } from 'react';
import { Input, Grid, Col } from 'native-base';
import CommonPicker from '../../Common/CommonPicker';
import constants from '../../../configs/constants';

type Props = {
  value: string,
  onValueChange: (value: string) => void,
  onChangeText: (value: string) => void
};

export default class SearchBox extends Component<Props> {
  render() {
    const { value, onValueChange, onChangeText } = this.props;
    return (
      <Grid>
        <Col>
          <Input
            placeholder="Search..."
            onChangeText={onChangeText} />
        </Col>
        <Col>
          <CommonPicker
            data={constants.sortArticle}
            onValueChange={onValueChange}
            value={value} />
        </Col>
      </Grid>
    );
  }
}
