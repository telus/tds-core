import React from 'react';

if (process.env.BROWSER) {
  require('./b-hero-title-eyebrow.scss');
}

const BlockHeroTitleEyebrow = (props) => {
  const { eyebrow, title, heroImage } = props;

  const headerImage = {
    backgroundImage: `url(${heroImage.file.url})`,
    paddingBottom: `28.125%`,
    backgroundPosition: `center top`,
    backgroundSize: `cover`,
    position: `relative`,
    width: `100%`
  };

  return (
    <section>
      <div className="b-hero-title-eyebrow" style={headerImage} />
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-12">
            <p className="heading-4 b-hero-title-eyebrow__eyebrow">{eyebrow}</p>
            <h1 className="heading-1">{title}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

BlockHeroTitleEyebrow.propTypes = {
  title: React.PropTypes.string.isRequired,
  eyebrow: React.PropTypes.string,
  heroImage: React.PropTypes.object.isRequired
};

BlockHeroTitleEyebrow.defaultProps = {
  eyebrow: ''
};

export default BlockHeroTitleEyebrow;
