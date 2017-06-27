# FiftyFifty Block
Full-width (.container--fluid) content block with image and content that are both 50% width.

## Default (Left-aligned image)
Example:
```javascript
import FiftyFifty from './FiftyFifty';

// Example of data structure that needs to be supplied by Contentful
const content = {
  id: 'id',
  description: 'description',
  headline: 'headline',
  legalText: 'legal text',
  image: {
    file: {
      url: 'file url'
    },
    description: 'file description'
  }
};

<FiftyFifty content={content} />
```

```
<FiftyFifty content={{
  id: 'id',
  description: 'description',
  headline: 'headline',
  legalText: 'legal text',
  image: {
    file: {
      url: 'file url'
    },
    description: 'file description'
  }
}} />
```

## Right-aligned image
Example:
```javascript
import FiftyFifty from './FiftyFifty';

// Exact same as above with an additional image align flag
const content = {
  ...
  imageAlign: 'Right'
};

<FiftyFifty content={content} />
```

```
<FiftyFifty content={{
  id: 'id',
  description: 'description',
  headline: 'headline',
  legalText: 'legal text',
  imageAlign: 'Right',
  image: {
    file: {
      url: 'file url'
    },
    description: 'file description'
  }
}} />
```

## Data structuring
Listed below are the required fields:
- id
- description
- image (media)

These are the optional fields:
- headline
- legalText
- imageAlign (defaults to left)
