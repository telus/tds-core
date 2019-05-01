import styled from 'styled-components'

import { sizeMedium, mediumFont } from '@tds/shared-typography'
import { media } from '@tds/core-responsive'

import List, { withStyledComponent, StyledList, StyledListItem } from '../List/List'

const StyledStickyListItem = styled(StyledListItem)({
  '& > span': {
    ...mediumFont,
  },
  ...media.from('md').css({
    paddingLeft: '2rem',
  }),
})
const StyledStickyList = styled(StyledList)({
  ...sizeMedium,
  marginLeft: '1rem',
  ...media.from('md').css({
    marginLeft: '1rem',
  }),
})

const StickyList = withStyledComponent(StyledStickyList)(List)
const StickyListItem = withStyledComponent(StyledStickyListItem)(List.Item)

StickyList.Item = StickyListItem

export default StickyList
