import React from 'react';
import renderer from 'react-test-renderer';
import SearchBox from '../SearchBox';

it('SearchBox renders correctly', () => {
  const tree = renderer.create(
    <SearchBox
      onValueChange={() => null}
      onChangeText={() => null}
      textValue={'New York Times'}
      pickerValue={'newest'} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
