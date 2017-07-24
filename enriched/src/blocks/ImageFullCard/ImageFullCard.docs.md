# ImageFullCard Block
Full-width (viewport) content block with background image and card of content that sits on top.

## Default (Left-aligned content)
Example:
```javascript
import ImageFullCard from './ImageFullCard';

// Example of data structure that needs to be supplied to Component
const data = {
  id: 'google-home-enjoy-your-music', // optional, text string
  headline: 'Enjoy your music', // optional, text string
  description: 'With a simple voice command, play music, podcasts, news and radio from services like Google Play Music, Spotify and more. Enjoy even more compatible audio services by streaming directly from your Android or iPhone to Google Home from one of 100+ Chromecast-enabled apps.*', // required, text string
  legalText: '*Google Home is optimised for selected music and audio services only. Subscriptions/payments may be required.', // optional, text string
  image: { // Standard media field from Contentful
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/2kC9VXQ9iAAc0eIIQ8y8UE/de2ef235c4873da55571f4beb71319c5/background-3-x__1_.jpg'
    }
  },
  contentAlign: 'Left' // supports "Left" or "Right". Defaults Left. text string
};

<ImageFullCard content={data} />
```

```
<ImageFullCard content={{
  id: 'google-home-enjoy-your-music',
  headline: 'Enjoy your music',
  description: 'With a simple voice command, play music, podcasts, news and radio from services like Google Play Music, Spotify and more. Enjoy even more compatible audio services by streaming directly from your Android or iPhone to Google Home from one of 100+ Chromecast-enabled apps.*',
  legalText: '*Google Home is optimised for selected music and audio services only. Subscriptions/payments may be required.',
  image: {
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/2kC9VXQ9iAAc0eIIQ8y8UE/de2ef235c4873da55571f4beb71319c5/background-3-x__1_.jpg'
    }
  },
  contentAlign: 'Left'
}} />
```

## Right-aligned image
Example:
```javascript
import ImageText5050 from './ImageText5050';

// Exact same as above with an additional image align flag
const data = {
  ...
  contentAlign: 'Right'
};

<ImageFullCard content={data} />
```

```
<ImageText5050 content={{
  id: 'google-home-enjoy-your-music',
  headline: 'Enjoy your music',
  description: 'With a simple voice command, play music, podcasts, news and radio from services like Google Play Music, Spotify and more. Enjoy even more compatible audio services by streaming directly from your Android or iPhone to Google Home from one of 100+ Chromecast-enabled apps.*',
  legalText: '*Google Home is optimised for selected music and audio services only. Subscriptions/payments may be required.',
  image: {
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/2kC9VXQ9iAAc0eIIQ8y8UE/de2ef235c4873da55571f4beb71319c5/background-3-x__1_.jpg'
    }
  },
  contentAlign: 'Right'
}} />
```
