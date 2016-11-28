import '../scss/main.scss';

import * as thoriumComponents from 'telus-thorium-enriched';
import * as exampleComponents from './components';

const components = { ...thoriumComponents, ...exampleComponents };

window.Thorium = components;
