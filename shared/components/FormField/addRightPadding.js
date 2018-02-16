const betweenSpacing = 1 // rem
const iconWidth = 16 // px

export default numberOfIcons => {
  if (numberOfIcons === 0) {
    return undefined
  }

  return {
    paddingRight: `calc(${iconWidth * numberOfIcons}px + ${betweenSpacing *
      (numberOfIcons + 1)}rem)`,
  }
}
