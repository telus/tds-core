### Using a YouTube video

When using a video from YouTube is necessary, you may do so by providing the ID of the video to the `videoId` prop. This will leverage the standard YouTube player, but is compatible with `FlexGrid`. It is required that the time be passed in (in seconds) to the `videoLength` prop. Additionally, you may define the video's default volume and if it is muted from the start. If you happen to be using a YouTube video that is not in 16:9 aspect ratio, you may also set a 4:3 or 1:1 aspect ratio via the `aspectRatio` prop. If a thumbnail that is different from the one provided by YouTube is required, a custom one may be passed in to the `posterSrc` prop.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={12} md={10}>
      <WebVideo
        videoId="ppF-fn37SDs"
        videoLength={30}
        aspectRatio="16:9"
        defaultVolume={70}
        copy="en"
      />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
