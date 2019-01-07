import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { componentWithName, or } from '@tds/util-prop-types'

import { warn } from '../../shared/utils/warn'
import safeRest from '../../shared/utils/safeRest'
import media from '../../shared/utils/media/media'

const preventDisabling = ({ disabled, ...props }) => {
  if (disabled) {
    warn('Button', 'Buttons are not able to be disabled.')
  }

  return props
}

const BaseButton = styled.button`
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
`

const ButtonPrimary = styled(BaseButton)`
  background-color: #248700;
  color: #FFFFFF;
`

const ButtonSecondary = styled(BaseButton)`
  background-color: #4b286d;
  color: #FFFFFF;
`

const ButtonInverted = styled(BaseButton)`
  background-color: #FFFFFF;
  color: #2a2c2e;
`

/**
 * @version ./package.json
 */
const Button = ({ variant, dangerouslyAddClassName, ...rest }) => {
  const restNoDisabled = preventDisabling(rest)

  let ButtonComponent
  if (variant === 'secondary') {
    ButtonComponent = ButtonSecondary
  } else if (variant === 'inverted') {
    ButtonComponent = ButtonInverted
  } else {
    ButtonComponent = ButtonPrimary
  }
  return <ButtonComponent {...safeRest(restNoDisabled)} className={dangerouslyAddClassName} />
}

Button.propTypes = {
  /**
   * The HTML button type.
   */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /**
   * The style.
   */
  variant: PropTypes.oneOf(['primary', 'secondary', 'inverted']),
  /**
   * The label. It can include the `A11yContent` component or strings.
   */
  children: or([PropTypes.string, componentWithName('A11yContent')]).isRequired,
}
Button.defaultProps = {
  type: 'button',
  variant: 'primary',
}

/** @component */
export default Button
