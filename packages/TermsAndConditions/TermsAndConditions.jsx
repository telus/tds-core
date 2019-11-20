import React, { useState, useEffect, useRef, forwardRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import HairlineDivider from '@tds/core-hairline-divider'
import DimpleDivider from '@tds/core-dimple-divider'
import FlexGrid from '@tds/core-flex-grid'
import Heading from '@tds/core-heading'
import Box from '@tds/core-box'
import { FadeAndReveal, Translate } from '@tds/shared-animation'
import { getCopy, safeRest } from '@tds/util-helpers'
import { colorWhite } from '@tds/core-colours'

import StyledClickable from './StyledClickable'
import Chevron from './svg/Chevron'
import Circle from './svg/Circle'

import List from './List/List'

import copyDictionary from './termsAndConditionsText'
import renderContent from './renderContent'

const StyledClickableHeading = styled(StyledClickable)({
  width: '100%',
  justifyContent: 'center',
  backgroundColor: colorWhite,
})

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

const calculateSpeed = (height, isExpanding) => {
  const h = height * 0.5
  if (h < UPPER_SPEED_LIMIT) {
    return UPPER_SPEED_LIMIT
  }
  if (h > LOWER_SPEED_LIMIT) {
    return LOWER_SPEED_LIMIT
  }
  return isExpanding ? h + h * 0.2 : h
}
/**
 * @version ./package.json
 */
const TermsAndConditions = forwardRef(
  ({ copy, indexedContent, nonIndexedContent, ...rest }, ref) => {
    const contentWrapper = useRef(null)
    const [isOpen, setOpen] = useState(false)
    const [contentWrapperHeight, setContentWrapperHeight] = useState(0)
    const speed = calculateSpeed(contentWrapperHeight, isOpen)

    const hasIndexedContent = indexedContent.length > 0
    const hasNonIndexedContent = nonIndexedContent.length > 0

    useEffect(() => {
      if (contentWrapper.current.offsetHeight !== contentWrapperHeight) {
        setContentWrapperHeight(() => {
          return contentWrapper.current.offsetHeight
        })
      }
    }, [contentWrapperHeight])

    return (
      <div {...safeRest(rest)}>
        <HairlineDivider />
        <FlexGrid gutter={false} limitWidth={false}>
          <FlexGrid.Row>
            <FlexGrid.Col>
              <StyledClickableHeading
                aria-expanded={isOpen}
                ref={ref}
                onClick={() => setOpen(!isOpen)}
              >
                <StyledExpandCollapseHeading inline vertical={3} between={3}>
                  <StyledChevronContainer>
                    <Circle />
                    <Chevron isOpen={isOpen} />
                  </StyledChevronContainer>
                  <Heading level="h4" tag="h2">
                    {!isOpen
                      ? getCopy(copyDictionary, copy).headingView
                      : getCopy(copyDictionary, copy).headingHide}
                  </Heading>
                </StyledExpandCollapseHeading>
              </StyledClickableHeading>
            </FlexGrid.Col>
          </FlexGrid.Row>
        </FlexGrid>
        <FadeAndReveal timeout={speed} in={isOpen} height={contentWrapperHeight}>
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
                initialStyle={{ transform: 'translateY(1rem)' }}
              >
                {() => (
                  <>
                    {hasIndexedContent > 0 && (
                      <FlexGrid>
                        <FlexGrid.Row>
                          <FlexGrid.Col xs={12} mdOffset={1} md={10}>
                            <List size="small" below={4} type="indexed">
                              {indexedContent.map(c => (
                                <List.Item key={c}>{renderContent(c)}</List.Item>
                              ))}
                            </List>
                          </FlexGrid.Col>
                        </FlexGrid.Row>
                      </FlexGrid>
                    )}
                    {hasNonIndexedContent && (
                      <FlexGrid>
                        <FlexGrid.Row>
                          <FlexGrid.Col xs={12} mdOffset={1} md={10}>
                            <Box between={3}>
                              {hasIndexedContent && (
                                <div css={{ paddingLeft: '2rem' }}>
                                  <Heading level="h4" tag="span">
                                    {getCopy(copyDictionary, copy).nonIndexedTitle}
                                  </Heading>
                                </div>
                              )}
                              <List size="small" below={4} type="nonIndexed">
                                {nonIndexedContent.map(c => (
                                  <List.Item key={c}>{renderContent(c)}</List.Item>
                                ))}
                              </List>
                            </Box>
                          </FlexGrid.Col>
                        </FlexGrid.Row>
                      </FlexGrid>
                    )}
                  </>
                )}
              </Translate>
            </div>
          )}
        </FadeAndReveal>
        <HairlineDivider />
      </div>
    )
  }
)

// StyledClickableHeading.displayName = 'StyledClickableHeading'

TermsAndConditions.displayName = 'TermsAndConditions'

TermsAndConditions.propTypes = {
  /**
   * Use the `copy` prop to either select provided English or French copy by passing 'en' or 'fr' respectively.
   *
   * To provide your own, pass a JSON object with the keys `headingView`, `headingHide`, and `nonIndexedTitle`.
   */
  copy: PropTypes.oneOfType([
    PropTypes.oneOf(['en', 'fr']),
    PropTypes.shape({
      headingView: PropTypes.string,
      headingHide: PropTypes.string,
      nonIndexedTitle: PropTypes.string,
    }),
  ]).isRequired,
  /**
   * An array of nodes, strings, or a combination to be displayed in an ordered list.
   *
   * Each item in the array must have a corresponding superscript in the page.
   */
  indexedContent: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])),
  /**
   * An array of nodes, strings, or a combination to be displayed in an unordered list.
   *
   * nonIndexedContent do not have a corresponding superscript and instead apply to the page as a whole.
   */
  nonIndexedContent: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.node, PropTypes.string])),
}

TermsAndConditions.defaultProps = {
  indexedContent: [],
  nonIndexedContent: [],
}

export default TermsAndConditions
