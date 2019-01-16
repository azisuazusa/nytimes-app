import React from 'react';
import renderer from 'react-test-renderer';
import BookItem from '../BookItem';

it('BookItem renders correctly', () => {
  const tree = renderer.create(
    <BookItem
      title={'Sunset Bersama Rosie'}
      description={'Menikmati indahnya sunset bersama Rosie'}
      author={'Tere Liye'}
      publishedDate={'20 Januari 2016'}
      productUrl={'https://azisuazusa.blogspot.com'}
      onPress={() => null} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
