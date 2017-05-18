import React from 'react';
import renderer from 'react-test-renderer';
import Wave from '../Wave';

describe('Wave Component', () => {
    var tree;

    tree = renderer.create(<Wave />).toJSON();
    it('should match the Wave component snapshot', () => {
        expect(tree).toMatchSnapshot();
    });
});
