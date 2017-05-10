import React from 'react';

if ( process.env.BROWSER ) {
  require('./b-hero-wave-title-eyebrow.scss');
}

const BlockHeroWaveTitleEyebrow = (props) => {
  const { eyebrow, title } = props;

  return (
    <div className="b-hero-wave-title-eyebrow__bg">
      <div className="container container--limited-width">
        <div className="grid-row">
          <div className="medium-6 large-7 xl-7">
            <p className="heading-4 b-hero-wave-title-eyebrow--grape">{eyebrow}</p>
            <h1 className="display-heading-1">{title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

BlockHeroWaveTitleEyebrow.propTypes = {
  title: React.PropTypes.string.isRequired,
  eyebrow: React.PropTypes.string
};

BlockHeroWaveTitleEyebrow.defaultProps = {
  eyebrow: ''
};

export default BlockHeroWaveTitleEyebrow;
