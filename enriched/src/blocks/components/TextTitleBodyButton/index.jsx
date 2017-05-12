import React from 'react';
import cx from 'classnames';

import { components } from '@telusdigital/redux-contentful';
const { Legal: { WithLegal } } = components;

const TextTitleBodyButton = (props) => {
  const {className, ctaLink, title, description} = props;

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
  className: React.PropTypes.string,
  ctaLink: React.PropTypes.object,
  title: React.PropTypes.string,
  description: React.PropTypes.string
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
