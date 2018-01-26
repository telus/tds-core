import React from 'react';
import { shallow, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import CardProduct from '../CardProduct';

describe('CardProduct', () => {
  const content = {
    contentAlign: 'Right',
    product: 'product url',
    basePrice: 'test base price',
    bannerImage: {
      file: {
        url: 'background image'
      }
    },
    productImage: {
      file: {
        url: 'product image'
      }
    }
  };

  const globalContent = {
    shopNow: 'Shop Now',
    nowText: 'Now',
    regularPrice: 'Regular Price'
  };

  const locale = {
    lang: 'en'
  };

  const breakpoint = 'xs';

  const cardProduct = shallow(
    <CardProduct
      content={content}
      breakpoint={breakpoint}
      globalContent={globalContent}
      locale={locale} />);

  it('should render CardProduct (snapshot)', () => {
    expect(renderToJson(cardProduct)).toMatchSnapshot();
  });

  it('should add right class when contentAlign equals Right', () => {
    expect(cardProduct.find('.card-product--right').length).toEqual(1);
  });

  it('should add left class when contentAlign equals Left', () => {
    content.contentAlign = 'Left';

    const cardProductLeft = shallow(
      <CardProduct
        content={content}
        breakpoint={breakpoint}
        globalContent={globalContent}
        locale={locale} />
    );

    expect(cardProductLeft.find('.card-product--left').length).toEqual(1);
  });

  it('should render product url based on data', () => {
    expect(cardProduct.find('.card-product__link').first().html()).toContain(content.product);
  });

  it('should render without a sale price when there isn\'t one in the data', () => {
    expect(cardProduct.find('.card-product__price').length).toEqual(0);
  });

  it('should render with a sale price when there is one in the data', () => {
    content.salePrice = 'test sale price';

    const cardProductSalePrice = shallow(<CardProduct
      content={content}
      breakpoint={breakpoint}
      globalContent={globalContent}
      locale={locale} />);

    expect(cardProductSalePrice.find('.card-product__price').length).toEqual(1);
  });

  it('should not render product image if breakpoint equals "xs"', () => {
    expect(cardProduct.find('.card-product__product').length).toEqual(0);
  });

  it('should render product image if breakpoint equals "medium"', () => {
    const newBreakpoint = 'medium';

    const cardProductLarge = shallow(<CardProduct
      content={content}
      breakpoint={newBreakpoint}
      globalContent={globalContent}
      locale={locale} />);

    expect(cardProductLarge.find('.card-product__product').length).toEqual(1);
  });
});
