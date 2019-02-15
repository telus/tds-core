import media, { breakpoints } from '../media'

describe('media utilities', () => {
  describe('breakpoints', () => {
    it('has the correct breakpoints', () => {
      expect(breakpoints.xs).toBeUndefined()
      expect(breakpoints.sm).toBe(576)
      expect(breakpoints.md).toBe(768)
      expect(breakpoints.lg).toBe(992)
      expect(breakpoints.xl).toBe(1200)
    })
  })

  describe('from()', () => {
    it('generates a style object wrapped in a media query for a specified breakpoint', () => {
      const bps = ['sm', 'md', 'lg', 'xl']
      bps.forEach(breakpoint => {
        const style = media.from(breakpoint)({
          color: 'red',
        })
        const expectedStyle = {
          [`@media (min-width: ${breakpoints[breakpoint]}px)`]: {
            color: 'red',
          },
        }
        expect(style).toEqual(expectedStyle)
      })
    })
  })
})
