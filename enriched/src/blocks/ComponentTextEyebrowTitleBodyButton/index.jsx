import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';
import { components } from '@telusdigital/redux-contentful';
import ChevronLink from '../../components/ChevronLink';

if (process.env.BROWSER) {
  require('./c-text-eyebrow-title-body-button.scss');
}

const { Legal: { WithLegal } } = components;

/**
 * ComponentTextEyebrowTitleBodyButton takes up the full width of its parent container.
 *
 * Contentful models (BUS > Marketing): n/a
 *
 */
const ComponentTextEyebrowTitleBodyButton = ({
  className,
  link,
  title,
  content,
  eyebrow,
  chevron,
  headingClass,
  bodyClass
}) => {
  function renderLink() {
    if (chevron) {
      return (
        <ChevronLink
          className={cx('chevron-link--primary', bodyClass)}
          uri={link.href}
          title={link.text}
          target={link.target}
        />);
    }
    return (
      <a className="button button--primary" target={link.target} href={link.href}>
        {link.text}
      </a>);
  }

  return (
    <div className={cx('c-text-eyebrow-title-body-button', className)}>
      {eyebrow &&
      <p className="c-text-eyebrow-title-body-button__eyebrow heading-4">
        <WithLegal content={eyebrow} />
      </p>
      }
      <div className={cx('c-text-eyebrow-title-body-button__title', headingClass)}>
        <WithLegal content={title} />
      </div>
      <p className={cx('c-text-eyebrow-title-body-button__content', bodyClass)}>
        <WithLegal content={content} />
      </p>
      {link.href && renderLink()}
    </div>
  );
};

ComponentTextEyebrowTitleBodyButton.propTypes = {
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

ComponentTextEyebrowTitleBodyButton.defaultProps = {
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
  headingClass: 'display-heading-1',
  bodyClass: ''
};

export default ComponentTextEyebrowTitleBodyButton;
