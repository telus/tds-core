import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import { colorGreyShark, colorWhite } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import Text from '@tds/core-text'

import { borders } from '@tds/shared-styles'

const dimensions = {
  bubbleTriggerSize: '24px',
  bubbleOffset: '7px',
  bubbleTriangleHeight: '10px',
  bubbleTriangleWidth: '7px',
  bubbleTrianglePosition: '12px', // bubbleTriangleWidth + 5
}

const BubbleStyle = styled(({ bubbleDimensions, direction, open, ...rest }) => (
  <Box {...rest} />
)).attrs(({ id }) => ({ 'data-testid': 'bubble', id }))(
  borders.rounded,
  ({ bubbleDimensions, direction, open }) => ({
    ...{ display: open ? undefined : 'none' },
    position: 'absolute',
    bottom: `calc(100% + ${bubbleDimensions.bubbleTriangleHeight})`,
    backgroundColor: colorWhite,
    boxShadow: `0 0 2px 0 ${colorGreyShark}, 0 3px 2px 0 rgba(84, 89, 95, 0.25)`,

    ...{ right: direction === 'left' ? `-${bubbleDimensions.bubbleOffset}` : undefined },

    ...{
      left:
        direction === 'right'
          ? `calc(100% - ${bubbleDimensions.bubbleTriggerSize} - ${bubbleDimensions.bubbleOffset})`
          : undefined,
    },

    '&:before': {
      content: `''`,

      display: 'block',

      position: 'absolute',
      bottom: `-${bubbleDimensions.bubbleTriangleWidth}`,

      borderWidth: bubbleDimensions.bubbleTriangleWidth,
      borderStyle: 'solid',
      borderColor: `transparent ${colorWhite} ${colorWhite} transparent`,

      backgroundColor: colorWhite,
      boxShadow: '2px 2px 3px 0 rgba(42, 42, 44, 0.4)',

      transform: 'rotate(45deg)',
      ...{ right: direction === 'left' ? bubbleDimensions.bubbleTrianglePosition : undefined },
      ...{ left: direction === 'right' ? bubbleDimensions.bubbleTrianglePosition : undefined },
    },

    ...media.until('sm').css({
      maxWidth: '80vw',
    }),

    ...media.from('sm').css({
      maxWidth: '50vw',
    }),

    ...media.from('md').css({
      maxWidth: '25vw',
    }),
  })
)

const InnerBubbleStyle = styled.div(({ bubbleWidth }) => ({
  ...bubbleWidth,
  maxWidth: '100%',
}))

const Bubble = ({ id, direction, open, width, children }) => {
  return (
    <BubbleStyle
      vertical={2}
      horizontal={3}
      bubbleDimensions={dimensions}
      direction={direction}
      open={open}
      role="tooltip"
      aria-live="assertive"
      aria-hidden={open ? 'false' : 'true'}
      id={id}
    >
      <InnerBubbleStyle bubbleWidth={width}>
        <Text size="small">{children}</Text>
      </InnerBubbleStyle>
    </BubbleStyle>
  )
}

Bubble.propTypes = {
  id: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  open: PropTypes.bool.isRequired,
  width: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
}

export default Bubble
