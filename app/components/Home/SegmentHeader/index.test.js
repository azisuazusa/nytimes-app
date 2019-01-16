import React from 'react';
import SegmentHeader from '../SegmentHeader';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

it('SegmentHeader renders correctly', () => {
  configure({ adapter: new Adapter() });
  const tree = shallow(
    <SegmentHeader
      active={0}
      onPressArticle={() => null}
      onPressBook={() => null} />
  );
  expect(tree).toMatchSnapshot();
  tree.setProps({ active: 1 });
  expect(tree).toMatchSnapshot();
});
