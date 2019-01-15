/**
 * NYTimes React Native App
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import Routes from './app/routes';

type Props = {};

export default class App extends Component<Props> {
  render() {
    return <Routes />;
  }
}
