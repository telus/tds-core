import Set from 'core-js/es6/set'

import { isEqual } from '../sets'

describe('sets', () => {
  it('can tell that 2 sets are equal', () => {
    let areSetsEqual = isEqual(new Set([1, 2, 3]), new Set([2, 3, 1]))
    expect(areSetsEqual).toBe(true)

    areSetsEqual = isEqual(new Set(), new Set([]))
    expect(areSetsEqual).toBe(true)
  })

  it('can tell that 2 sets are not equal when they contain some overlapping elements', () => {
    const areSetsEqual = isEqual(new Set([1, 2]), new Set([2, 3]))

    expect(areSetsEqual).toBe(false)
  })

  it('can tell that 2 sets are not equal when one is a subset of the other', () => {
    const areSetsEqual = isEqual(new Set([1, 2, 3]), new Set([1, 2]))

    expect(areSetsEqual).toBe(false)
  })

  it('can tell that 2 sets are not equal when one of them is empty', () => {
    let areSetsEqual = isEqual(new Set(), new Set([2, 3]))
    expect(areSetsEqual).toBe(false)

    areSetsEqual = isEqual(new Set([1, 2]), new Set())
    expect(areSetsEqual).toBe(false)
  })
})
