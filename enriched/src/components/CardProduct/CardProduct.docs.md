# CardProduct Block
Alternative component to Card component for a product specifically.

## Important Notes
This component uses a `breakpoint` prop. It is optional, but highly recommended (for the best mobile experience). This prop allows you to pass a value to the component of the width of the viewport, using the same values that TDS grid uses. So if `breakpoint` equals `xs` or `small` the Product image will disappear. You'll need to create a resize event listener / get the viewport width on page load to fully utilize this prop!

Price formatting is automatically handled by the component.

## Default
Example:
```javascript
import CardProduct from './CardProduct';

// Example of data structure that needs to be supplied to Component
const data = {
  contentAlign: 'Right' // optional. Accepts 'Left' or 'Right'. Defaults to right. Text string
  productImage: { // required, standard media field from Contentful
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/5y3rBYILNSIE860ESCGuSM/e838c27e1aca6202d45583e2231b7f26/UE_Wonderboom_Phantom_Back_Product.JPG'
    },
    description: 'UE WONDERBOOM Phantom Black'
  },
  productName: 'UE WONDERBOOM', // required, text string
  salePrice: '109.99', // optional, number
  basePrice: '129.99', // required, number
  product: 'https://www.telus.com/en/on/mobility/accessories/product/ultimate-ears-wonderboom' // required, text string
};

const viewportWidth = "xs";

const globalStrings = {
  nowText: 'Now', // required
  regularPrice: 'Regular Price', // required
  shopNow: 'Shop now' // required
}

const location = {
  lang: 'en', // required
  prov: 'on' // optional
}

<CardProduct
  content={data}
  breakpoint={viewportWidth}
  globalContent={globalStrings}
  locale={location} />
```

```
<CardProduct
  content={{
    contentAlign: 'Right'
    productImage: {
      file: {
        url: 'http://images.contentful.com/oia8yg65m0on/5y3rBYILNSIE860ESCGuSM/e838c27e1aca6202d45583e2231b7f26/UE_Wonderboom_Phantom_Back_Product.JPG'
      },
      description: 'UE WONDERBOOM Phantom Black'
    },
    productName: 'UE WONDERBOOM',
    salePrice: '109.99',
    basePrice: '129.99',
    product: 'https://www.telus.com/en/on/mobility/accessories/product/ultimate-ears-wonderboom'
  }}
  breakpoint="xs"
  globalContent={{
    nowText: 'Now',
    regularPrice: 'Regular Price',
    shopNow: 'Shop now'
  }}
  locale={{
    lang: 'en'
  }} />
```
