import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import BlockComparisonCards from '../';

describe('BlockComparisonCards', () => {
  it('should match snapshot', () => {
    const props = {
      title: 'My plans',
      plans: [
        {
          title: 'Basic',
          features: [{
            value: '1 capybara',
            featureDescription: {
              name: 'Feature 1'
            }
          },{
            value: 'true',
            featureDescription: {
              name: 'Feature 2'
            }
          }, {
            value: 'false',
            featureDescription: {
              name: 'Feature 3'
            }
          }]
        },
        {
          title: 'Advanced',
          features: [{
            value: '10 capybaras',
            featureDescription: {
              name: 'Feature 1'
            }
          },{
            value: 'true',
            featureDescription: {
              name: 'Feature 2'
            }
          }, {
            value: 'true',
            featureDescription: {
              name: 'Feature 3'
            }
          }]
        },
        {
          title: 'Super',
          features: [{
            value: '100 capybaras',
            featureDescription: {
              name: 'Feature 1'
            }
          },{
            value: 'true',
            featureDescription: {
              name: 'Feature 2'
            }
          }, {
            value: 'true',
            featureDescription: {
              name: 'Feature 3'
            }
          }, {
            value: 'true',
            featureDescription: {
              name: 'Feature 4'
            }
          }]
        }
      ]
    };
    const blockComparisonCards = shallow(<BlockComparisonCards {...props} />);
    expect(shallowToJson(blockComparisonCards)).toMatchSnapshot();
  });

  describe('plans', () => {
    it('should render one plan', () => {
      const props = {
        plans: [
          { features: [] }
        ]
      };

      const wrapper = shallow(<BlockComparisonCards {...props} />);
      expect(wrapper.find('.c-comparison-plan')).toHaveLength(1);
    });

    it('should render multiple plans', () => {
      const props = {
        plans: [
          { features: [] },
          { features: [] }
        ]
      };

      const wrapper = shallow(<BlockComparisonCards {...props} />);
      expect(wrapper.find('.c-comparison-plan')).toHaveLength(2);
    });

    describe('feature checklist (on the right)', () => {
      it('should render the feature name if value is true', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Desktop softphone',
                    description: 'not important for this test'
                  },
                  value: 'true'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.list__item').text()).toEqual('Desktop softphone');
      });

      it('should not render the feature in the list if it is not of type boolean', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Number of devices',
                    description: 'not important for this test'
                  },
                  value: '1 device'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.list__item').exists()).toBeFalsy();
      });

      it('should not render anything if value is false', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Desktop softphone',
                    description: 'not important for this test'
                  },
                  value: 'false'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.list__item').exists()).toBeFalsy();
      });
    });

    describe('feature text (on the left)', () => {
      it('should not render the feature if value is true', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Desktop softphone',
                    description: 'not important for this test'
                  },
                  value: 'true'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.c-comparison-plan__feature-value').exists()).toBeFalsy();
      });

      it('should not render the feature if value is false', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Desktop softphone',
                    description: 'not important for this test'
                  },
                  value: 'false'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.c-comparison-plan__feature-value').exists()).toBeFalsy();
      });

      it('should render the feature if it is a non-boolean value', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Number of devices',
                    description: 'not important for this test'
                  },
                  value: '1 device'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.c-comparison-plan__feature-value').text()).toEqual('1device');
      });

      it('should split the feature value and render the first word in heading-1 size', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Number of devices',
                    description: 'not important for this test'
                  },
                  value: '100 awesome devices'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.c-comparison-plan__feature-value .heading-1').text()).toEqual('100');
        expect(wrapper.find('.c-comparison-plan__feature-value .text--medium').text()).toEqual('awesome devices');
      });

      it('should render the feature value', () => {
        const props = {
          plans: [
            {
              features: [
                {
                  featureDescription: {
                    name: 'Number of devices',
                    description: 'not important for this test'
                  },
                  value: '$50'
                }
              ]
            }
          ]
        };

        const wrapper = shallow(<BlockComparisonCards {...props} />);
        expect(wrapper.find('.c-comparison-plan__feature-value .heading-1').text()).toEqual('$50');
        expect(wrapper.find('.c-comparison-plan__feature-value .text--medium').exists()).toBeFalsy();
      });
    });
  });
});
