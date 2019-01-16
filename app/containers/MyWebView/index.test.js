import React from 'react';
import renderer from 'react-test-renderer';
import MyWebView from '../MyWebView';

it('MyWebView renders correctly', () => {
  const navigation = { getParam: jest.fn() };
  const tree = renderer.create(
    <MyWebView navigation={navigation} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
