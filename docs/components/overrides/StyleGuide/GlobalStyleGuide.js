import { createGlobalStyle } from 'styled-components'
import { colorSecondary, colorGreyShark, colorPanache, colorGreyAthens } from '../../../../packages/colours/colours';
import heroBackground from '../../../images/hero-background.jpg'

import { StyledRow } from '../../../../packages/FlexGrid/Row/Row'
import { StyledCol } from '../../../../packages/FlexGrid/Col/Col'

const GlobalStyleGuide = createGlobalStyle({
  '[class*=\'rsg--\'].docs_purple-block, .docs_purple-block': {
    backgroundColor: colorSecondary,
    padding: '2rem'
  },

  '[class*=\'rsg--\'].docs_hero, .docs_hero': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: '200px',
    padding: '2rem',
    backgroundImage: `url(${heroBackground})`,
    backgroundSize: 'cover'
  },

  '.docs_selcounter-label': {
    display: 'inline-block',
    fontWeight: '700',
    color: colorGreyShark,
    letterSpacing: '-0.6px',
    marginBottom: '3px'
  },

  '.docs_color-preview': {
    borderRadius: '20%',
    border: '1px solid #aaa',
    display: 'inline-block',
    height: '90px',
    lineHeight: '90px',
    width: '90px'
  },

  '.docs_flex-grid-coloring': {
    [StyledRow]: {
      border: `1px dashed ${colorGreyShark}`
    },

    [StyledCol]: {
      backgroundColor: colorPanache,
      border: `1px solid ${colorGreyShark}`
    }
  },

  '.docs_box-coloring': {
    'div':{
      backgroundColor: colorPanache,
      border: `1px solid ${colorGreyShark}`
    }
  },

  // Full width container with limited with parent: https://css-tricks.com/full-width-containers-limited-width-parents/
  // Only activate with there is no sidebar
  '.rsg--root-1:not(*[class*=\'rsg--hasSidebar\']) .docs_full-width-playground': {
    width: '100vw',
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw'
  },

  '.docs_full-width-footer': {
    'a': {
      textDecoration: 'none !important',
    }
  },

  '.docs_full-height-box': {
    height: '100%'
  },

  '.docs_svgicon-table': {
    width: '100%',
    '& thead th': {
      textAlign: 'left',
      fontWeight: '700',
    },
    'tr:nth-child(even)': {
      backgroundColor: colorGreyAthens,
    },
    'td,th': {
      verticalAlign: 'middle',
      padding: '0.5rem 0.75rem'
    },
  }
})

export default GlobalStyleGuide
