import React from 'react';
import renderer from 'react-test-renderer';
import ArticleItem from '../ArticleItem';

it('ArticleItem renders correctly', () => {
  const tree = renderer.create(
    <ArticleItem
      typeOfMaterial={'Article'}
      headline={'MAKIN DAGIN ONTA DENGAN SAYUR KOL'}
      image={'https://images.unsplash.com/photo-1547564091-6c5a23ce7aba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'}
      bylineOriginal={'Azis Abdul Bachar'}
      pubDate={'16 Januari 2019'}
      webUrl={'https://azisuazusa.blogspot.com'}
      onPress={() => null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
