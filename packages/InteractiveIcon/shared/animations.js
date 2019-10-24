const animations = {
  reduceMotion: {
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
  scale: {
    transition: 'transform 150ms ease-in-out',
    '&:hover svg': {
      transform: 'scale(1.1, 1.1)',
    },
    '&:active svg': {
      transform: 'scale(1, 1)',
    },
  },
  translate: ({ animationDirection }) => ({
    transition: 'transform 150ms ease-in-out',
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
    [`:hover, :focus, :active`]: {
      transform: `translate${
        animationDirection === 'up' || animationDirection === 'down' ? 'Y' : 'X'
      }(${animationDirection === 'up' || animationDirection === 'left' ? '-' : ''}4px)`,
    },
  }),
}

export default animations
