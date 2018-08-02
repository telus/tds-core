const calculateLevel = (xsReverse, smReverse, mdReverse, lgReverse, xlReverse) => {
  const levelToggles = [xsReverse, smReverse, mdReverse, lgReverse, xlReverse]
  const enabledLevels = [false, false, false, false, false]

  for (let toggles = 0; toggles < levelToggles.length; toggles += 1) {
    for (let levels = toggles; levels < enabledLevels.length; levels += 1) {
      if (levelToggles[toggles] !== undefined) {
        enabledLevels[levels] = levelToggles[toggles]
      }
    }
  }

  return enabledLevels
}

export default calculateLevel
