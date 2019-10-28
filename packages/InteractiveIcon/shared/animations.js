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
}

export default animations
