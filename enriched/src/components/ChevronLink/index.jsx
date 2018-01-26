import PropTypes from 'prop-types';
import React from 'react';

if (process.env.BROWSER) {
  require('./chevron-link.scss');
}


const ChevronLink = ({ className, uri, target, title }) => (
  <a
    className={className}
    href={uri}
    target={target}
  >
    {title}
  </a>
);

ChevronLink.propTypes = {
  uri: PropTypes.string,
  title: PropTypes.string,
  target: PropTypes.string,
  className: PropTypes.string
};

ChevronLink.defaultProps = {
  target: '_self',
  className: 'chevron-link--secondary',
  title: '',
  uri: ''
};

export default ChevronLink;
