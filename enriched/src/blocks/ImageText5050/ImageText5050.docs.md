# ImageText5050 Block
Full-width (in container) content block with image and content that are both 50% width.

## Default (Left-aligned image)
Example:
```javascript
import ImageText5050 from './ImageText5050';

// Example of data structure that needs to be supplied to Component
const data = {
  id: 'google-home-control', // optional, text string
  headline: 'Control smart devices', // optional, text string
  description: 'Link compatible smart home products to control things like your thermostat or entertainment on your TV.*', // required, text string
  legalText: '*Controlling your TV requires a Chromecast or a TV with Chromecast built-in.', // optional, text string
  image: { // Standard media field from Contentful
    file: {
      url: 'https://images.contentful.com/oia8yg65m0on/46kiEmr0pa2EsuSIWIA8YS/1b1626894d0957a22b00b6afe0428ead/nest-google-home__1_.jpg'
    },
    description: 'Photo showing Nest thermostat beside Google Home'
  },
  imageAlign: 'Left' // supports "Left" or "Right". Defaults Left. text string
};

<ImageText5050 content={data} />
```

```
<ImageText5050 content={{
  id: 'google-home-control',
  headline: 'Control smart devices',
  description: 'Link compatible smart home products to control things like your thermostat or entertainment on your TV.*',
  legalText: '*Controlling your TV requires a Chromecast or a TV with Chromecast built-in.',
  image: {
    file: {
      url: 'https://images.contentful.com/oia8yg65m0on/46kiEmr0pa2EsuSIWIA8YS/1b1626894d0957a22b00b6afe0428ead/nest-google-home__1_.jpg'
    },
    description: 'Photo showing Nest thermostat beside Google Home'
  },
  imageAlign: 'Right'
}} />
```

## Right-aligned image
Example:
```javascript
import ImageText5050 from './ImageText5050';

// Exact same as above with an additional image align flag
const data = {
  ...
  imageAlign: 'Right'
};

<ImageText5050 content={data} />
```

```
<ImageText5050 content={{
  id: 'google-home-control',
  headline: 'Control smart devices',
  description: 'Link compatible smart home products to control things like your thermostat or entertainment on your TV.*',
  legalText: '*Controlling your TV requires a Chromecast or a TV with Chromecast built-in.',
  image: {
    file: {
      url: 'https://images.contentful.com/oia8yg65m0on/46kiEmr0pa2EsuSIWIA8YS/1b1626894d0957a22b00b6afe0428ead/nest-google-home__1_.jpg'
    },
    description: 'Photo showing Nest thermostat beside Google Home'
  },
  imageAlign: 'Right'
}} />
```
