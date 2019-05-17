import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HairlineDivider from '@tds/core-hairline-divider'
import DimpleDivider from '@tds/core-dimple-divider'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { FadeAndReveal, Translate } from '@tds/shared-animation'

import safeRest from '../../shared/utils/safeRest'

import StyledClickable from './StyledClickable'
import Chevron from './svg/Chevron'
import Circle from './svg/Circle'

import List from './List/List'

const defaultCopy = {
  en: {
    headingClosed: 'View terms and conditions',
    headingOpened: 'Hide terms and conditions',
  },
  fr: {
    headingClosed: 'Voir les modalités et conditions',
    headingOpened: 'Masquer les modalités et conditions',
  },
}

const getCopy = copy => (typeof copy === 'string' ? defaultCopy[copy] : copy)

const StyledExpandCollapseHeading = styled(Box)({
  alignItems: 'center',
})

const StyledChevronContainer = styled.span({
  position: 'relative',
  width: '24px',
  height: '24px',
})

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
                <StyledChevronContainer>
                  <Circle />
                  <Chevron isOpen={isOpen} />
                </StyledChevronContainer>
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
                <FlexGrid gutter={false} limitWidth={false}>
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
   * Use the `copy` prop to either select provided English or French copy by passing 'en' or 'fr' respectively, or provide your own as a JSON object with the keys `headingClosed` and `headingOpened`.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      headingClosed: PropTypes.string,
      headingOpened: PropTypes.string,
    }),
  ]).isRequired,
  /**
   * An array of nodes, strings, or a combination to be displayed in an ordered list
   */
  content: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])).isRequired,
}

export default TermsAndConditions
