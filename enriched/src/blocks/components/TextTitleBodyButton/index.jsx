import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import { components } from '@telusdigital/redux-contentful';

const { Legal: { WithLegal } } = components;

const TextTitleBodyButton = (props) => {
  const { className, ctaLink, title, description } = props;

  const cls = cx(className);

  return (
    <div className={cls}>
      <h4><WithLegal content={title} /></h4>
      <p>
        <WithLegal content={description} />
      </p>
      <a className="button button-green" target={ctaLink.target} href={ctaLink.href}>
        {ctaLink.text}
      </a>
    </div>
  );
};

TextTitleBodyButton.propTypes = {
  className: PropTypes.string,
  ctaLink: PropTypes.object,
  title: PropTypes.string,
  description: PropTypes.string
};

TextTitleBodyButton.defaultProps = {
  className: '',
  ctaLink: {
    target: '',
    href: '',
    text: ''
  },
  title: '',
  description: ''
};

export default TextTitleBodyButton;
