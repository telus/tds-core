import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '@tds/util-helpers'

/**
 * @version ./package.json
 */
const $COMPONENT$ = ({ ...rest }) => <div {...safeRest(rest)} />

$COMPONENT$.propTypes = {}

$COMPONENT$.defaultProps = {}

export default $COMPONENT$
