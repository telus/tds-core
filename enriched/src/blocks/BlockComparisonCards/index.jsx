import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';

if (process.env.BROWSER) {
  require('./b-comparison-cards.scss');
}

/**
 * BlockComparisonCards consists of responsive cards, which represent plans (and their features) that are to be compared.
 * The cards (3 is the maximum number recommended) are aligned side by side on screens above the medium breakpoint.
 * Below that, they are stacked.
 *
 * Contentful models (BUS > Marketing): Comparison Table Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-47
 */
const BlockComparisonCards = ({ title, plans }) => {
  function renderFeature(feature, index) {
    if (feature.value === 'true') {
      return (
        <li
          key={index}
          className="list__item text--medium"
        >
          {feature.featureDescription.name}
        </li>
      );
    }
    return null;
  }

  function renderFeatureText(feature, index) {
    if (!feature.value || feature.value.toLowerCase() === 'true' || feature.value.toLowerCase() === 'false') {
      return null;
    }
    const [first, ...rest] = feature.value.split(' ');
    return (
      <div key={index} className="c-comparison-plan__feature-value">
        <div className="heading-1">{first}</div>
        {
          rest.length &&
          <span className="text--medium">{rest.join(' ')}</span>
        }
      </div>
    );
  }

  return (
    <section className="container container--limited-width b-comparison-cards">
      <div className="container--mobile-padding">
        <h1>{title}</h1>
        <div className="b-comparison-cards__cards">
          {
            plans.map((plan, index) => (
              <Card
                key={index}
                className="c-comparison-plan"
              >
                <h3 className="heading-4 text--primary">{plan.title}</h3>
                <div className="c-comparison-plan__features">
                  <div className="c-comparison-plan__feature-left">
                    {
                      plan.features.map(renderFeatureText)
                    }
                  </div>
                  <div className="c-comparison-plan__feature-right">
                    <ul className="list list--checked ">
                      {
                        plan.features.map(renderFeature)
                      }
                    </ul>
                  </div>
                </div>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  );
};

BlockComparisonCards.propTypes = {
  title: PropTypes.string,
  /** array of cards, recommended: not greater than 3 */
  plans: PropTypes.arrayOf(PropTypes.shape({
    features: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      featureDescription: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string
      })
    })),
    title: PropTypes.string
  }))
};

BlockComparisonCards.defaultProps = {
  plans: []
};

export default BlockComparisonCards;
