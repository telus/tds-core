# ImageCard Block
Full-width (in container) content block with background image and content that sits on top. On mobile and tablet the content flows below image for legibility.

## Alternative Layout (Right-aligned content)
Example:
```javascript
import ImageCard from './ImageCard';

// Example of data structure that needs to be supplied to Component
const data = {
  id: 'accessory-of-the-month', // optional, text string
  headline: 'Accessory of the Month', // required, text string
  contentAlign: 'Right' // optional. Accepts 'Left' or 'Right'. Defaults to right. Text string
  bannerImage: { // Standard media field from Contentful
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/6mkBbdeKC4ykQeEwuSE4og/8ab8ed08129021ec145946f0ede0bd89/Lifestyle_CoupleCollab_UEWonder_GCL_FLIP.jpg'
    },
    description: 'UE WONDERBOOM Black on the table'
  },
};

<ImageCard content={data}>"Children go here. Recommended Card or CardProduct."</ImageCard>
```

```
<ImageCard content={{
  id: 'accessory-of-the-month', // optional, text string
  headline: 'Accessory of the Month', // required, text string
  contentAlign: 'Right' // optional. Accepts 'Left' or 'Right'. Defaults to right. Text string
  bannerImage: { // Standard media field from Contentful
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/6mkBbdeKC4ykQeEwuSE4og/8ab8ed08129021ec145946f0ede0bd89/Lifestyle_CoupleCollab_UEWonder_GCL_FLIP.jpg'
    },
    description: 'UE WONDERBOOM Black on the table'
  },
}}><Card>Big sound. Small speaker. Save $20 on the UE WONDERBOOM.</Card></ImageCard>
```

## Default (Left-aligned content)
Example:
```javascript
import ImageCard from './ImageCard';

// Example of data structure that needs to be supplied to Component
const data = {
  id: 'accessory-of-the-month', // optional, text string
  headline: 'Accessory of the Month', // required, text string
  contentAlign: 'Left' // optional. Accepts 'Left' or 'Right'. Defaults to right. Text string
  bannerImage: { // Standard media field from Contentful
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/6mkBbdeKC4ykQeEwuSE4og/8ab8ed08129021ec145946f0ede0bd89/Lifestyle_CoupleCollab_UEWonder_GCL_FLIP.jpg'
    },
    description: 'UE WONDERBOOM Black on the table'
  },
};

<ImageCard content={data}>"Children go here. Recommended Card or CardProduct."</ImageCard>
```

```
<ImageCard content={{
  id: 'accessory-of-the-month', // optional, text string
  headline: 'Accessory of the Month', // required, text string
  contentAlign: 'Left' // optional. Accepts 'Left' or 'Right'. Defaults to right. Text string
  bannerImage: { // Standard media field from Contentful
    file: {
      url: 'http://images.contentful.com/oia8yg65m0on/6mkBbdeKC4ykQeEwuSE4og/8ab8ed08129021ec145946f0ede0bd89/Lifestyle_CoupleCollab_UEWonder_GCL_FLIP.jpg'
    },
    description: 'UE WONDERBOOM Black on the table'
  },
}}><Card>Big sound. Small speaker. Save $20 on the UE WONDERBOOM.</Card></ImageCard>
```
