// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Assets
import './card-product.scss';

const CardProduct = ({ content, breakpoint, globalContent, locale }) => {
  const formatCurrency = (lang, price, callback) => {
    // If english, return standard price, otherwise reformat to follow French grammar.
    const currency = lang === 'en' ? `${price}` : `${price.toString().replace('.', ',')}`;

    // Support optional callback
    if (callback) {
      return callback(currency);
    }

    return currency;
  };

  return (
    <div className={`card-product ${content.contentAlign === 'Left' ? 'card-product--left' : 'card-product--right'}`}>
      <p className="card-product__sale text--medium">{content.copy}</p>
      {
        (breakpoint !== 'small' && breakpoint !== 'xs') &&
        content.productImage &&
        <div className="card-product__product">
          <img src={content.productImage.file.url} alt={content.productImage.description} />
        </div>
      }
      <div className="card-product__priceDetails">
        <h4 tabIndex="0">{content.productName}</h4>
        <p tabIndex="0" className="card-product__sale-price">
          {globalContent.nowText}&nbsp;
          <span>
            {
              locale.lang === 'en' &&
              <sup className="currency">$</sup>
            }
            {
              content.salePrice ? (
                formatCurrency(locale.lang, content.salePrice)
              ) : (
                formatCurrency(locale.lang, content.basePrice)
              )
            }
            {
              locale.lang === 'fr' &&
              <sup className="currency">$</sup>
            }
          </span>
        </p>
        {
          content.salePrice &&
          <p className="card-product__price text--small">
            <strong>{globalContent.regularPrice}: </strong>
            <s>
              {
                locale.lang === 'en' &&
                <span>$</span>
              }
              {formatCurrency(locale.lang, content.basePrice)}
              {
                locale.lang === 'fr' &&
                <span> $</span>
              }
            </s>
          </p>
        }
        <a
          href={content.product}
          className="text--medium chevron-link--primary card-product__link"
          role="button">
          {globalContent.shopNow}
        </a>
      </div>
    </div>
  );
};

CardProduct.propTypes = {
  content: PropTypes.object.isRequired,
  breakpoint: PropTypes.string,
  globalContent: PropTypes.object.isRequired,
  locale: PropTypes.object.isRequired
};


export default CardProduct;
