// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
// import TileImageTextLink from '../../components/TileImageTextLink/TileImageTextLink';

// Assets
import './three-tile-block.scss';

const ThreeTileBlock = ({ content, buttonText }) => {
  return (
    <div id={content.id} className="three-tile-block container container--fluid">
      {
        content.headline &&
        <h2 className="three-tile-block__headline" tabIndex="0">{content.headline}</h2>
      }
      <section className="three-tile-block__list grid-row three-col">
        {
          // content.products.map((product, i) => {
          //   return (
          //     <TileImageTextLink
          //       className="three-tile-block__item"
          //       key={i}
          //       content={product}
          //       buttonText={buttonText} />
          //   );
          // })
        }
      </section>
    </div>
  );
};

ThreeTileBlock.propTypes = {
  content: PropTypes.object.isRequired,
  buttonText: PropTypes.string.isRequired
};


export default ThreeTileBlock;
