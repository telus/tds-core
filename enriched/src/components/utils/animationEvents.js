
let EVENT_NAME_MAP = {
        'animation' : 'animationend',
       'OAnimation' : 'oAnimationEnd',
      'msAnimation' : 'MSAnimationEnd',
     'MozAnimation' : 'mozAnimationEnd',
  'WebkitAnimation' : 'webkitAnimationEnd'
};

let endEvents = ['WebkitTransition', 'MozTransition', 'msTransition', 'OTransition', 'Transition'];
// let testStyle = document.createElement('div').style;

// if (!('AnimationEvent' in window)) {
//   delete EVENT_NAME_MAP.animation;
// }

// for (let styleName in EVENT_NAME_MAP) {
//   if (styleName in testStyle) {
//     endEvents.push(EVENT_NAME_MAP[styleName]);
//     break;
//   }
// }

export default function addEndEventListener(node, eventListener) {
  if (endEvents.length === 0) {
    window.setTimeout(eventListener, 0);
    return;
  }

  endEvents.forEach(event => {
    node.addEventListener(event, eventListener, false);
  });

  return {
    remove() {
      endEvents.forEach(event => {
        node.removeEventListener(event, eventListener, false);
      });
    }
  }
};