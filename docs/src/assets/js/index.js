import React from 'react';
import { render } from 'react-dom';
import * as thoriumComponents from 'telus-thorium-enriched';
import * as exampleComponents from './components';

document.addEventListener('DOMContentLoaded', () => {
  const components = { ...thoriumComponents, ...exampleComponents };
  const mounts = window.document.querySelectorAll('[data-thorium-component]');

  [...mounts].forEach(mountPoint => {
    const rawProps = mountPoint.getAttribute('data-props') || {};
    let parsedProps = {};

    mountPoint.removeAttribute('data-props');

    try {
      parsedProps = JSON.parse(rawProps);
    } catch (e) {
      parsedProps = {};
    }

    const componentName = mountPoint.getAttribute('data-thorium-component');
    const component = components[componentName];

    if (component) {
      render(React.createElement(component, parsedProps), mountPoint);
    }
  });
});
