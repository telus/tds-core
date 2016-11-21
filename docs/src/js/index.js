import React from 'react';
import { render } from 'react-dom';

import '../scss/main.scss';

import * as thoriumComponents from 'telus-thorium-enriched';
import * as exampleComponents from './components';

const components = { ...thoriumComponents, ...exampleComponents };

function renderReactComponent(reactComponent) {
  const componentName = reactComponent.getAttribute('data-thorium-component');
  const unparsedProps = reactComponent.getAttribute('data-props') || {};

  reactComponent.removeAttribute('data-props');
  reactComponent.removeAttribute('data-thorium-component');

  let parsedProps = {};

  try {
    parsedProps = JSON.parse(unparsedProps);
  } catch (e) {
    parsedProps = {};
  }

  const component = components[componentName];

  if (component) {
    parsedProps.dangerouslySetInnerHTML = {
      __html: reactComponent.innerHTML
    };

    render(React.createElement(component, parsedProps), reactComponent);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Iterate through the list of thorium components
  // Bypasses the original set of DOM nodes found with querySelectorAll(), allowing new DOM nodes to be found.
  var reactComponent;

  while((reactComponent = window.document.querySelector('[data-thorium-component]')) != null) {
    renderReactComponent(reactComponent);
  }
});
