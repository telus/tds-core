import React from 'react';
import cx from 'classnames';

import { components } from '@telusdigital/redux-contentful';

const { Legal: { WithLegal } } = components;

const ComponentTextTitleBodyButton = (props) => {
  const { className, ctaLink, caption, description } = props;

  const cls = cx(className);

  return (
    <div className={cls}>
      <h4><WithLegal content={caption} /></h4>
      <p>
        <WithLegal content={description} />
      </p>
      <a className="button button-green" target={ctaLink.target} href={ctaLink.href}>
        {ctaLink.text}
      </a>
    </div>
  );
};

ComponentTextTitleBodyButton.propTypes = {
  className: React.PropTypes.string,
  ctaLink: React.PropTypes.object,
  caption: React.PropTypes.string,
  description: React.PropTypes.string
};

ComponentTextTitleBodyButton.defaultProps = {
  className: '',
  ctaLink: {
    target: '',
    href: '',
    text: ''
  },
  caption: '',
  description: ''
};

export default ComponentTextTitleBodyButton;
