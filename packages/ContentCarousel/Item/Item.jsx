import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeContext } from 'styled-components'

import { safeRest } from '@tds/util-helpers'
import { componentWithName } from '@tds/util-prop-types'
import Box from '@tds/core-box'
import { media } from '@tds/core-responsive'
import Card from '@tds/core-card'

/**
 * @version ./package.json
 */

const ItemContainer = styled.li(({ pictureSide, theme }) => ({
  width: '100%',
  height: theme.itemContainer && theme.itemContainer.height.mobile,
  minHeight: '340px',
  maxHeight: theme.itemContainer && theme.itemContainer.maxHeight.mobile,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '1rem',
  ...media.from('md').css({
    width: theme.itemContainer && theme.itemContainer.width.desktop,
    height: theme.itemContainer && theme.itemContainer.height.desktop,
    maxHeight: theme.itemContainer && theme.itemContainer.maxHeight.desktop,
    flexDirection: pictureSide === 'left' ? 'row' : 'row-reverse',
    alignItems: 'center',
  }),
}))
const PictureContainer = styled.div(({ theme, pictureSide }) => ({
  display: 'flex',
  justifyContent: 'center',
  maxHeight: '340px',
  overflow: 'hidden',
  width: theme && theme.name === 'card' ? undefined : '100%',
  ...(theme &&
    theme.name === 'card' && {
      margin: '-2rem -1.5rem 1rem -1.5rem',
    }),
  marginBottom: theme.pictureContainer && theme.pictureContainer.marginBottom.mobile,
  '& img': {
    height: theme.pictureContainer && theme.pictureContainer.height.mobile,
    width: theme.pictureContainer && theme.pictureContainer.width.mobile,
    maxWidth: theme.pictureContainer && theme.pictureContainer.maxWidth.mobile,
    maxHeight: theme.pictureContainer && theme.pictureContainer.maxHeight.mobile,
  },
  ...media.from('md').css({
    width: '50%',
    height: '100%',
    maxHeight: '100%',
    ...(theme.pictureContainer &&
      theme.name === 'card' && {
        margin: pictureSide === 'left' ? '-3rem 0 -4.125rem -2rem' : '-3rem -2rem -4.125rem 0',
      }),
    marginBottom: theme.pictureContainer && theme.pictureContainer.marginBottom.desktop,
    '& img': {
      height: theme.pictureContainer && theme.pictureContainer.height.desktop,
      width: theme.pictureContainer && theme.pictureContainer.width.desktop,
      maxWidth: theme.pictureContainer && theme.pictureContainer.maxWidth.desktop,
      maxHeight: theme.pictureContainer && theme.pictureContainer.maxHeight.desktop,
    },
  }),
}))
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

const CardContainer = styled.div({
  marginBottom: '1rem',
  overflow: 'hidden',
})

const ConditionalWrapper = ({ children }) => {
  const themeContext = useContext(ThemeContext)
  return themeContext && themeContext.name === 'card' ? (
    <CardContainer>
      <Card variant="defaultWithBorder">{children}</Card>
    </CardContainer>
  ) : (
    children
  )
}

const Item = ({ picture, pictureSide, children, ...rest }) => {
  return (
    <ConditionalWrapper>
      <ItemContainer
        pictureSide={pictureSide}
        {...safeRest(rest)}
        aria-live="polite"
        data-testid="carouselItem"
      >
        <PictureContainer pictureSide={pictureSide}>{picture}</PictureContainer>
        <ContentContainer pictureSide={pictureSide}>
          <Box between={3}>{children}</Box>
        </ContentContainer>
      </ItemContainer>
    </ConditionalWrapper>
  )
}

ConditionalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
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
