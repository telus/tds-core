import PropTypes from 'prop-types';
import React from 'react';
import ChevronLink from '../../components/ChevronLink';
import ComponentCardWithButton from '../ComponentCardWithButton';
import ComponentContactPhoneNumber from '../ComponentContactPhoneNumber';

if (process.env.BROWSER) {
  require('./b-nbs-contact.scss');
}

/**
 * BlockNbsContact is composed of a [ComponentCardWithButton](#componentcardwithbutton),
 * an optional middle callback column, and a right column that contains contact information,
 * represented by an array of [ComponentContactPhoneNumber](#componentcontactphonenumber).
 * The optional middle callback column will not be rendered if prop `showMiddleContentColumn` is set to false.
 *
 * Contentful models (BUS > Marketing): Call To Action Block
 *
 * https://telusdigital.atlassian.net/browse/BMK-128
 */
const BlockNbsContact = ({
  contactComponent,
  requestSalesCallbackCta,
  showMiddleContentColumn,
  middleContentColumnTitle,
  middleContentColumnText,
  middleContentColumnLink
}) => (
  <section className="b-nbs-contact">
    <div className="container container--limited-width">
      <div className="grid-row">

        <div className="small-12 medium-6 large-4">
          <ComponentCardWithButton {...requestSalesCallbackCta} />
        </div>

        { showMiddleContentColumn &&
        <div className="small-12 medium-6 large-4 b-nbs-contact__phone-numbers nbs-contact__middle-column">
          <h3>{middleContentColumnTitle}</h3>
          <p className="text text--small">
            {middleContentColumnText}
          </p>

          <ChevronLink
            title={middleContentColumnLink.text}
            uri={middleContentColumnLink.href}
            target={middleContentColumnLink.target}
            className="chevron-link--primary text--small"
          />

        </div>
        }

        <div
          className={`small-12 medium-6 ${showMiddleContentColumn ? 'large-4' : 'large-8'} b-nbs-contact__phone-numbers`}
        >
          <h3>{ contactComponent.title }</h3>
          { contactComponent.phoneNumberComponent &&
          contactComponent.phoneNumberComponent.map((localProps, index) =>
            <ComponentContactPhoneNumber key={index} {...localProps} />
          )}
          <div className="lower-link">
            { contactComponent.lowerLink &&
            <a
              className="text text--small link link--descent"
              href={contactComponent.lowerLink.href}
              target={contactComponent.lowerLink.target}
            >
              { contactComponent.lowerLink.text }
            </a> }
          </div>
        </div>

      </div>
    </div>
  </section>
);

BlockNbsContact.propTypes = {
  /** props consumed by ComponentCardWithButton */
  requestSalesCallbackCta: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  contactComponent: PropTypes.shape({
    title: PropTypes.string,
    /** Contentful link field */
    lowerLink: PropTypes.shape({
      target: PropTypes.string,
      text: PropTypes.string,
      href: PropTypes.string
    }),
    /** array of phoneNumbers. Each element is consumed by ComponentContactPhoneNumber */
    phoneNumberComponent: PropTypes.arrayOf(PropTypes.shape({
      description: PropTypes.string,
      phoneNumber: PropTypes.string,
      operatingHours: PropTypes.string
    }))
  }),
  showMiddleContentColumn: PropTypes.bool,
  middleContentColumnTitle: PropTypes.string,
  middleContentColumnText: PropTypes.string,
  /** Contentful link field */
  middleContentColumnLink: PropTypes.shape({
    target: PropTypes.string,
    text: PropTypes.string,
    href: PropTypes.string
  })
};

BlockNbsContact.defaultProps = {
  requestSalesCallbackCta: {},
  contactComponent: {
    phoneNumberComponent: []
  },
  showMiddleContentColumn: false,
  middleContentColumnLink: {}
};

export default BlockNbsContact;
