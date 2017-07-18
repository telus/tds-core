import React from 'react';
import { shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import TileImageTextLink from '../TileImageTextLink';

describe('TileImageTextLink', () => {
  const content = {
    url: 'url',
    image: {
      file: {
        url: 'file url'
      },
      description: 'file description'
    },
    description: 'description'
  };
  const buttonText = 'Shop Now';

  const tileImageTextLink = shallow(
    <TileImageTextLink content={content} buttonText={buttonText} />);

  it('should render ImageText5050 (snapshot)', () => {
    expect(renderToJson(tileImageTextLink)).toMatchSnapshot();
  });

  it('should return a title if it\'s in the data', () => {
    content.title = 'title';

    const newTileImageTextLink = shallow(
      <TileImageTextLink content={content} buttonText={buttonText} />);

    expect(newTileImageTextLink.find('.tile-image-text-link__title').length).toEqual(1);
  });
});
