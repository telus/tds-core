import '../scss/main.scss';

import * as thoriumComponents from 'telus-thorium-enriched';
import * as exampleComponents from './components';
import * as tdsBlocks from './blocks';
import * as tdsBlockComponents from './block-components';

const components = { ...thoriumComponents, ...exampleComponents };
const blocks = {...tdsBlocks};
const blockComponents = {...tdsBlockComponents};

window.Thorium = components;
window.TDSBlocks = blocks;
window.TDSBlockComponents = blockComponents;
