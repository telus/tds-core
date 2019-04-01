### Basic usage

#### Usage criteria and accessibility considerations

- Be sure to supply videos that support [our target browsers](https://tds.telus.com/faq.html#what-browsers-does-tds-support)
  - Code: Make use of the `isFallback` key in the `sources` prop to define a fallback video when the primary video supplied does not fully support our target browsers
- Use Video with [FlexGrid](#flexgrid) to control the dimensions of Video within page content
- Recommended video dimensions are at least 288w x 162h

While we recognize the demand for options that autoplay or loop videos automatically on completion, we have decided to omit these for accessibility reasons. Videos with these options available can be distracting or even distressing to those who struggle with sensory overload. We believe that omitting these features will encourage the most inclusive experience possible for our customers.

#### Supplying a video to the `sources` prop

Videos are supplied to the player through the `sources` prop, which accepts an array of objects. Each object in the array represents a video file.

Each video will appear in the "Quality" dialogue from top to bottom sorted by `qualityRank` in ascending order. It is recommended to use the vertical height of the video followed by the first letter of its scan type. For example, a 1920x1080 progressive scan video would be `'1080p'`.

#### Supplying tracks (subtitles, closed captions, descriptions)

Tracks are supplied to the player through the `tracks` prop, which accepts an array of objects. Each object in the array represents a track file. Typically, these will be different languages or separate files for closed captions, subtitles, or descriptions. If no tracks are provided, the captions button will not be visible in the player.

```jsx
<Video
  sources={[
    {
      source: 'sample-video-1080.mp4',
      mediaType: 'video/mp4',
      qualityName: '1080p',
      qualityRank: 1,
    },
    {
      source: 'sample-video-480.mp4',
      mediaType: 'video/mp4',
      qualityName: '480p',
      qualityRank: 2,
    },
  ]}
  defaultDesktopQuality={1}
  defaultMobileQuality={2}
  posterSrc="test-poster.jpg"
  tracks={[
    {
      label: 'English',
      kind: 'captions',
      language: 'en',
      source: 'english-captions.vtt',
    },
    {
      label: 'French',
      kind: 'captions',
      language: 'en',
      source: 'french-captions.vtt',
    },
  ]}
  copy="en"
/>
```

### Setting default volume and mute state

Depending on the contents of your video, you may want to set a default volume, default mute state, or both. This can be useful if you have a video that is too loud, or with sounds that happen immediately at the start (for example, loud music on the first frame of the video). Setting these props on your video can create a more comfortable experience to users who may be startled or distracted by loud and/or sudden noises.

```jsx
<FlexGrid>
  <FlexGrid.Row>
    <FlexGrid.Col xs={10}>
      <Video
        sources={[
          {
            source: 'sample-video-1080.mp4',
            mediaType: 'video/mp4',
            qualityName: '1080p',
            qualityRank: 1,
          },
          {
            source: 'sample-video-480.mp4',
            mediaType: 'video/mp4',
            qualityName: '480p',
            qualityRank: 2,
          },
        ]}
        defaultDesktopQuality={1}
        defaultMobileQuality={1}
        posterSrc="test-poster.jpg"
        tracks={[
          {
            label: 'English',
            kind: 'captions',
            language: 'en',
            source: 'english-captions.vtt',
            isDefault: true,
          },
          {
            label: 'French',
            kind: 'captions',
            language: 'en',
            source: 'french-captions.vtt',
          },
        ]}
        defaultVolume={70}
        beginMuted={true}
        copy="en"
      />
    </FlexGrid.Col>
  </FlexGrid.Row>
</FlexGrid>
```
