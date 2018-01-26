import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../components/Card';
import ComponentTextEyebrowTitleBodyButton from '../ComponentTextEyebrowTitleBodyButton';

if (process.env.BROWSER) {
  require('./c-card-with-button.scss');
}

/**
 * ComponentCardWithButton simply wraps a Card component around a
 * [ComponentTextEyebrowTitleBodyButton](#componenttexteyebrowtitlebodybutton).
 * All props are passed down to the child component.
 *
 * It takes up the full width of its parent container.
 *
 * Contentful models (BUS > Marketing): N/A
 */
const ComponentCardWithButton = props => (
  <div className="c-card-with-button">
    <Card>
      <ComponentTextEyebrowTitleBodyButton {...props} />
    </Card>
  </div>
);

ComponentCardWithButton.propTypes = {
  className: PropTypes.string,
  /** Contentful link field */
  link: PropTypes.shape({
    target: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string
  }),
  /** recommended: text should fit in one line */
  title: PropTypes.string,
  /** recommended: text should fit in one line */
  eyebrow: PropTypes.string,
  content: PropTypes.string,
  /** boolean value that specifies if call to action is a button or a chevron link */
  chevron: PropTypes.bool,
  /** optional CSS class for title */
  headingClass: PropTypes.string,
  /** optional CSS class for body */
  bodyClass: PropTypes.string
};

ComponentCardWithButton.defaultProps = {
  className: '',
  link: {
    target: '',
    href: '',
    text: ''
  },
  title: '',
  eyebrow: '',
  content: '',
  chevron: false,
  headingClass: 'heading-1',
  bodyClass: ''
};

export default ComponentCardWithButton;
