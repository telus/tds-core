import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { safeRest } from '@tds/util-helpers'
import { componentWithName } from '@tds/util-prop-types'
import { media } from '@tds/core-responsive'

/**
 * @version ./package.json
 */

const ItemContainer = styled.li(({ pictureSide }) => ({
  width: '100%',
  minHeight: '340px',
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
  ...media
    .from('md')
    .css({ flexDirection: pictureSide === 'left' ? 'row' : 'row-reverse', alignItems: 'center' }),
}))
const PictureContainer = styled.div({
  display: 'flex',
  justifyContent: 'center',
  maxHeight: '340px',
  width: '100%',
  marginBottom: '1.5rem',
  ...media.from('md').css({
    width: '50%',
    height: '100%',
    maxHeight: '100%',
    marginBottom: 0,
  }),
})
const ContentContainer = styled.div(({ pictureSide }) => ({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  ...media.from('md').css({
    width: '50%',
    ...(pictureSide === 'left' && { paddingLeft: '3.125rem' }),
    ...(pictureSide === 'right' && { paddingRight: '3.125rem' }),
  }),
}))
const Item = ({ picture, pictureSide, children, ...rest }) => {
  return (
    <ItemContainer
      pictureSide={pictureSide}
      {...safeRest(rest)}
      aria-live="polite"
      data-testid="carouselItem"
    >
      <PictureContainer>{picture}</PictureContainer>
      <ContentContainer pictureSide={pictureSide}>{children}</ContentContainer>
    </ItemContainer>
  )
}

Item.propTypes = {
  picture: componentWithName('Image').isRequired,
  pictureSide: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.node.isRequired,
}

Item.defaultProps = {
  pictureSide: 'left',
}

export default Item
