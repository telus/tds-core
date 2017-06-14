import '../scss/main.scss';

import * as tdsComponents from 'telus-thorium-enriched';
import * as exampleComponents from './components';
import * as tdsBlocks from './blocks';
import * as tdsBlockComponents from './block-components';

const components = { ...tdsComponents, ...exampleComponents };
const blocks = {...tdsBlocks};
const blockComponents = {...tdsBlockComponents};

window.Tds = components;
window.TDSBlocks = blocks;
window.TDSBlockComponents = blockComponents;
