import { colorText, colorWhite } from '@tds/core-colours'

export const fontTelus = '"TELUS-Web", "Helvetica Neue", Helvetica, Arial, sans-serif'

/**
 * helveticaNeueThin35 300
 * helveticaNeueLight45 400
 * helveticaNeueRoman55 500
 * helveticaNeueMedium65 700
 */

export const helveticaNowExtraLight = {
  fontWeight: 300,
}

export const helveticaNowLight = {
  fontWeight: 325,
}

export const helveticaNowRegular = {
  fontWeight: 400,
}

export const helveticaNowMedium = {
  fontWeight: 500,
}

export const helveticaNowBold = {
  fontWeight: 700,
}

export const sizeSmall = {
  fontSize: '0.875rem',
  letterSpacing: '0px',
  lineHeight: '1.42857',
}

export const sizeMedium = {
  fontSize: '1rem',
  letterSpacing: '0px',
  lineHeight: '1.5',
}

export const sizeLarge = {
  fontSize: '1.25rem',
  letterSpacing: '0px',
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
  ...helveticaNowRegular,
}

export const medium = {
  ...wordBreak,
  ...sizeMedium,
}

export const mediumFont = {
  ...helveticaNowLight,
}

export const large = {
  ...wordBreak,
  ...sizeLarge,
}

export const largeFont = {
  ...wordBreak,
  ...helveticaNowLight,
}

export const boldFont = {
  ...wordBreak,
  ...helveticaNowMedium,
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
