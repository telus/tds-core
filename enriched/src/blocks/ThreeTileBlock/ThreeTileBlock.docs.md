# ThreeTileBlock
Full-width (in container) content block with three col containing TileImageTextLink Component

## Default
Example:
```javascript
import ThreeTileBlock from './ThreeTileBlock';

// Example of data structure that needs to be supplied to Component
const data = {
  id: '', // optional, text string
  headline: '', // optional, text string
  products: [
    {
      className: '', // optional, text string
      url: '', // required, text string
      image: { // required, default media object from Contentful
        file: {
          url: ''
        }
      },
      title: '', // optional, text string
      description: '', // required, text string
    }
  ] // required, array of objects (no requirement built in for how many products are returned, but three is recommended)
};

const buttonText = 'Shop now';

<ThreeTileBlock content={data} buttonText={buttonText} />
```

```
<ThreeTileBlock content={{
  id: 'featured-tech',
  headline: 'Featured Tech',
  products: [
    {
      className: 'featured-tech__item',
      url: 'https://www.telus.com/mobility/accessories/product/google-home',
      image: {
        file: {
          url: 'https://images.contentful.com/oia8yg65m0on/3ecPOoA064QsQGC68CWceK/8297d15414af8b6bc174cf7df3aa6693/GoogleHome_Feature2.png'
        }
      },
      title: 'Google Home',
      description: 'Hands-free help from Google Assistant now available for $179.99.',
    },
    {
      className: 'featured-tech__item',
      url: 'https://www.telus.com/mobility/accessories/product/nokia-thermo-smart-temporal-thermometer',
      image: {
        file: {
          url: 'https://images.contentful.com/oia8yg65m0on/1pJ5Jz8tGIQGyIOMs6Aeik/29b19d57f356004ea366057e6f7e1ed1/Capture.PNG'
        }
      },
      title: 'Nokia Thermo Smart Temporal Thermometer',
      description: 'Monitor your health with medically­-approved measurement in 2 seconds.',
    },
    {
      className: 'featured-tech__item',
      url: 'https://www.telus.com/mobility/accessories/product/jaybird-x3-headphones',
      image: {
        file: {
          url: 'https://images.contentful.com/oia8yg65m0on/2yg1R1E3ocIQGyu6oAOUCw/3927f530b2811e1f1f022b9e9b2b1786/Lifestyle_1_-_Male_Running.PNG'
        }
      },
      title: 'Jaybird X3 Sport Bluetooth Headphones',
      description: 'Secure fit and sweatproof. Save $30 on the Jaybird X-3 for the month of July.',
    }
  ]
}} buttonText="Shop now" />
```
