import { prepareArray, generateStyles, handleResponsiveStyles } from '../generateResponsiveStyles'

describe('generateResponsiveStyles', () => {
  describe('prepareArray', () => {
    it('handles no responsive props', () => {
      const props = {
        between: 8,
        inline: true,
      }
      const preparedObject = prepareArray(props)
      expect(preparedObject).toEqual([
        {
          from: 'xs',
          until: undefined,
          props: {
            between: 8,
            inline: true,
          },
        },
      ])
    })

    it('handles a single responsive prop', () => {
      const props = {
        between: { xs: 8 },
      }
      const preparedObject = prepareArray(props)
      expect(preparedObject).toEqual([
        {
          from: 'xs',
          until: undefined,
          props: {
            between: 8,
          },
        },
      ])
    })

    it('handles two responsive props', () => {
      const props = {
        between: { xs: 4, md: 8 },
        inline: { xs: true, md: false },
      }
      const preparedObject = prepareArray(props)
      expect(preparedObject).toEqual([
        {
          from: 'xs',
          until: 'md',
          props: {
            between: 4,
            inline: true,
          },
        },
        {
          from: 'md',
          until: undefined,
          props: {
            between: 8,
            inline: false,
          },
        },
      ])
    })

    it('handles mixed responsive and static props', () => {
      const props = {
        horizontal: { xs: 2, lg: 4 },
        between: { xs: 4, md: 8 },
        inline: false,
      }
      const preparedObject = prepareArray(props)
      expect(preparedObject).toEqual([
        {
          from: 'xs',
          until: 'md',
          props: {
            horizontal: 2,
            between: 4,
            inline: false,
          },
        },
        {
          from: 'md',
          until: 'lg',
          props: {
            horizontal: 2,
            between: 8,
            inline: false,
          },
        },
        {
          from: 'lg',
          until: undefined,
          props: {
            horizontal: 4,
            between: 8,
            inline: false,
          },
        },
      ])
    })

    it('does not handle boundry crossing responsive props', () => {
      const props = {
        between: { xs: 2, sm: 8 },
        inline: { xs: false, lg: true },
      }
      const preparedObject = prepareArray(props)
      expect(preparedObject).toEqual([
        {
          from: 'xs',
          until: 'sm',
          props: {
            between: 2,
            inline: false,
          },
        },
        {
          from: 'sm',
          until: 'lg',
          props: {
            between: 8,
            inline: false,
          },
        },
        {
          from: 'lg',
          until: undefined,
          props: {
            between: 8,
            inline: true,
          },
        },
      ])
    })

    it('handles other props', () => {
      const props = {
        between: { xs: 4, md: 8 },
        inline: true,
      }
      const preparedObject = prepareArray(props)
      expect(preparedObject).toEqual([
        {
          from: 'xs',
          until: 'md',
          props: {
            between: 4,
            inline: true,
          },
        },
        {
          from: 'md',
          until: undefined,
          props: {
            between: 8,
            inline: true,
          },
        },
      ])
    })
  })
  describe('generateStyles', () => {
    const styleFn = ({ between, inline }) => {
      const styles = {
        flexDirection: inline ? 'row' : 'column',
      }

      if (inline) {
        styles.marginRight = between
      } else {
        styles.marginBottom = between
      }

      return styles
    }

    it('calls styleFn with the props, from, and until breakpoints', () => {
      const styleFnMock = jest.fn()
      const array = [
        {
          from: 'xs',
          until: 'sm',
          props: {
            between: 2,
            inline: false,
          },
        },
        {
          from: 'sm',
          until: undefined,
          props: {
            between: 8,
            inline: false,
          },
        },
      ]
      generateStyles(array, styleFnMock)

      expect(styleFnMock.mock.calls.length).toBe(2)
      expect(styleFnMock.mock.calls[0]).toEqual([
        {
          between: 2,
          inline: false,
        },
        'xs',
        'sm',
      ])
      expect(styleFnMock.mock.calls[1]).toEqual([
        {
          between: 8,
          inline: false,
        },
        'sm',
        undefined,
      ])
    })

    it('generates css', () => {
      const array = [
        {
          from: 'xs',
          until: 'sm',
          props: {
            between: 2,
            inline: false,
          },
        },
        {
          from: 'sm',
          until: 'md',
          props: {
            between: 8,
            inline: false,
          },
        },
        {
          from: 'md',
          until: 'lg',
          props: {
            between: 8,
            inline: false,
          },
        },
        {
          from: 'lg',
          until: undefined,
          props: {
            between: 8,
            inline: true,
          },
        },
      ]

      expect(generateStyles(array, styleFn)).toEqual({
        '@media (max-width: 575px)': {
          flexDirection: 'column',
          marginBottom: 2,
        },
        '@media (min-width: 576px) and (max-width: 767px)': {
          flexDirection: 'column',
          marginBottom: 8,
        },
        '@media (min-width: 768px) and (max-width: 991px)': {
          flexDirection: 'column',
          marginBottom: 8,
        },
        '@media (min-width: 992px)': {
          flexDirection: 'row',
          marginRight: 8,
        },
      })
    })

    it('filters other props', () => {
      const array = [
        {
          from: 'xs',
          until: undefined,
          props: {
            tag: 'ul',
            between: 2,
            children: [Array],
            className: 'sc-bwzfXH honaPh',
            inline: false,
            forwardedComponent: [Object],
            forwardedRef: null,
            theme: {},
            as: 'ul',
            below: undefined,
          },
        },
      ]

      expect(generateStyles(array, styleFn)).toEqual({
        flexDirection: 'column',
        marginBottom: 2,
      })
    })

    xit('handles custom media', () => {
      const array = [
        {
          from: 'xs',
          until: 'sm',
          props: {
            between: 2,
            inline: false,
          },
        },
        {
          from: 'sm',
          until: 'lg',
          props: {
            between: 8,
            inline: false,
          },
        },
        {
          from: 'lg',
          until: undefined,
          props: {
            between: 8,
            inline: true,
          },
        },
      ]

      expect(generateStyles(array, styleFn)).toEqual({
        '@media (max-width: 575px)': {
          flexDirection: 'column',
          marginBottom: 2,
        },
        '@media (min-width: 576px) and (max-width: 767px)': {
          flexDirection: 'column',
          marginBottom: 8,
        },
        '@media (min-width: 768px) and (max-width: 991px)': {
          flexDirection: 'column',
          marginBottom: 8,
        },
        '@media (min-width: 992px)': {
          flexDirection: 'row',
          marginRight: 8,
        },
      })
    })
  })

  describe('handleResponsiveStyle', () => {
    const props = {
      vertical: { xs: 4, md: 8 },
    }
    const styleFn = ({ vertical }) => {
      if (vertical === undefined) {
        return undefined
      }

      return { paddingTop: vertical, paddingBottom: vertical }
    }

    it('works', () => {
      const styles = handleResponsiveStyles(props, styleFn)
      expect(styles).toEqual({
        '@media (max-width: 767px)': {
          paddingTop: 4,
          paddingBottom: 4,
        },
        '@media (min-width: 768px)': {
          paddingTop: 8,
          paddingBottom: 8,
        },
      })
    })
  })
})
