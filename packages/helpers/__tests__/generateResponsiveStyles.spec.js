import { prepareArray, generateStyles } from '../generateResponsiveStyles'

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

    it('handles boundry crossing responsive props', () => {
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

      expect(generateStyles(array, styleFn, ['between'])).toEqual({
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

      expect(generateStyles(array, styleFn, ['between'])).toEqual({
        flexDirection: 'column',
        marginBottom: 2,
      })
    })
  })
})
