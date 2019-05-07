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
import List from './FootnoteList'

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

const StyledFootnote = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: colorAthensGrey,
    display: 'inline-block',
    boxShadow: '0 0 16px 0 rgba(213, 213, 213, 0.5)',
    transition: 'transform 500ms',
    transform: 'translateY(100%)',
    overflow: 'hidden',
    zIndex: 1000,
    ...media.from('md').css({
      top: 'auto',
      bottom: 0,
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

const StyledFootnoteHeader = styled.div({
  position: 'relative',
  width: '100%',
})

const StyledFootnoteBody = styled.div(
  {
    overflow: 'auto',
    position: 'relative',
    maxHeight: 'calc(100vh - 57px)',
    backgroundColor: colorAthensGrey,
    ...media.from('md').css({
      maxHeight: 'calc(50vh - 57px)',
    }),
  },
  ({ isContentChanging, bodyHeight, contentChangeSpeed }) => {
    const heightSpeed = contentChangeSpeed
    // fade in slower than fade out
    // const opacitySpeed = isContentChanging ? contentChangeSpeed / 3 : contentChangeSpeed / 2
    // const opacityDelay = contentChangeSpeed / 2
    // const transformSpeed = contentChangeSpeed / 2
    // const transformDelay = 0 // contentChangeSpeed / 4

    const transitions = [
      `height ${heightSpeed}ms ease-in`,
      // `opacity ${opacitySpeed}ms ease ${opacityDelay}ms`,
      // !isContentChanging && `transform ${transformSpeed}ms ease-in ${transformDelay}ms`,
    ]

    return {
      transition: transitions.join(', '),
      height: bodyHeight,
      opacity: isContentChanging ? 0 : 1,
      // transform: isContentChanging ? 'translateY(30px)' : 'translateY(0)',
    }
  }
)

const StyledListContainer = styled.div({
  paddingTop: '1.5rem',
  paddingBottom: '3rem',
  ...media.from('md').css({
    paddingTop: '0rem',
    paddingBottom: '3rem',
  }),
})

const FocusTrap = withFocusTrap('div')

const Footnote = props => {
  const { copy, number, content, returnRef, onClose, isOpen } = props
  const closeRef = useRef(null)
  const footnoteRef = useRef(null)
  const headerRef = useRef(null)
  const listRef = useRef(null)

  const closeFootnote = e => {
    returnRef.current.focus()
    onClose(e)
  }

  // listen for ESCAPE, close button clicks, and clicks outside of the Footnote. Returns focus to returnRef and call onCloseClick
  const handleClose = e => {
    if (e.type === 'keydown') {
      const key = e.key || e.keyCode
      if (key === 'Escape' || key === 27) {
        closeFootnote(e)
      }
    } else if (e.type === 'click') {
      closeFootnote(e)
    } else if (e.type === 'mousedown' && footnoteRef && !footnoteRef.current.contains(e.target)) {
      closeFootnote(e)
    }
  }
  // focus the close button on mount
  useEffect(() => {
    if (isOpen && closeRef && closeRef.current !== null) {
      closeRef.current.focus()
    }
  }, [isOpen])

  // add listeners for mouse clicks outside of Footnote and for ESCAPE key presses
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
    <Transition in={isOpen} timeout={500}>
      {state => (
        <StyledFootnote ref={footnoteRef} state={state}>
          <FocusTrap>
            <StyledFootnoteHeader ref={headerRef}>
              <Responsive minWidth="md" render={() => <HairlineDivider />} />
              <Box vertical={4}>
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
              <Responsive maxWidth="md" render={() => <HairlineDivider />} />
            </StyledFootnoteHeader>
            <StyledFootnoteBody>
              <StyledListContainer ref={listRef}>
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
              </StyledListContainer>
            </StyledFootnoteBody>
          </FocusTrap>
        </StyledFootnote>
      )}
    </Transition>
  )
}

Footnote.propTypes = {
  /**
   * A react ref to the FootnoteLink that triggered the Footnote
   */
  returnRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]).isRequired,
  /**
   * The copy
   */
  copy: PropTypes.oneOfType([PropTypes.oneOf(['en', 'fr']), copyShape]).isRequired,
  /**
   * The number
   */
  number: PropTypes.number.isRequired,
  /**
   * The content
   */
  content: PropTypes.string.isRequired,
  /**
   * A callback function to handle the closing of the footnote.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onClose: PropTypes.func.isRequired,
  /**
   * A boolean flag used to hide/show the Footnote
   */
  isOpen: PropTypes.bool,
}

Footnote.defaultProps = {
  isOpen: false,
}

export default Footnote
