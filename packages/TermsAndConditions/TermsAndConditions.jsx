import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HairlineDivider from '@tds/core-hairline-divider'
import DimpleDivider from '@tds/core-dimple-divider'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { colorWhite, colorTelusPurple } from '@tds/core-colours'
import { FadeAndReveal, Translate } from '@tds/shared-animation'

import safeRest from '../../shared/utils/safeRest'
import Clickable from '../../shared/components/Clickable/Clickable'

import List from './List/List'

const defaultCopy = {
  en: {
    headingClosed: 'View terms and conditions',
    headingOpened: 'Hide terms and conditions',
  },
  fr: {
    headingClosed: 'View terms and conditionsFR',
    headingOpened: 'Hide terms and conditionsFR',
  },
}

const getCopy = copy => (typeof copy === 'string' ? defaultCopy[copy] : copy)

const StyledClickable = styled(Clickable)({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: colorWhite,
})

const StyledExpandCollapseHeading = styled(Box)({
  alignItems: 'center',
})

const StyledChevron = styled.g({
  transition: 'transform 300ms',
  transform: 'translate(6px, 9px)',
  [`${StyledClickable}:hover &`]: {
    transform: 'translate(6px, 11px)',
  },
})

const Chevron = ({ isOpen }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <path
        d="M11.7940812,0.183230226 C11.4424627,-0.117489399 11.0896181,0.0450442657 10.8868854,0.245275736 L5.99681615,4.74055299 L1.11722187,0.245275732 C0.93839231,0.0814520871 0.490533284,-0.180032793 0.165240429,0.183230232 C-0.160052425,0.546493257 0.0652096387,0.91610528 0.243271687,1.07992892 L5.6348225,6.87660266 C5.81365205,7.04113245 6.10607292,7.04113245 6.28490248,6.87660266 C6.28490248,6.87589653 11.7940809,1.07992896 11.7940809,1.07992896 C11.9792355,0.935042671 12.1456996,0.483949851 11.7940812,0.183230226 Z"
        id="path-1"
      />
    </defs>
    <g
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
      transform={isOpen ? 'rotate(180, 12, 12)' : undefined}
    >
      <g>
        <path
          d="M12,0 C5.373,0 0,5.373 0,12 C0,18.627 5.373,24 12,24 C18.627,24 24,18.627 24,12 C24,5.373 18.627,0 12,0 M12,1 C18.065,1 23,5.935 23,12 C23,18.065 18.065,23 12,23 C5.935,23 1,18.065 1,12 C1,5.935 5.935,1 12,1"
          fill={colorTelusPurple}
        />
        <StyledChevron>
          <mask id="mask-2" fill="white">
            <use xlinkHref="#path-1" />
          </mask>
          <g mask="url(#mask-2)" fill={colorTelusPurple} fillRule="evenodd">
            <rect x="0" y="0" width="12" height="8" />
          </g>
        </StyledChevron>
      </g>
    </g>
  </svg>
)

Chevron.propTypes = {
  isOpen: PropTypes.bool,
}

Chevron.defaultProps = {
  isOpen: false,
}

const UPPER_SPEED_LIMIT = 150
const LOWER_SPEED_LIMIT = 600

const calculateSpeed = height => {
  const h = height * 0.5
  if (h < UPPER_SPEED_LIMIT) {
    return UPPER_SPEED_LIMIT
  }
  if (h > LOWER_SPEED_LIMIT) {
    return LOWER_SPEED_LIMIT
  }
  return h
}
/**
 * @version ./package.json
 */
const TermsAndConditions = ({ copy, content, ...rest }) => {
  const contentWrapper = useRef(null)
  const [isOpen, setOpen] = useState(false)
  const [contentWrapperHeight, setContentWrapperHeight] = useState(0)
  const speed = calculateSpeed(contentWrapperHeight)

  useEffect(() => {
    if (contentWrapper.current.offsetHeight !== contentWrapperHeight) {
      setContentWrapperHeight(() => {
        return contentWrapper.current.offsetHeight
      })
    }
  })

  return (
    <div {...safeRest(rest)}>
      <HairlineDivider />
      <FlexGrid gutter={false} limitWidth={false}>
        <FlexGrid.Row>
          <FlexGrid.Col>
            <StyledClickable onClick={() => setOpen(!isOpen)}>
              <StyledExpandCollapseHeading inline vertical={3} between={3}>
                <Chevron isOpen={isOpen} />
                <Heading level="h4" tag="span">
                  {!isOpen ? getCopy(copy).headingClosed : getCopy(copy).headingOpened}
                </Heading>
              </StyledExpandCollapseHeading>
            </StyledClickable>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
      <FadeAndReveal
        timeout={isOpen ? speed : 0}
        duration={speed}
        in={isOpen}
        height={contentWrapperHeight}
      >
        {() => (
          <div ref={contentWrapper}>
            <FlexGrid gutter={false} limitWidth={false}>
              <FlexGrid.Row>
                <FlexGrid.Col>
                  <DimpleDivider />
                </FlexGrid.Col>
              </FlexGrid.Row>
            </FlexGrid>
            <Translate
              timeout={speed}
              in={isOpen}
              direction="y"
              distance={isOpen ? '0rem' : '1rem'}
              style={{ transform: 'translateY(1rem)' }}
            >
              {() => (
                <FlexGrid>
                  <FlexGrid.Row>
                    <FlexGrid.Col xs={12} mdOffset={1} md={10}>
                      <List size="small" below={4}>
                        {content.map(c => (
                          <List.Item key={c}>{c}</List.Item>
                        ))}
                      </List>
                    </FlexGrid.Col>
                  </FlexGrid.Row>
                </FlexGrid>
              )}
            </Translate>
          </div>
        )}
      </FadeAndReveal>
      <HairlineDivider />
    </div>
  )
}

TermsAndConditions.propTypes = {
  /**
   * The copy
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      headingClosed: PropTypes.string,
      headingOpened: PropTypes.string,
    }),
  ]).isRequired,
  /**
   * An array of nodes to be displayed in a list of TermsAndConditions
   */
  content: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default TermsAndConditions
