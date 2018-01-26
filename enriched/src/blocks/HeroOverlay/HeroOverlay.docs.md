# HeroOverlay Block
Full-width hero block with background image and content overlaid on top.

## Props
<table>
  <tr>
    <th>title</th>
    <td>Required. Text String</td>
  </tr>
  <tr>
    <th>subtitle</th>
    <td>Optional. Text String. Limit to 100 characters.</td>
  </tr>
  <tr>
    <th>contentAlign</th>
    <td>Optional. Text String. Supports: "Left", "Centre", "Right". Defaults to right if not supplied.</td>
  </tr>
  <tr>
    <th>backgroundImage</th>
    <td>Required. Object (standard media field type from Contentful)</td>
    <td>Example: `backgroundImage: {
      file: {
        url: 'file-url'
      }
    }`</td>
  </tr>
  <tr>
    <th>backgroundPosition</th>
    <td>Optional. Array of two values. Accepts "top", "middle", "bottom" for left side of array. Accepts "left", "center", "right" for right side of array. Defaults to `[25%, center]` if not supplied.</td>
    <td>Example: `backgroundPosition: [left, bottom]`</td>
  </tr>
</table>

## Default (Least amount of props supplied)
Example:
```javascript
import HeroOverlay from './HeroOverlay';

// Example props
const accessories = "Accessories";
const backgroundImg = {
  file: {
    url: "//images.contentful.com/oia8yg65m0on/4TIF9etVi0Q2eoCUUakwS8/864aea2b7d92b54ae09f675ec34c044c/header_copy_3.jpg)"
  }
}

<HeroOverlay title={accessories} backgroundImage={backgroundImg} />
```

```
<HeroOverlay title="Accessories" backgroundImage={{
  file: {
    url: "//images.contentful.com/oia8yg65m0on/4TIF9etVi0Q2eoCUUakwS8/864aea2b7d92b54ae09f675ec34c044c/header_copy_3.jpg)"
  }
}} />
```

## Left aligned text and positioned background image
Example:
```javascript
import HeroOverlay from './HeroOverlay';

// Example props
const accessories = "Accessories";
const backgroundImg = {
  file: {
    url: "//images.contentful.com/oia8yg65m0on/4TIF9etVi0Q2eoCUUakwS8/864aea2b7d92b54ae09f675ec34c044c/header_copy_3.jpg)"
  }
}
const textAlign = "Left";
const bgPosition = ["center", "bottom"];

<HeroOverlay
  title={accessories}
  backgroundImage={backgroundImg}
  contentAlign={textAlign}
  backgroundPosition={bgPosition} />
```

```
<HeroOverlay
  title="Accessories"
  backgroundImage={{
    file: {
      url: "//images.contentful.com/oia8yg65m0on/4TIF9etVi0Q2eoCUUakwS8/864aea2b7d92b54ae09f675ec34c044c/header_copy_3.jpg)"
    }
  }}
  contentAlign="Left"
  backgroundPosition={["center", "bottom"]} />
```

## Center aligned text, positioned background image, and subtitle
Example:
```javascript
import HeroOverlay from './HeroOverlay';

// Example props
const accessories = "Accessories";
const subheading = "Explore the latest tech accessories available at TELUS";
const backgroundImg = {
  file: {
    url: "//images.contentful.com/oia8yg65m0on/4TIF9etVi0Q2eoCUUakwS8/864aea2b7d92b54ae09f675ec34c044c/header_copy_3.jpg)"
  }
}
const textAlign = "Centre";
const bgPosition = ["left", "top"];

<HeroOverlay
  title={accessories}
  subtitle={subheading}
  backgroundImage={backgroundImg}
  contentAlign={textAlign}
  backgroundPosition={bgPosition} />
```

```
<HeroOverlay
  title="Accessories"
  subtitle="Explore the latest tech accessories available at TELUS"
  backgroundImage={{
    file: {
      url: "//images.contentful.com/oia8yg65m0on/4TIF9etVi0Q2eoCUUakwS8/864aea2b7d92b54ae09f675ec34c044c/header_copy_3.jpg)"
    }
  }}
  contentAlign="Centre"
  backgroundPosition={["left", "top"]} />
```
