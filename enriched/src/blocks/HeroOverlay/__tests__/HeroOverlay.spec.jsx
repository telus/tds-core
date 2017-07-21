import React from 'react';
import { shallow } from 'enzyme';
import HeroOverlay from '../HeroOverlay';

describe('Hero', () => {
  const title = "Hero Title";
  const subtitle = "Hero Subtitle";
  const contentAlign = "Left";
  const backgroundImage = {
    file: {
      url: 'background image'
    }
  };

  const hero = shallow(
    <HeroOverlay
      title={title}
      subtitle={subtitle}
      contentAlign={contentAlign}
      backgroundImage={backgroundImage} />
  );

  it('should render the title', () => {
    expect(hero.find('.hero-overlay__title').html()).toContain(title);
  });

  it('should render the subtitle', () => {
    expect(hero.find('.hero-overlay__subtitle').html()).toContain(subtitle);
  });

  it('should render with the flag for content on the left when contentAlign equals "Left"', () => {
    expect(hero.find('.align-content-left').length).toEqual(1);
  });

  it('should render without the flag for content on the left when contentAlign doesn\'t equal "Left"', () => {
    const contentAlignNew = "Right";

    const heroNew = shallow(
      <HeroOverlay
      title={title}
      subtitle={subtitle}
      contentAlign={contentAlignNew}
      backgroundImage={backgroundImage} />
    );

    expect(heroNew.find('.align-content-left').length).toEqual(0);
  });

  it('should render without background image styles if there\'s no file in props', () => {
    const backgroundImageNew = {};

    const heroNew = shallow(
      <HeroOverlay
      title={title}
      subtitle={subtitle}
      contentAlign={contentAlign}
      backgroundImage={backgroundImageNew} />
    );

    expect(heroNew.find('.hero-overlay').html()).toContain('style="background-image:url(null)');
  });
});
