import React from 'react';
import renderer from 'react-test-renderer';
import Book from '../Book';

it('Book renders correctly', () => {
  const tree = renderer.create(
    <Book />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
