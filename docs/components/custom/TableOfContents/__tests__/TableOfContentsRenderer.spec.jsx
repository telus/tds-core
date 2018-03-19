import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TableOfContentsRenderer from '../TableOfContentsRenderer'

describe('TableOfContentsRenderer', () => {
  it('renders', () => {
    const comp = shallow(
      <TableOfContentsRenderer searchTerm="" onSearchTermChange={val => val}>
        <div>Children</div>
      </TableOfContentsRenderer>
    )
    expect(toJson(comp)).toMatchSnapshot()
  })
})
