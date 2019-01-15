/**
 * NYTimes React Native App
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Routes from './app/routes';
import initializations from './app/configs/initializations';

type Props = {};

export default class App extends Component<Props> {
  constructor() {
    super();
    initializations.initAxios();
  }

  render() {
    return <Routes />;
  }
}
