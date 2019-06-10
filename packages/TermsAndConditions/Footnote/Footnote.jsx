import React, { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import FlexGrid from '@tds/core-flex-grid'
import HairlineDivider from '@tds/core-hairline-divider'
import { colorAthensGrey } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import { withFocusTrap } from '@tds/shared-hocs'
import { getCopy } from '@tds/util-helpers'

import Clickable from '../../../shared/components/Clickable/Clickable'
import safeRest from '../../../shared/utils/safeRest'
import List from './FootnoteList'
import CloseIcon from './svg/Close'
import copyDictionary from './footnoteText'

const GlobalBodyScrollLock = createGlobalStyle({
  'html, body': media.until('md').css({ overflow: 'hidden' }),
})

const StyledFootnote = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    backgroundColor: colorAthensGrey,
    display: 'block',
    boxShadow: '0 0 16px 0 rgba(213, 213, 213, 0.5)',
    transform: 'translateY(100%)',
    transition: 'transform 500ms ease-out',
    zIndex: 99999,
    ...media.from('md').css({
      top: 'auto',
      bottom: 0,
      height: 'auto',
      maxHeight: '50vh',
    }),
  },
  ({ isVisible }) => ({
    visibility: isVisible ? 'visible' : 'hidden',
  }),
  ({ isOpen }) => {
    if (isOpen) {
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

const StyledHeader = styled(Box)({
  alignItems: 'center',
})

const StyledFootnoteBody = styled.div(
  {
    overflow: 'auto',
    '-webkit-overflow-scrolling': 'touch',
    transition: 'height 400ms ease-out, opacity 300ms',
    transform: 'translateZ(0)',
    backgroundColor: colorAthensGrey,
  },
  ({ headerHeight }) => ({
    maxHeight: `calc(100vh - ${headerHeight}px)`,
    ...media.from('md').css({
      maxHeight: `calc(50vh - ${headerHeight}px)`,
    }),
  }),
  ({ bodyHeight, isTextVisible }) => ({
    height: bodyHeight,
    opacity: isTextVisible ? 1 : 0,
  })
)

const StyledListContainer = styled.div({
  paddingTop: '1.5rem',
  paddingBottom: '2rem',
  ...media.from('md').css({
    paddingTop: '0rem',
    paddingBottom: '3rem',
  }),
})

const StyledClickable = styled(Clickable)({
  display: 'flex',
  justifyContent: 'center',
})

const FocusTrap = withFocusTrap('div')

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const Footnote = props => {
  const { copy, number, content, onClose, isOpen, ...rest } = props
  const closeRef = useRef(null)
  const footnoteRef = useRef(null)
  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  const listRef = useRef(null)
  const [data, setData] = useState({ content: null, number: null })
  const [headerHeight, setHeaderHeight] = useState('auto')
  const [bodyHeight, setBodyHeight] = useState('auto')
  const [isVisible, setIsVisible] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(true)

  const prevProps = usePrevious(props)

  const closeFootnote = useCallback(
    e => {
      onClose(e)
    },
    [onClose]
  )

  // listen for ESCAPE, close button clicks, and clicks outside of the Footnote. Call onClose.
  const handleClose = useCallback(
    e => {
      if (e.type === 'keydown') {
        const key = e.keyCode || e.key
        if (key === 'Escape' || key === 27) {
          closeFootnote(e)
        }
      } else if (
        e.type === 'click' &&
        (footnoteRef &&
          e.target &&
          !footnoteRef.current.contains(e.target) &&
          e.target.getAttribute('data-tds-id') !== 'footnote-link')
      ) {
        closeFootnote(e)
      } else if (
        e.type === 'touchstart' &&
        (footnoteRef &&
          e.touches[0].target &&
          !footnoteRef.current.contains(e.touches[0].target) &&
          e.touches[0].target.getAttribute('data-tds-id') !== 'footnote-link')
      ) {
        closeFootnote(e)
      }
    },
    [closeFootnote]
  )

  const changeHeight = () => {
    const oldHeight = listRef.current.offsetHeight
    setBodyHeight(oldHeight)
    setIsTextVisible(false)
  }

  const handleStyledFootnoteTransitionEnd = async e => {
    if (e.propertyName === 'transform' && !isOpen) {
      setIsVisible(false)
    }
  }

  const handleTransitionEnd = async e => {
    e.persist()
    if (e.propertyName === 'opacity' && !isTextVisible) {
      await setData({ content, number })
      const halfPageHeight = window.innerHeight * 0.5 - headerHeight
      const newHeight = listRef.current.offsetHeight
      await setBodyHeight(newHeight > halfPageHeight ? halfPageHeight : newHeight)
    }

    if (e.propertyName === 'height' && !isTextVisible) {
      setIsTextVisible(true)
    }
  }

  useEffect(() => {
    setHeaderHeight(headerRef.current.offsetHeight)
  }, [])

  const preventDefault = e => {
    if (!bodyRef.current.contains(e.touches[0].target)) {
      e.preventDefault()
    }
  }

  // add listeners for mouse clicks outside of Footnote and for ESCAPE key presses
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      window.addEventListener('click', handleClose)
      window.addEventListener('keydown', handleClose)
      window.addEventListener('touchstart', handleClose)
      window.addEventListener('touchmove', preventDefault, { passive: false })
    }
    return () => {
      if (isOpen) {
        window.removeEventListener('click', handleClose)
        window.removeEventListener('keydown', handleClose)
        window.addEventListener('touchstart', handleClose)
        window.removeEventListener('touchmove', preventDefault)
      }
    }
  }, [handleClose, isOpen])

  useEffect(() => {
    if (
      prevProps &&
      (number !== prevProps.number || content !== prevProps.content) &&
      isOpen === prevProps.isOpen
    ) {
      if (!isTextVisible) {
        setIsTextVisible(true)
        setData({ content, number })
      }
      changeHeight()
    } else {
      setData({ content, number })
    }
  }, [content, isOpen, isTextVisible, number, prevProps])

  useEffect(() => {
    if (!isOpen) {
      setBodyHeight('auto')
      setIsTextVisible(true)
    }
  }, [isOpen])

  // focus on the close button on open/content change
  useEffect(() => {
    if (content !== null && isVisible && closeRef && closeRef.current !== null) {
      closeRef.current.focus()
    }
  }, [isVisible, content])

  return (
    <div {...safeRest(rest)}>
      {isOpen && <GlobalBodyScrollLock />}
      <StyledFootnote
        ref={footnoteRef}
        isOpen={isOpen}
        isVisible={isVisible}
        role="dialog"
        aria-modal="true"
        onTransitionEnd={handleStyledFootnoteTransitionEnd}
      >
        <FocusTrap>
          <StyledFootnoteHeader ref={headerRef}>
            <div css={{ display: 'none', ...media.from('md').css({ display: 'block' }) }}>
              <HairlineDivider />
            </div>
            <Box vertical={4}>
              <FlexGrid>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={12}>
                    <StyledHeader between="space-between" inline>
                      <Heading level="h4" tag="h2">
                        {getCopy(copyDictionary, copy).heading}
                      </Heading>
                      <StyledClickable
                        innerRef={closeRef}
                        onClick={closeFootnote}
                        aria-label={getCopy(copyDictionary, copy).close}
                      >
                        <CloseIcon />
                      </StyledClickable>
                    </StyledHeader>
                  </FlexGrid.Col>
                </FlexGrid.Row>
              </FlexGrid>
            </Box>
            <div css={{ display: 'none', ...media.until('md').css({ display: 'block' }) }}>
              <HairlineDivider />
            </div>
          </StyledFootnoteHeader>
          <StyledFootnoteBody
            ref={bodyRef}
            bodyHeight={bodyHeight}
            headerHeight={headerHeight}
            isTextVisible={isTextVisible}
            onTransitionEnd={handleTransitionEnd}
          >
            {data.number && data.content && (
              <StyledListContainer ref={listRef}>
                <FlexGrid>
                  <FlexGrid.Row>
                    <FlexGrid.Col xs={12} md={11}>
                      <List start={data.number} type="indexed">
                        <List.Item>
                          <Text>{data.content}</Text>
                        </List.Item>
                      </List>
                    </FlexGrid.Col>
                  </FlexGrid.Row>
                </FlexGrid>
              </StyledListContainer>
            )}
          </StyledFootnoteBody>
        </FocusTrap>
      </StyledFootnote>
    </div>
  )
}

const copyShape = PropTypes.shape({
  heading: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
})

Footnote.propTypes = {
  /**
   * Use the `copy` prop to either select provided English or French copy by passing 'en' or 'fr' respectively.
   *
   * To provide your own, pass a JSON object with the keys `heading` and `close`.
   */
  copy: PropTypes.oneOfType([PropTypes.oneOf(['en', 'fr']), copyShape]).isRequired,
  /**
   * The number, must match the number of the `FootnoteLink` that initiated the `Footnote`.
   */
  number: PropTypes.number,
  /**
   * The content.
   */
  content: PropTypes.string,
  /**
   * A callback function to handle the closing of the footnote.
   *
   * @param {SyntheticEvent} event The React `SyntheticEvent`
   */
  onClose: PropTypes.func.isRequired,
  /**
   * A boolean flag used hide or show the `Footnote`. Set to `true` to open the `Footnote`.
   */
  isOpen: PropTypes.bool,
}

Footnote.defaultProps = {
  isOpen: false,
  number: undefined,
  content: undefined,
}

export default Footnote
