---
title: Video Block
template: layout-blocks.jade
---

## Video

A Video Block is a block that is composed of a youtube video in an iframe, and optionally, a title and short description underneath.

The video is left aligned, taking up 8 grid columns at medium width and higher. When the screen size is smaller, the video is centered.

---

<div id="videoBlockExample"></div>
<script type="text/babel">
  ReactDOM.render(
    <TDSBlocks.VideoBlockExample />,
    document.getElementById('videoBlockExample')
  );
</script>

```javascript
import React from 'react';
import VideoBlock from 'telus-thorium-enriched/blocks/VideoBlock';

const VideoBlockExample = () => {
  const props = {
    caption: 'Video caption title',
    subtext: 'Video caption short description',
    videoUrl: 'https://www.youtube.com/embed/0JQDjQj50qI'
  };

  return (
    <VideoBlock {...props} />
  );
};

export default VideoBlockExample;
```

## API


---
| Property |   Description   | Type | Default |
|:----|:------|:---|:---|
| `videoUrl` | video URL | `string` |  <p style='color: red'>required</p> |
| `caption` | optional string rendered below video iframe  | `string` |  '' |
| `subtext` | optional string rendered after caption  | `string` |  '' |
