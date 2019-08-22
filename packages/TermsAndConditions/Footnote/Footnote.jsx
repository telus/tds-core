import React, { useRef, useEffect, useState, useCallback } from 'react'
import PropTypes from 'prop-types'
import styled, { createGlobalStyle } from 'styled-components'
import { TimelineLite, TweenLite } from 'gsap'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import FlexGrid from '@tds/core-flex-grid'
import HairlineDivider from '@tds/core-hairline-divider'
import { colorAthensGrey } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import { withFocusTrap } from '@tds/shared-hocs'
import { getCopy } from '@tds/util-helpers'

import safeRest from '../../../shared/utils/safeRest'

import StyledClickable from '../StyledClickable'
import List from './FootnoteList'
import CloseIcon from './svg/Close'
import copyDictionary from './footnoteText'
import renderContent from '../renderContent'

const GlobalBodyScrollLock = createGlobalStyle({
  'html, body': media.until('md').css({ overflow: 'hidden' }),
})

const StyledFootnote = styled.div(
  {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    backgroundColor: colorAthensGrey,
    display: 'block',
    boxShadow: '0 0 16px 0 rgba(0, 0, 0, 0.1)',
    transform: 'translateY(100%)',
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
  })
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
    transform: 'translateZ(0)',
    backgroundColor: colorAthensGrey,
  },
  ({ headerHeight }) => ({
    maxHeight: `calc(100vh - ${headerHeight}px)`,
    ...media.from('md').css({
      maxHeight: `calc(50vh - ${headerHeight}px)`,
    }),
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

const FocusTrap = withFocusTrap('div')

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  if (ref.current) {
    return ref.current
  }
  return {}
}

const Footnote = props => {
  const { copy, number, content, onClose, isOpen, ...rest } = props
  const footnoteRef = useRef(null)
  const headerRef = useRef(null)
  const bodyRef = useRef(null)
  const listRef = useRef(null)
  const headingRef = useRef(null)
  const [data, setData] = useState({ content: null, number: null })
  const [headerHeight, setHeaderHeight] = useState('auto')
  const [isVisible, setIsVisible] = useState(false)

  const [oldHeight, setOldHeight] = useState(0)
  const [heightAutoGate, setHeightAutoGate] = useState(false)

  const prevProps = usePrevious(props)

  const closeFootnote = useCallback(
    (e, options) => {
      onClose(e, options)
    },
    [onClose]
  )

  // listen for ESCAPE, close button clicks, and clicks outside of the Footnote. Call onClose.
  const handleClose = useCallback(
    e => {
      if (e.type === 'keydown') {
        const key = e.keyCode || e.key
        if (key === 'Escape' || key === 27) {
          closeFootnote(e, { returnFocus: true })
        }
      } else if (
        e.type === 'click' &&
        (footnoteRef &&
          e.target &&
          !footnoteRef.current.contains(e.target) &&
          e.target.getAttribute('data-tds-id') !== 'footnote-link')
      ) {
        closeFootnote(e, { returnFocus: false })
      } else if (
        e.type === 'touchstart' &&
        (footnoteRef &&
          e.touches[0].target &&
          !footnoteRef.current.contains(e.touches[0].target) &&
          e.touches[0].target.getAttribute('data-tds-id') !== 'footnote-link')
      ) {
        closeFootnote(e, { returnFocus: false })
      }
    },
    [closeFootnote]
  )

  const focusHeading = () => {
    if (content !== null && isVisible && headingRef && headingRef.current !== null) {
      headingRef.current.focus()
    }
  }

  // set height of header on mount
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
        window.removeEventListener('touchstart', handleClose)
        window.removeEventListener('touchmove', preventDefault)
      }
    }
  }, [handleClose, isOpen])

  // focus on the close button on open/content change
  useEffect(focusHeading, [isVisible, content])

  // NEW INITIAL OPEN & CLOSE
  useEffect(() => {
    // set data if opening a new footnote
    if (isOpen && !prevProps.isOpen) {
      setData({ content, number })
      setOldHeight(footnoteRef.current.offsetHeight)
    }

    if (isOpen !== prevProps.isOpen && isOpen) {
      TweenLite.to(footnoteRef.current, 0.3, { y: '0%' })
    } else if (isOpen !== prevProps.isOpen && !isOpen) {
      TweenLite.to(footnoteRef.current, 0.3, { y: '100%' })
    } else if (isOpen && number !== prevProps.number) {
      const footnoteTl = new TimelineLite()

      footnoteTl.to(bodyRef.current, 0.2, {
        autoAlpha: 0,
      })

      footnoteTl.add(() => {
        setData({ content, number })

        if (heightAutoGate) {
          TweenLite.set(footnoteRef.current, {
            height: 'auto',
            onComplete: () => {
              setHeightAutoGate(false)
            },
          })
        }

        TweenLite.from(footnoteRef.current, 0.5, {
          height: oldHeight,
        })
      })

      footnoteTl.to(bodyRef.current, 0.5, { autoAlpha: 1, delay: 0.5 })

      footnoteTl.add(() => {
        setOldHeight(footnoteRef.current.offsetHeight)
        setHeightAutoGate(true)
      })

      footnoteTl.play()
    }
  }, [isOpen, prevProps.isOpen, number, prevProps.number, copy, oldHeight, content, heightAutoGate])

  return (
    <div {...safeRest(rest)}>
      {isOpen && <GlobalBodyScrollLock />}
      <StyledFootnote ref={footnoteRef} isOpen={isOpen} isVisible={isVisible}>
        <FocusTrap autofocus={false}>
          <StyledFootnoteHeader ref={headerRef}>
            <div css={{ display: 'none', ...media.from('md').css({ display: 'block' }) }}>
              <HairlineDivider />
            </div>
            <Box vertical={4}>
              <FlexGrid>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={12}>
                    <StyledHeader between="space-between" inline>
                      <Heading level="h4" tag="h2" tabIndex={-1} ref={headingRef}>
                        {getCopy(copyDictionary, copy).heading}
                      </Heading>
                      <StyledClickable
                        onClick={e => {
                          closeFootnote(e, { returnFocus: true })
                        }}
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
          <StyledFootnoteBody ref={bodyRef} headerHeight={headerHeight}>
            {data.number && data.content && (
              <StyledListContainer ref={listRef}>
                <FlexGrid>
                  <FlexGrid.Row>
                    <FlexGrid.Col xs={12} md={11}>
                      <List start={data.number} type="indexed">
                        <List.Item>
                          <Text>{renderContent(data.content)}</Text>
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
   * @param {Object} options Custom options
   * @param {boolean} options.returnFocus Should the Footnote return focus on close
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
