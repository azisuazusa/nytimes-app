import React, { Component } from 'react';
import { WebView } from 'react-native';

type Props = {};

export default class MyWebView extends Component<Props> {
  render() {
    const { navigation } = this.props;
    return (
      <WebView
        startInLoadingState={true}
        source={{uri: navigation.getParam('webUrl', 'https://www.nytimes.com/')}} />
    );
  }
}
