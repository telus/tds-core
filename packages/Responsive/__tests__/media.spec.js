import media, { breakpoints } from '../media'

beforeEach(() => {})

describe('media', () => {
  describe('from()', () => {
    it('accepts a function', () => {
      const style = media.from('md').css({
        color: 'red',
      })

      expect(style).toEqual({ [`@media (min-width: ${breakpoints.md}px)`]: { color: 'red' } })
    })

    it('accepts an object', () => {
      const style = media.from('md').css(() => ({
        color: 'red',
      }))

      expect(style).toEqual({ [`@media (min-width: ${breakpoints.md}px)`]: { color: 'red' } })
    })
  })

  describe('until()', () => {
    it('accepts a function', () => {
      const style = media.until('md').css({
        color: 'red',
      })

      expect(style).toEqual({ [`@media (max-width: ${breakpoints.md - 1}px)`]: { color: 'red' } })
    })

    it('accepts an object', () => {
      const style = media.until('md').css(() => ({
        color: 'red',
      }))

      expect(style).toEqual({ [`@media (max-width: ${breakpoints.md - 1}px)`]: { color: 'red' } })
    })
  })

  describe('and()', () => {
    it('accepts a function', () => {
      const style = media.and('(orientation: landscape)').css({
        color: 'red',
      })

      expect(style).toEqual({ [`@media (orientation: landscape)`]: { color: 'red' } })
    })

    it('accepts an object', () => {
      const style = media.and('(orientation: landscape)').css(() => ({
        color: 'red',
      }))

      expect(style).toEqual({ [`@media (orientation: landscape)`]: { color: 'red' } })
    })
  })

  it('can chain', () => {
    const style = media
      .from('md')
      .until('lg')
      .and('(orientation: landscape)')
      .css({
        color: 'red',
      })

    expect(style).toEqual({
      [`@media (min-width: ${breakpoints.md}px) and (max-width: ${breakpoints.lg -
        1}px) and (orientation: landscape)`]: { color: 'red' },
    })
  })

  it('can return css with no media query if from/until/and are all undefined', () => {
    const style = media
      .from(undefined)
      .until(undefined)
      .and(undefined)
      .css({
        color: 'red',
      })

    expect(style).toEqual({ color: 'red' })
  })

  it('handles min-width queries', () => {
    let style = media
      .from('xs')
      .until(undefined)
      .css({
        color: 'red',
      })

    expect(style).toEqual({ color: 'red' })

    style = media
      .from('md')
      .until(undefined)
      .css({
        color: 'red',
      })

    expect(style).toEqual({
      [`@media (min-width: ${breakpoints.md}px)`]: { color: 'red' },
    })
  })
})
