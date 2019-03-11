import { colorText, colorWhite } from '@tds/core-colours'

export const helveticaNeueThin35 = {
  fontWeight: 300,
}

export const helveticaNeueLight45 = {
  fontWeight: 400,
}

export const helveticaNeueRoman55 = {
  fontWeight: 500,
}

export const helveticaNeueMedium65 = {
  fontWeight: 700,
}

export const sizeSmall = {
  fontSize: '0.875rem',
  letterSpacing: -0.6,
  lineHeight: '1.42857',
}

export const sizeMedium = {
  fontSize: '1rem',
  letterSpacing: -0.8,
  lineHeight: '1.5',
}

export const sizeLarge = {
  fontSize: '1.25rem',
  letterSpacing: -1,
  lineHeight: '1.6',
}

export const wordBreak = {
  wordWrap: 'break-word',
}

export const baseSupSubScripts = {
  position: 'relative',
  verticalAlign: 'baseline',
  paddingLeft: '0.1em',
}

export const sup = {
  top: '-0.5em',
  fontSize: '0.875rem',
  ...baseSupSubScripts,
}

export const base = {
  ...wordBreak,
  fontSize: 'inherit',
}

export const baseFont = {
  fontWeight: 'inherit',
}

export const small = {
  ...wordBreak,
  ...sizeSmall,
}

export const smallFont = {
  ...helveticaNeueRoman55,
}

export const medium = {
  ...wordBreak,
  ...sizeMedium,
}

export const mediumFont = {
  ...helveticaNeueLight45,
}

export const large = {
  ...wordBreak,
  ...sizeLarge,
}

export const largeFont = {
  ...wordBreak,
  ...helveticaNeueLight45,
}

export const boldFont = {
  ...wordBreak,
  ...helveticaNeueMedium65,
}

export const color = {
  color: colorText,
}

export const invertedColor = {
  color: colorWhite,
}

export const blockText = {
  display: 'block',
}
