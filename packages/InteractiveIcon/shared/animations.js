const animations = {
  reduceMotion: {
    '@media (prefers-reduced-motion: reduce)': {
      transition: 'none',
    },
  },
  scale: {
    '&:hover svg': {
      transition: 'transform 150ms ease-in-out',
      transform: 'scale(1.1, 1.1)',
    },
    '&:active svg': {
      transition: 'transform 150ms ease-in-out',
      transform: 'scale(1, 1)',
    },
  },
}

export default animations
