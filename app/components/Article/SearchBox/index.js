/*
 * @flow
 */

import React, { Component } from 'react';
import { Input, Grid, Col } from 'native-base';
import CommonPicker from '../../Common/CommonPicker';
import constants from '../../../configs/constants';

type Props = {
  textValue: string,
  pickerValue: string,
  onValueChange: (value: string) => void,
  onChangeText: (value: string) => void
};

export default class SearchBox extends Component<Props> {
  render() {
    const { textValue, pickerValue, onValueChange, onChangeText } = this.props;
    return (
      <Grid>
        <Col>
          <Input
            placeholder="Search..."
            value={textValue}
            onChangeText={onChangeText} />
        </Col>
        <Col>
          <CommonPicker
            data={constants.sortArticle}
            onValueChange={onValueChange}
            value={pickerValue} />
        </Col>
      </Grid>
    );
  }
}
