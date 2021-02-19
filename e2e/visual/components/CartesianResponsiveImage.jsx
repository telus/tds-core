/* eslint-disable react/no-children-prop */
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Cartesian } from '@compositor/kit'

import ResponsiveImage from '../../../packages/ResponsiveImage'

const viewports = [
  { width: 320, height: 568 },
  { width: 640, height: 360 },
  { width: 768, height: 1024 },
  { width: 1024, height: 543 },
  { width: 1440, height: 880 },
]

const ResponsiveImageContainer = props => {
  // "Responsive" component from "@compositor/kit" does not take in a title attribute for
  // iframe, failing the accessibility scan. iframe used to test different window sizes
  const html = innerHtml => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Document</title>
  </head>
  <body>
    ${innerHtml}
  </body>
  </html>
  `

  const CartesianResponsiveImage = renderToString(
    <Cartesian
      {...props}
      component={ResponsiveImage}
      lgSrc="https://tds.telus.com/components/responsive-image/mountains_desktop.jpg"
      mdSrc="https://tds.telus.com/components/responsive-image/mountains_tablet.jpg"
      smSrc="https://tds.telus.com/components/responsive-image/mountains_mobile.jpg"
      xsSrc="https://tds.telus.com/components/responsive-image/mountains_mobile.jpg"
      fallbackSrc="https://tds.telus.com/components/responsive-image/mountains_desktop.jpg"
      alt="mountains background"
    />
  )

  return (
    <>
      {viewports.map((viewport, i) => (
        <iframe
          key={JSON.stringify(viewport[i])}
          title={`test-width: ${viewport.width}`}
          style={{
            width: viewport.width,
            height: viewport.height,
          }}
          srcDoc={html(CartesianResponsiveImage)}
        />
      ))}
    </>
  )
}

export default { name: 'ResponsiveImage', Component: ResponsiveImageContainer }
