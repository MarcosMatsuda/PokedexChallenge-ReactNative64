import 'react-native';
import React from 'react';
import { ListFooter } from '~/components';
import renderer from 'react-test-renderer';

describe('Snapshot testing', () => {
  test('should take Snapshot', () => {
    const tree = renderer.create(<ListFooter />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
