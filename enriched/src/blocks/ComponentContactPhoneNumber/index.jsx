import PropTypes from 'prop-types';
import React from 'react';

if (process.env.BROWSER) {
  require('./c-contact-phone-number.scss');
}

/**
 * ComponentContactPhoneNumber is usually used with [BlockNbsContact](#blocknbscontact).
 *
 * It takes up the full width of its parent container.
 *
 * Contentful models (BUS > Marketing): Phone Number Component
 */
const ComponentContactPhoneNumber = ({
  description,
  phoneNumber,
  operatingHours,
  numberOfEmployees,
  displayNumberOfEmployees
}) => (
  <div className="c-contact-phone-number">
    <div className="text--small c-contact-phone-number__description">
      {description}{displayNumberOfEmployees && ` ${numberOfEmployees}`}
    </div>
    <a className="link--secondary text" href={`tel:${phoneNumber}`}>
      {phoneNumber}
    </a>
    <div className="text--small c-contact-phone-number__opening-hours">
      {operatingHours}
    </div>
  </div>
);

ComponentContactPhoneNumber.propTypes = {
  description: PropTypes.string,
  phoneNumber: PropTypes.string,
  operatingHours: PropTypes.string,
  numberOfEmployees: PropTypes.string,
  displayNumberOfEmployees: PropTypes.bool
};

ComponentContactPhoneNumber.defaultProps = {
  numberOfEmployees: '',
  displayNumberOfEmployees: false
};


export default ComponentContactPhoneNumber;
