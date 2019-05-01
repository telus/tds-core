import React, { useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import FlexGrid from '@tds/core-flex-grid'
import StandaloneIcon from '@tds/core-standalone-icon'
import HairlineDivider from '@tds/core-hairline-divider'
import { colorAthensGrey } from '@tds/core-colours'
import Responsive, { media } from '@tds/core-responsive'
import withFocusTrap from '@tds/shared-with-focus-trap'
import { Transition } from 'react-transition-group'
import List from './StickyList'

const copyShape = PropTypes.shape({
  heading: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
})

const copyDict = {
  en: {
    heading: 'Terms and conditions',
    close: 'close',
  },
  fr: {
    heading: 'Terms and conditionsFR',
    close: 'closeFR',
  },
}

const getCopy = copy => {
  if (typeof copy === 'string') {
    return copyDict[copy]
  }
  return copy
}

const StyledSticky = styled.div(
  {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: colorAthensGrey,
    display: 'inline-block',
    boxShadow: '0 0 16px 0 rgba(213, 213, 213, 0.5)',
    transition: 'transform 500ms',
    transform: 'translateY(100%)',
    zIndex: 1000,
    ...media.from('md').css({
      position: 'fixed',
      top: 'auto',
      bottom: 0,
      left: 0,
      overflow: 'hidden',
      height: 'auto',
      maxHeight: '50vh',
    }),
  },
  ({ state }) => {
    if (state === 'entering' || state === 'entered') {
      return {
        transform: 'translateY(0)',
      }
    }
    return {}
  }
)

const StyledStickyHeader = styled.div({
  position: 'relative',
  width: '100%',
  ...media.from('md').css({
    position: 'relative',
  }),
})

const StyledStickyBody = styled.div({
  overflow: 'auto',
  // marginTop: '57px',
  position: 'relative',
  maxHeight: 'calc(100vh - 57px)',
  backgroundColor: colorAthensGrey,
  ...media.from('md').css({
    maxHeight: 'calc(50vh - 57px)',
    height: 'auto',
  }),
})

const FocusTrap = withFocusTrap('div')

const Sticky = ({ copy, number, content, returnRef, onClose, isOpen }) => {
  const closeRef = useRef(null)
  const stickyRef = useRef(null)

  const closeSticky = () => {
    returnRef.current.focus()
    onClose()
  }
  // listen for ESCAPE, close button clicks, and clicks outside of the Sticky. Returns focus to returnRef and call onCloseClick
  const handleClose = e => {
    if (e.type === 'keydown') {
      const key = e.key || e.keyCode
      if (key === 'Escape' || key === 27) {
        closeSticky()
      }
    } else if (e.type === 'click') {
      closeSticky()
    } else if (e.type === 'mousedown' && stickyRef && !stickyRef.current.contains(e.target)) {
      e.preventDefault() // TODO: not sure if this is needed.
      e.stopPropagation()
      closeSticky()
    }
  }

  // focus the close button on mount
  useEffect(() => {
    if (isOpen && closeRef && closeRef.current !== null) {
      closeRef.current.focus()
    }
  }, [isOpen])

  // add listeners for mouse clicks outside of Sticky and for ESCAPE key presses
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('mousedown', handleClose)
      window.addEventListener('keydown', handleClose)
    }
    return () => {
      if (isOpen) {
        window.removeEventListener('mousedown', handleClose)
        window.removeEventListener('keydown', handleClose)
      }
    }
  }, [isOpen])

  return (
    <Transition in={isOpen}>
      {state => (
        <StyledSticky ref={stickyRef} state={state}>
          <FocusTrap>
            <StyledStickyHeader>
              <Responsive minWidth="md" render={() => <HairlineDivider />} />
              <Box vertical={3}>
                <FlexGrid>
                  <FlexGrid.Row>
                    <FlexGrid.Col xs={12}>
                      <Box between="space-between" inline>
                        <Text bold>{getCopy(copy).heading}</Text>
                        <StandaloneIcon
                          id="close"
                          symbol="times"
                          variant="secondary"
                          onClick={handleClose}
                          a11yText={getCopy(copy).close}
                          innerRef={closeRef}
                        />
                      </Box>
                    </FlexGrid.Col>
                  </FlexGrid.Row>
                </FlexGrid>
              </Box>
              <HairlineDivider />
            </StyledStickyHeader>
            <StyledStickyBody>
              <Box vertical={3}>
                <FlexGrid>
                  <FlexGrid.Row>
                    <FlexGrid.Col xs={12} md={11}>
                      <List start={number}>
                        <List.Item>
                          <Text>{content}</Text>
                        </List.Item>
                      </List>
                    </FlexGrid.Col>
                  </FlexGrid.Row>
                </FlexGrid>
              </Box>
            </StyledStickyBody>
          </FocusTrap>
        </StyledSticky>
      )}
    </Transition>
  )
}

Sticky.propTypes = {
  returnRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  copy: PropTypes.oneOfType([PropTypes.oneOf(['en', 'fr']), copyShape]),
  number: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
}

Sticky.defaultProps = {
  copy: 'en',
  isOpen: false,
}

export default Sticky
