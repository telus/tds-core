import mediaQuery from 'css-mediaquery'

const doesQueryMatch = (query, viewportSize) => {
  if (!viewportSize) {
    return true
  }

  return mediaQuery.match(query, {
    type: 'screen',
    width: `${viewportSize}px`,
  })
}

export default viewportSize => {
  const matchMedia = jest.fn()
  matchMedia.mockImplementation(query => {
    const matches = doesQueryMatch(query, viewportSize)

    return {
      matches,
      addListener: () => {},
      removeListener: () => {},
    }
  })

  global.matchMedia = matchMedia
}
