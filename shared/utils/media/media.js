import { generateMedia } from 'styled-media-query'
import { css } from 'styled-components'

const media = generateMedia({
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
})

export const spacing = {
  mobile: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '1.5rem',
    5: '2rem',
    6: '2.5rem',
    7: '3rem',
    8: '4rem',
  },
  desktop: {
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '2rem',
    5: '3rem',
    6: '4rem',
    7: '4.5rem',
    8: '6rem',
  },
}

/*
 * Creates styled-components string interpolations with breakpoints for box
 * levels using the provided css
 *
 * ex:
 * boxSpacing(5, (spacing) => `
 *  padding-left: ${spacing};
 *  padding-right: ${spacing};
 * `)
 *
 * will produce:
 * .CLASSNAME {
 *    padding-left: 2rem;
 *    padding-right: 2rem;
 * }
 * @media (min-width:576px) {
 * .CLASSNAME {
 *    padding-left: 3rem;
 *    padding-right: 3rem;
 * }
*/
export const boxSpacing = (level, f) => {
  const mobileStyle = css(...f(spacing.mobile[level]))
  if (spacing.mobile[level] === spacing.desktop[level]) {
    return mobileStyle
  }
  const desktopStyle = media.greaterThan('sm')(...f(spacing.desktop[level]))

  return mobileStyle.concat(desktopStyle)
}

export default media
