import React from 'react';
import renderer from 'react-test-renderer';
import Article from '../Article';

it('Article renders correctly', () => {
  const tree = renderer.create(<Article />).toJSON();
  expect(tree).toMatchSnapshot();
});
