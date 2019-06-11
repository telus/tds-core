import fs from 'fs'
import path from 'path'
import rimraf from 'rimraf'

export default (options = {}) => {
  const targets = options.targets ? options.targets : []
  return {
    name: 'cleaner',
    generateBundle() {
      let normalisedPath
      if (targets && targets.length) {
        for (let i = 0; i < targets.length; i += 1) {
          normalisedPath = path.normalize(targets[i])
          if (fs.existsSync(normalisedPath)) {
            rimraf.sync(normalisedPath)
          }
        }
      }
    },
  }
}
