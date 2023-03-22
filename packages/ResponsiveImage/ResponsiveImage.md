```jsx noeditor
<Notification>
  <Box between={2}>
    <Paragraph bold>
      New! The TDS documentation experience has been updated to be more performant!
    </Paragraph>
    <Paragraph>
      We encourage you to use our new component{' '}
      <Link href="https://telus.github.io/universal-design-system/components/allium/web/responsive-image">
        ResponsiveImage
      </Link>{' '}
      from UDS
    </Paragraph>
  </Box>
</Notification>
```

### Usage criteria

The `ResponsiveImage` component allows variation in "art direction" when wanting to change the image displayed to
suit different screen sizes. This can also be used to provide compressed files or alternate formats based on device to help reduce
download size.

Similarly to the Image component:

- We recommend not to resize or crop images in the browser
- Image optimization should be done BEFORE rendering
- You can use the `contentful API` to request an image of a certain size

Specific to ResponsiveImage:

- The image will fit to 100% of its parent container
- The image source will change based on `window width`, not parent container size
- Uses the following breakpoints:
  - xl: min-width 1200px
  - lg: min-width 992px
  - md: min-width 768px
  - sm: min-width 576px
  - xs: max-width 575px
- Provide a source for the sm and xs breakpoints as a minimum
- Internet Explorer is not supported and will use the fallback src provided

Change the window width to see the images change.

```jsx { "props": { "className": "docs_full-width-playground" }}
<ResponsiveImage
  lgSrc="responsive-image/mountains_desktop.jpg"
  mdSrc="responsive-image/mountains_tablet.jpg"
  smSrc="responsive-image/mountains_mobile.jpg"
  xsSrc="responsive-image/mountains_mobile.jpg"
  fallbackSrc="responsive-image/mountains_desktop.jpg"
  alt="mountain background"
/>
```
