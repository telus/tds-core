import React from 'react';
import { shallow } from 'enzyme';
import ComponentContactPhoneNumber from '../';

describe('ComponentContactPhoneNumber', () => {
  it('should set the description ', () => {
    const props = {
      description: 'Toll-free number'
    };

    const wrapper = shallow(<ComponentContactPhoneNumber {...props} />);
    const description = wrapper.find('.c-contact-phone-number__description');
    expect(description.text()).toEqual('Toll-free number');
  });

  it('should set the phone number text', () => {
    const props = {
      phoneNumber: '1-000-000-0000'
    };

    const wrapper = shallow(<ComponentContactPhoneNumber {...props} />);
    const phoneNumber = wrapper.find('a');
    expect(phoneNumber.text()).toEqual('1-000-000-0000');
  });

  it('should set the phone number as a link', () => {
    const props = {
      phoneNumber: '1-000-000-0000'
    };

    const wrapper = shallow(<ComponentContactPhoneNumber {...props} />);
    const phoneNumber = wrapper.find('a');
    expect(phoneNumber.props()).toHaveProperty('href', 'tel:1-000-000-0000');
  });

  it('should set the operating hours', () => {
    const props = {
      operatingHours: '8am - 6pm EST, Sat - Sun'
    };

    const wrapper = shallow(<ComponentContactPhoneNumber {...props} />);
    const operatingHours = wrapper.find('.c-contact-phone-number__opening-hours');
    expect(operatingHours.text()).toEqual('8am - 6pm EST, Sat - Sun');
  });

  it('should display number of employees after description', () => {
    const props = {
      description: 'Small Business',
      numberOfEmployees: '1 - 50 Employees',
      displayNumberOfEmployees: true
    };

    const wrapper = shallow(<ComponentContactPhoneNumber {...props} />);
    const operatingHours = wrapper.find('.c-contact-phone-number__description');
    expect(operatingHours.text()).toEqual('Small Business 1 - 50 Employees');
  });

  it('should not display number of employees after description if prop is not passed in', () => {
    const props = {
      description: 'Small Business',
      numberOfEmployees: '1 - 50 Employees'
    };

    const wrapper = shallow(<ComponentContactPhoneNumber {...props} />);
    const operatingHours = wrapper.find('.c-contact-phone-number__description');
    expect(operatingHours.text()).toEqual('Small Business');
  });
});
