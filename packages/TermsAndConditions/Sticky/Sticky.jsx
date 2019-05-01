import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Box from '@tds/core-box'
import Text from '@tds/core-text'
import FlexGrid from '@tds/core-flex-grid'
import StandaloneIcon from '@tds/core-standalone-icon'
import { colorAthensGrey } from '@tds/core-colours'
import { helveticaNeueRoman55, helveticaNeueLight45, sizeMedium } from '@tds/shared-typography'

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

const StyledSticky = styled(Box)({
  backgroundColor: colorAthensGrey,
})

const StyledList = styled.ol({
  listStyle: 'decimal',
  paddingLeft: '1rem',
})

const StyledListItem = styled.li({
  paddingLeft: '2rem',
  ...sizeMedium,
  ...helveticaNeueRoman55,
  [`& span`]: {
    ...helveticaNeueLight45,
  },
})

const Sticky = ({ number, content, copy, onCloseClick }) => {
  // useEffect(() => {
  //   document.getElementById('close').focus()
  // })

  return (
    <StyledSticky vertical={4} horizontal={5} between={4}>
      <Box between="space-between" inline>
        <Text bold>{getCopy(copy).heading}</Text>
        <StandaloneIcon
          id="close"
          symbol="times"
          variant="secondary"
          onClick={onCloseClick}
          a11yText={getCopy(copy).close}
        />
      </Box>
      <FlexGrid limitWidth gutter={false}>
        <FlexGrid.Row>
          <FlexGrid.Col xs={12} md={11}>
            <StyledList start={number}>
              <StyledListItem>
                <Text>{content}</Text>
              </StyledListItem>
            </StyledList>
          </FlexGrid.Col>
        </FlexGrid.Row>
      </FlexGrid>
    </StyledSticky>
  )
}

Sticky.propTypes = {
  copy: PropTypes.oneOfType([PropTypes.oneOf(['en', 'fr']), copyShape]),
  number: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  onCloseClick: PropTypes.func.isRequired,
}

Sticky.defaultProps = {
  copy: 'en',
}

export default Sticky
