import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import FlexGrid from '../../../../packages/FlexGrid/FlexGrid'
import Box from '../../../../packages/Box/Box'
import Paragraph from '../../../../packages/Paragraph/Paragraph'
import Strong from '../../../../packages/Strong/Strong'
import Text from '../../../../packages/Text'
import { colorGreyAthens } from '../../../../packages/colours/colours'

const StyledPre = styled.pre({
  overflow: 'auto',
  wordWrap: 'normal',
  margin: 0,
  padding: '.85em 1em',
  marginBottom: '1.275em',
  background: colorGreyAthens,
  fontFamily: 'Consolas,"Liberation Mono",Menlo,Courier,monospace',
})
const StyledCode = styled.code({
  display: 'inline',
  maxWidth: 'initial',
  padding: 0,
  margin: 0,
  overflow: 'initial',
  fontSize: '.85em',
  whiteSpace: 'pre',
  background: '0 0',
})

const Colour = ({ backgroundColor, name, hex, js, usage, notices }) => {
  return (
    <FlexGrid.Col xs={12} sm={6} md={4} lg={3}>
      <Box vertical={3}>
        <span className="docs_color-preview" style={{ backgroundColor }} />
        <Box between={3}>
          <Paragraph>
            <Strong>{name}</Strong>
          </Paragraph>
          <StyledPre>
            <StyledCode>
              Hex: {hex} <br />
              JS: {js}
            </StyledCode>
          </StyledPre>
          <Paragraph>
            <Text bold>Usage:</Text> {usage}
          </Paragraph>
          {notices && (
            <Paragraph>
              <Strong>Notice:</Strong> {notices}
            </Paragraph>
          )}
        </Box>
      </Box>
    </FlexGrid.Col>
  )
}

Colour.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  js: PropTypes.string.isRequired,
  usage: PropTypes.string.isRequired,
  notices: PropTypes.string,
}

Colour.defaultProps = {
  notices: undefined,
}

export default Colour
