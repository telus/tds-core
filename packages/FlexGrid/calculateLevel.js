const calculateLevel = (xs, sm, md, lg, xl) => {
  const levelToggles = [xs, sm, md, lg, xl]
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
