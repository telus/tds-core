import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { componentWithName, or } from '@tds/util-prop-types'

import { warn } from '../../../shared/utils/warn'
import safeRest from '../../../shared/utils/safeRest'
import media from '../../../shared/utils/media/media'
import colors from '../../../shared/utils/colors'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

const StyledButton = styled.button`
  border-width: 0;
  border-radius: 4px;

  height: 3.25rem;
  margin: 0;
  padding: 0 2rem;

  cursor: pointer;

  background: none;
  transition: background 0.2s;

  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  word-wrap: break-word;

  font-size: 1rem;
  letter-spacing: -0.8px;
  line-height: 1.5;
  font-weight: 700;


  ${media.greaterThan('sm')`
    display: inline-flex;

    width: auto;
    min-width: 180px;
  `}

  background-color: ${colors.tokens.primary};
  color: ${colors.white};

  &:hover {
    box-shadow: 0 0 0 1px;

    background-color: ${colors.white};
    color: ${colors.tokens.primary};
  }
`

const StyledButtonPrimary = styled(StyledButton)`
  background-color: ${colors.tokens.primary};
  color: ${colors.white};

  &:hover {
    box-shadow: 0 0 0 1px;

    background-color: ${colors.white};
    color: ${colors.tokens.primary};
  }
`

const StyledButtonSecondary = styled(StyledButton)`
  background-color: ${colors.tokens.secondary};
  color: ${colors.white};

  &:hover {
    box-shadow: 0 0 0 1px;

    background-color: ${colors.white};
    color: ${colors.tokens.secondary};
  }
`

const StyledButtonInverted = styled(StyledButton)`
  background-color: ${colors.white};
  color: ${colors.typography.text};

  &:hover {
    box-shadow: 0 0 0 1px;

    background-color: ${colors.tokens.secondary};
    color: ${colors.white};
  }
`

/**
 * @version ./package.json
 */
const BaseButton = ({ variant, dangerouslyAddClassName, type, element, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  let ButtonComponent
  if (variant === 'secondary') {
    ButtonComponent = StyledButtonSecondary
  } else if (variant === 'inverted') {
    ButtonComponent = StyledButtonInverted
  } else {
    ButtonComponent = StyledButtonPrimary
  }
  return <ButtonComponent {...safeRest(restNoDisabled)} className={dangerouslyAddClassName} as={element} type={type} />
}

BaseButton.propTypes = {
  /**
   * @ignore
   *
   * The HTML element type.
   */
  element: PropTypes.oneOf(['button', 'a']),
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * The label. It can include the `A11yContent` component.
   */
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}

BaseButton.defaultProps = {
  element: 'button',
  type: 'button',
  variant: 'primary',
}

/** @component */
export default BaseButton
