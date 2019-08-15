import * as SvgIcons from '../packages/DecorativeIcon/svgs'
import * as FeedbackIcons from '../packages/FeedbackIcon'
import * as InteractiveIcons from '../packages/InteractiveIcon/svgs'

const iconKeys = Object.keys(SvgIcons)

for (let i = 0; i < iconKeys.length; i += 1) {
  if (global[iconKeys[i]] !== undefined) {
    global[`${iconKeys[i]}Icon`] = SvgIcons[iconKeys[i]]
  } else {
    global[iconKeys[i]] = SvgIcons[iconKeys[i]]
  }
}

const feedbackIconKeys = Object.keys(FeedbackIcons)
for (let i = 0, len = feedbackIconKeys.length; i < len; i += 1) {
  global[feedbackIconKeys[i]] = FeedbackIcons[feedbackIconKeys[i]]
}
const interactiveIconKeys = Object.keys(InteractiveIcons)

for (let i = 0, len = interactiveIconKeys.length; i < len; i += 1) {
  if (interactiveIconKeys[i] === 'Tooltip') {
    global[`${interactiveIconKeys[i]}Icon`] = InteractiveIcons[interactiveIconKeys[i]]
  } else {
    global[interactiveIconKeys[i]] = InteractiveIcons[interactiveIconKeys[i]]
  }
}
