import React from 'react';
import { shallow } from 'enzyme';
import BlockNbsContact from '../';

describe('BlockNbsContact', () => {
  describe('missing props', () => {
    it('should not render the phone number if phoneNumberComponents is undefined', () => {
      const props = {};
      const wrapper = shallow(<BlockNbsContact {...props} />);
      expect(wrapper.find('ComponentContactPhoneNumber').exists()).toEqual(false);
    });

    it('should not render the phone number if phoneNumberComponents is undefined', () => {
      const props = {
        contactComponent: {
          phoneNumberComponent: []
        }
      };
      const wrapper = shallow(<BlockNbsContact {...props} />);
      expect(wrapper.find('ComponentContactPhoneNumber').exists()).toEqual(false);
    });
  });

  it('should render the ContactComponent with the first phoneNumber component', () => {
    const props = {
      contactComponent: {
        phoneNumberComponent: [
          {
            description: 'Toll-free number',
            phoneNumber: '1-000-000-0000',
            operatingHours: '8am - 6pm EST, Sat - Sun'
          }
        ]
      }
    };

    const wrapper = shallow(<BlockNbsContact {...props} />);
    expect(wrapper.find('ComponentContactPhoneNumber').exists()).toEqual(true);
  });

  it('should render the ContactComponent with multiple phoneNumber components', () => {
    const props = {
      contactComponent: {
        phoneNumberComponent: [
          {
            description: 'Toll-free number',
            phoneNumber: '1-000-000-0000',
            operatingHours: '8am - 6pm EST, Saturday - Sunday'
          },
          {
            description: 'Toll-free number',
            phoneNumber: '1-000-000-0000',
            operatingHours: '9am - 5pm MST, Monday - Friday'
          }
        ]
      }
    };

    const wrapper = shallow(<BlockNbsContact {...props} />);
    expect(wrapper.find('ComponentContactPhoneNumber').length).toEqual(2);
  });

  it('should show middleColumn when respective property is true', () => {
    const props = { showMiddleContentColumn: true };
    const wrapper = shallow(<BlockNbsContact {...props} />);
    expect(wrapper.find('.nbs-contact__middle-column').exists()).toEqual(true);
  });

  it('should hide middleColumn when respective property is false', () => {
    const props = { showMiddleContentColumn: false };
    const wrapper = shallow(<BlockNbsContact {...props} />);
    expect(wrapper.find('.nbs-contact__middle-column').exists()).toEqual(false);
  });

  it('should hide middleColumn when respective property is not set', () => {
    const props = { showMiddleContentColumn: false };
    const wrapper = shallow(<BlockNbsContact {...props} />);
    expect(wrapper.find('.nbs-contact__middle-column').exists()).toEqual(false);
  });

  it('should get middleColumn content from props', () => {
    const expectedTitle = 'Middle Column Title';
    const expectedText = 'Middle Column Text';
    const expectedLink = { text: 'anyText', href: 'anyLink', target: 'anyTarget' };
    const props = { showMiddleContentColumn: true,
      middleContentColumnTitle: expectedTitle,
      middleContentColumnText: expectedText,
      middleContentColumnLink: expectedLink
    };
    const wrapper = shallow(<BlockNbsContact {...props} />);
    const link = wrapper.find('ChevronLink');
    expect(wrapper.find('.nbs-contact__middle-column h3').text()).toEqual(expectedTitle);
    expect(wrapper.find('.nbs-contact__middle-column p').text()).toEqual(expectedText);
    expect(link.props().title).toEqual(expectedLink.text);
    expect(link.props().uri).toEqual(expectedLink.href);
    expect(link.props().target).toEqual(expectedLink.target);
  });
});
