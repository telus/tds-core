import React, { useRef, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import Heading from '@tds/core-heading'
import FlexGrid from '@tds/core-flex-grid'
import StandaloneIcon from '@tds/core-standalone-icon'
import HairlineDivider from '@tds/core-hairline-divider'
import { colorAthensGrey } from '@tds/core-colours'
import { media } from '@tds/core-responsive'
import { withFocusTrap } from '@tds/shared-hocs'
import { getCopy } from '@tds/util-helpers'
import List from './FootnoteList'

import { warn } from '../../../shared/utils/warn'

const copyDictionary = {
  en: {
    heading: 'Terms and conditions',
    close: 'close',
  },
  fr: {
    heading: 'Modalités et conditions',
    close: 'fermer',
  },
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
    transform: 'translateY(100%)',
    transition: 'transform 500ms ease-out',
    overflow: 'hidden',
    zIndex: 99999,
    ...media.from('md').css({
      top: 'auto',
      bottom: 0,
      height: 'auto',
      maxHeight: '50vh',
    }),
  },
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
    position: 'relative',
    maxHeight: 'calc(100vh - 57px)',
    transition: 'height 400ms ease-out, opacity 300ms',
    transform: 'translateZ(0)',
    backgroundColor: colorAthensGrey,
    ...media.from('md').css({
      maxHeight: 'calc(50vh - 57px)',
    }),
  },
  ({ bodyHeight, isTextVisible }) => ({
    height: bodyHeight,
    opacity: isTextVisible ? 1 : 0,
  })
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

const usePrevious = value => {
  const ref = useRef()
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}

const Footnote = props => {
  const { copy, number, content, returnRef, onClose, isOpen } = props
  const closeRef = useRef(null)
  const footnoteRef = useRef(null)
  const headerRef = useRef(null)
  const listRef = useRef(null)
  const [data, setData] = useState({ content: null, number: null })
  const [bodyHeight, setBodyHeight] = useState('auto')
  const [isTextVisible, setIsTextVisible] = useState(true)

  if ((content || number) && returnRef === null) {
    warn('Footnote', 'A returnRef must be provided')
  }

  const prevProps = usePrevious(props)

  const closeFootnote = e => {
    returnRef.current.focus()
    onClose(e)
  }

  // listen for ESCAPE, close button clicks, and clicks outside of the Footnote. Returns focus to returnRef and call onCloseClick
  const handleClose = e => {
    if (e.type === 'keydown') {
      const key = e.keyCode || e.key
      if (key === 'Escape' || key === 27) {
        closeFootnote(e)
      }
    } else if (e.type === 'click' && footnoteRef && !footnoteRef.current.contains(e.target)) {
      closeFootnote(e)
    }
  }

  const changeHeight = () => {
    const oldHeight = listRef.current.offsetHeight
    setBodyHeight(oldHeight)
    setIsTextVisible(false)
  }

  const handleTransitionEnd = async e => {
    e.persist()
    if (e.propertyName === 'opacity' && !isTextVisible) {
      await setData({ content, number })
      const halfPageHeight = window.innerHeight * 0.5 - 57
      const newHeight = listRef.current.offsetHeight
      await setBodyHeight(newHeight > halfPageHeight ? halfPageHeight : newHeight)
    }

    if (e.propertyName === 'height' && !isTextVisible) {
      setIsTextVisible(true)
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
      window.addEventListener('click', handleClose)
      window.addEventListener('keydown', handleClose)
    }
    return () => {
      if (isOpen) {
        window.removeEventListener('click', handleClose)
        window.removeEventListener('keydown', handleClose)
      }
    }
  }, [isOpen])

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
  }, [content, number])

  useEffect(() => {
    if (!isOpen) {
      setBodyHeight('auto')
      setIsTextVisible(true)
    }
  }, [isOpen])

  return (
    <StyledFootnote ref={footnoteRef} isOpen={isOpen} role="alert">
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
                    <StandaloneIcon
                      id="close"
                      symbol="times"
                      variant="secondary"
                      onClick={closeFootnote}
                      a11yText={getCopy(copyDictionary, copy).close}
                      innerRef={closeRef}
                    />
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
          bodyHeight={bodyHeight}
          isTextVisible={isTextVisible}
          onTransitionEnd={handleTransitionEnd}
        >
          {data.number && data.content && (
            <StyledListContainer ref={listRef}>
              <FlexGrid>
                <FlexGrid.Row>
                  <FlexGrid.Col xs={12} md={11}>
                    <List start={data.number}>
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
  )
}

const copyShape = PropTypes.shape({
  heading: PropTypes.string.isRequired,
  close: PropTypes.string.isRequired,
})

Footnote.propTypes = {
  /**
   * A React ref to the `FootnoteLink` **that** initiated the `Footnote`. Focus will be returned to this ref **when the Footnote closes**.
   */
  returnRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  /**
   * Use the `copy` prop to either select provided English or French copy by passing 'en' or 'fr' respectively.
   *
   * To provide your own, pass a JSON object with the keys `heading` and `close`.
   */
  copy: PropTypes.oneOfType([PropTypes.oneOf(['en', 'fr']), copyShape]).isRequired,
  /**
   * The number, must match the number of the `FootnoteLink` that inititated the `Footnote`
   */
  number: PropTypes.number,
  /**
   * The content
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
  returnRef: undefined,
}

export default Footnote
