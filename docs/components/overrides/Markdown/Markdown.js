// Copied from https://github.com/styleguidist/react-styleguidist/blob/master/src/rsg-components/Markdown/Markdown.js

import PropTypes from 'prop-types';
import { compiler } from 'markdown-to-jsx';
// import Link from 'rsg-components/Link';
import Text from 'rsg-components/Text';
// import Para from 'rsg-components/Para';
import MarkdownHeading from 'rsg-components/Markdown/MarkdownHeading';
import List from 'rsg-components/Markdown/List';
import Blockquote from 'rsg-components/Markdown/Blockquote';
import Pre from 'rsg-components/Markdown/Pre';
import Code from 'rsg-components/Code';
import Checkbox from 'rsg-components/Markdown/Checkbox';
import Hr from 'rsg-components/Markdown/Hr';
import { Table, TableHead, TableBody, TableRow, TableCell } from 'rsg-components/Markdown/Table';

import Link from '../../../../packages/Link/Link'
import MarkdownParagraph from '../../custom/MarkdownParagraph/MarkdownParagraph'
import Strong from '../../../../packages/Strong/Strong'
import { default as TdsText } from '../../../../packages/Text/Text'

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved
// require('!!../../../loaders/style-loader!../../../loaders/css-loader!highlight.js/styles/tomorrow.css');

// Load a custom version of highlight.js docco theme to make code examples AAA colour accessible
import './highlight_js/docco.css'

const baseOverrides = {
  a: {
    component: Link,
  },
  h1: {
    component: MarkdownHeading,
    props: {
      level: 1,
    },
  },
  h2: {
    component: MarkdownHeading,
    props: {
      level: 2,
    },
  },
  h3: {
    component: MarkdownHeading,
    props: {
      level: 3,
    },
  },
  h4: {
    component: MarkdownHeading,
    props: {
      level: 4,
    },
  },
  h5: {
    component: MarkdownHeading,
    props: {
      level: 5,
    },
  },
  h6: {
    component: MarkdownHeading,
    props: {
      level: 6,
    },
  },
  // p: {
  //   component: Para,
  //   props: {
  //     semantic: 'p',
  //   },
  // },
  p: {
    component: MarkdownParagraph,
  },
  em: {
    component: Text,
    props: {
      semantic: 'em',
    },
  },
  // strong: {
  //   component: Text,
  //   props: {
  //     semantic: 'strong',
  //   },
  // },
  strong: {
    component: Strong
  },
  ul: {
    component: List,
  },
  ol: {
    component: List,
    props: {
      ordered: true,
    },
  },
  blockquote: {
    component: Blockquote,
  },
  code: {
    component: Code,
  },
  pre: {
    component: Pre,
  },
  input: {
    component: Checkbox,
  },
  hr: {
    component: Hr,
  },
  table: {
    component: Table,
  },
  thead: {
    component: TableHead,
  },
  th: {
    component: TableCell,
    props: {
      header: true,
    },
  },
  tbody: {
    component: TableBody,
  },
  tr: {
    component: TableRow,
  },
  td: {
    component: TableCell,
  },
};

const inlineOverrides = {
  ...baseOverrides,
  // p: {
  //   component: Text,
  // },
  p: {
    component: TdsText,
  },
};

function Markdown({ text, inline }) {
  const overrides = inline ? inlineOverrides : baseOverrides;
  return compiler(text, { overrides, forceBlock: true });
}

Markdown.propTypes = {
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
};

export default Markdown;
