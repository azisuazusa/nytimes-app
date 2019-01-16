import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../Home';

it('Home renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('onPressSegment Test', () => {
  const tree = renderer.create(<Home />).getInstance();
  tree.onPressSegment(1);
  expect(tree.state.active).toEqual(1);
});
