/*
 * @flow
 */

import React, { Component } from 'react';
import { Picker } from 'native-base';

type Props = {
  value: string,
  onValueChange: (value: string) => void,
  data: Array<{label: string, value: string}>
};

export default class CommonPicker extends Component<Props> {
  render() {
    const { value, onValueChange, data } = this.props;
    return (
      <Picker
        mode="dropdown"
        selectedValue={value}
        onValueChange={(v) => onValueChange(v)}>
        {data.map((v) => <Picker.Item label={v.label} value={v.value} key={v.value} />)}
      </Picker>
    );
  }
}
