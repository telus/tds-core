import * as SvgIcons from '../packages/DecorativeIcon/svgs'

const iconKeys = Object.keys(SvgIcons)

for (let i = 0; i < iconKeys.length; i += 1) {
  if (global[iconKeys[i]] !== undefined) {
    global[`${iconKeys[i]}Icon`] = SvgIcons[iconKeys[i]]
  } else {
    global[iconKeys[i]] = SvgIcons[iconKeys[i]]
  }
}
