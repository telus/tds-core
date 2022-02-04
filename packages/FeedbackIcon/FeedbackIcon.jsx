import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { getCopy, safeRest, pixelToRem } from '@tds/util-helpers'

import { warn } from '../../shared/utils/warn'

const StyledSVG = styled.svg(({ width, height }) => ({
  width: `${width}rem`,
  height: `${height}rem`,
}))
/**
 * @version ./package.json
 */
const FeedbackIcon = ({ width, height, copy, copyDictionary, optionalText, children, ...rest }) => {
  if (rest.onClick) {
    warn(
      'FeedbackIcon',
      'FeedbackIcons are not meant to be interactive, do not pass an onClick handler.'
    )
  }

  const a11yText = getCopy(copyDictionary, !optionalText ? copy || 'en' : copy).a11yText

  if (!optionalText && a11yText === '') {
    warn(
      'FeedbackIcon',
      'The `copy` prop is required, please provide some copy by supplying an object with `a11yText` as a key and your copy as a value.'
    )
  }

  return (
    <StyledSVG
      {...safeRest(rest)}
      role="img"
      aria-hidden={a11yText === '' ? true : undefined}
      width={pixelToRem(width)}
      height={pixelToRem(height)}
    >
      {a11yText && <title>{a11yText}</title>}
      {children}
    </StyledSVG>
  )
}

FeedbackIcon.propTypes = {
  /**
   * Use the copy prop to either select provided English or French copy
   * by passing `'en'` or `'fr'` respectively.
   *
   * To provide your own, pass a JSON object with the key `a11yText`.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      a11yText: PropTypes.string.isRequired,
    }),
  ]).isRequired,
  /** @ignore */
  copyDictionary: PropTypes.object,
  /** @ignore */
  optionalText: PropTypes.bool,
  /** @ignore */
  children: PropTypes.node.isRequired,
  /** @ignore */
  width: PropTypes.number.isRequired,
  /** @ignore */
  height: PropTypes.number.isRequired,
}

FeedbackIcon.defaultProps = {
  optionalText: false,
  copyDictionary: {},
}

export default FeedbackIcon
