### Usage criteria

* We recommend not to `resize/crop` images in the browser.
* The width and height should be the same ratio as the natural width and height of the image.
* Image optimization should be done BEFORE rendering.
* You can use the `contentful API` to request an image of a certain size.
* `rounded="circle"` requires a square image `(width == height)` in order to generate a perfect circle.
* Non-square images will give a warning and will appear oval shaped.

```jsx
<Image src="image-example.jpg" rounded="corners" width={300} height={300} alt="Image of co-workers collaborating" />
```
