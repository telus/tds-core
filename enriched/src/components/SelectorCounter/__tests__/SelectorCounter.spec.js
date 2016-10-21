import React from 'react';
import { mount, shallow } from 'enzyme';
import SelectorCounter from '../';
import CounterButton from '../CounterButton';

describe('<SelectorCounter />', () => {
  it('starts with a given default value', () => {
    expect(shallow(<SelectorCounter defaultValue={5} />)
      .find('.selector-counter__value').render().text()).toEqual("5");
  });

  describe('onChange handler', () => {
    let onChangeSpy;
    let wrapper;

    beforeEach(() => {
      onChangeSpy = jest.fn();
      wrapper = mount(
        <SelectorCounter
          defaultValue={1}
          onChange={onChangeSpy}
        />
      );
    });

    it('is called with the incremented value', () => {
      wrapper.find(CounterButton).first().simulate('click');
      expect(onChangeSpy.mock.calls.length).toEqual(1);
      expect(onChangeSpy.mock.calls[0][0]).toEqual(2);
    });

    it('is called with the decremented value', () => {
      wrapper.find(CounterButton).last().simulate('click');
      expect(onChangeSpy.mock.calls.length).toEqual(1);
      expect(onChangeSpy.mock.calls[0][0]).toEqual(0);
    });

    it('is not called when the min value has been reached', () => {
      wrapper = mount(<SelectorCounter onChange={onChangeSpy} />);
      wrapper.find(CounterButton).last().simulate('click');
      expect(onChangeSpy.mock.calls.length).toEqual(0);
    });
  });
});
