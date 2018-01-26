# TileImageTextLink Component
Component with stacked image, title, description, and link.

## Default (Left-aligned image)
Example:
```javascript
import TileImageTextLink from './TileImageTextLink';

// Example of data structure that needs to be supplied to Component
const data = {
  url: 'https://www.telus.com/mobility/phones/google-pixel', // required, text string
  title: 'Google Pixel', // optional, text string
  description: 'Manage your smart home products on Pixel and power them with the Google Home.', // required, text string
  image: { // Standard media field from Contentful
    file: {
      url: 'https://images.contentful.com/oia8yg65m0on/1Jxq0Bxmy0QGwgKQCG4UmU/9814d03e4cb8cc811e9b7bf4dc79ce71/google-pixel_2x.jpg'
    },
    description: 'Haut-parleurs internes de Google Home'
  }
};

const shopText = 'Shop Now';

<TileImageTextLink content={data} buttonText={shopText} />
```

```
<TileImageTextLink content={{
  url: 'https://www.telus.com/mobility/phones/google-pixel', // required, text string
  title: 'Google Pixel', // optional, text string
  description: 'Manage your smart home products on Pixel and power them with the Google Home.', // required, text string
  image: { // Standard media field from Contentful
    file: {
      url: 'https://images.contentful.com/oia8yg65m0on/1Jxq0Bxmy0QGwgKQCG4UmU/9814d03e4cb8cc811e9b7bf4dc79ce71/google-pixel_2x.jpg'
    },
    description: 'Haut-parleurs internes de Google Home'
  }
}} buttonText="Shop Now" />
```
