import React from 'react';
import cx from 'classnames';

const TextTitleBodyButton = (props) => {
  const {className, ctaLink, title, description} = props;

  const cls = cx(className);

  return (
    <div className={cls}>
      <h4>{title}</h4>
      <p>
        {description}
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
