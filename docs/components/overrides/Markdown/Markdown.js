import React from 'react'
import PropTypes from 'prop-types'
import { compiler } from 'markdown-to-jsx'
import mapValues from 'lodash/mapValues'
// import memoize from 'lodash/memoize';
import Styled from 'rsg-components/Styled'

import { styles as paraStyles } from 'rsg-components/Para'

import Link from '../../../../packages/Link/Link'
import Text from '../../../../packages/Text/Text'
import Strong from '../../../../packages/Strong/Strong'
import MarkdownHeading from '../../custom/MarkdownHeading/MarkdownHeading'
import MarkdownParagraph from '../../custom/MarkdownParagraph/MarkdownParagraph'
import MarkdownUnorderedList from '../../custom/MarkdownUnorderedList/MarkdownUnorderedList'
import MarkdownOrderedList from '../../custom/MarkdownOrderedList/MarkdownOrderedList'

// loading our own custom version of highlight.js docco theme to make code examples AAA colour accessible
import codeStyles from './highlight_js/docco.css'

// Temporary disable memoization to fix: https://github.com/styleguidist/react-styleguidist/issues/348
// TODO: Remove after merge: https://github.com/probablyup/markdown-to-jsx/pull/96
const memoize = a => a

// Code blocks with server-side syntax highlight
function Code({ children, className }) {
  const isHighlighted = className && className.indexOf('lang-') !== -1
  if (isHighlighted) {
    return <code className={className} dangerouslySetInnerHTML={{ __html: children }} />
  }
  return <code className={className}>{children}</code>
}
Code.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

// Custom CSS classes for each tag: <em> → <em className={s.em}> + custom components
const getBaseOverrides = memoize(classes => {
  const styleOverrides = mapValues(classes, value => ({
    props: {
      className: value,
    },
  }))

  return {
    ...styleOverrides,
    a: {
      component: Link,
    },
    p: {
      component: MarkdownParagraph,
    },
    h1: {
      component: MarkdownHeading,
      props: {
        level: 'h1',
      },
    },
    h2: {
      component: MarkdownHeading,
      props: {
        level: 'h2',
      },
    },
    h3: {
      component: MarkdownHeading,
      props: {
        level: 'h3',
      },
    },
    h4: {
      component: MarkdownHeading,
      props: {
        level: 'h4',
      },
    },
    h5: {
      component: MarkdownHeading,
      props: {
        level: 'h4',
      },
    },
    h6: {
      component: MarkdownHeading,
      props: {
        level: 'h4',
      },
    },
    ul: {
      component: MarkdownUnorderedList,
    },
    ol: {
      component: MarkdownOrderedList,
    },
    strong: {
      component: Strong,
    },
    code: {
      component: Code,
      props: {
        className: codeStyles,
      },
    },
  }
}, () => 'getBaseOverrides')

// Inline mode: replace <p> (usual root component) with <span>
const getInlineOverrides = memoize(classes => {
  const overrides = getBaseOverrides(classes)

  return {
    ...overrides,
    p: {
      component: Text,
    },
  }
}, () => 'getInlineOverrides')

const styles = ({ space, fontFamily, fontSize, color, borderRadius }) => ({
  base: {
    color: color.base,
    fontFamily: fontFamily.base,
    fontSize: 'inherit',
  },
  para: paraStyles({ space, color, fontFamily }).para,
  input: {
    color: color.base,
    display: 'inline-block',
    margin: [[0, '0.35em', '0.25em', '-1.2em']],
    verticalAlign: 'middle',
  },
  blockquote: {
    composes: '$para',
    fontSize: fontSize.base,
    margin: [[space[2], space[4]]],
    padding: 0,
  },
  hr: {
    composes: '$para',
    borderWidth: [[0, 0, 1, 0]],
    borderColor: color.border,
    borderStyle: 'solid',
  },
  em: {
    composes: '$base',
    fontStyle: 'italic',
  },
  code: {
    fontFamily: fontFamily.monospace,
    fontSize: 'inherit',
    color: 'inherit',
    background: 'transparent',
    whiteSpace: 'inherit',
  },
  pre: {
    fontFamily: 'Consolas, "Liberation Mono", Menlo, monospace',
    backgroundColor: color.codeBackground,
    border: [[1, color.border, 'solid']],
    padding: [[space[1], space[2]]],
    margin: [[space[2], space[0]]],
    fontSize: fontSize.small,
    borderRadius,
    whiteSpace: 'pre',
  },
  table: {
    composes: '$para',
    borderCollapse: 'collapse',
  },
  thead: {
    composes: '$hr',
  },
  tbody: {},
  td: {
    fontFamily: fontFamily.base,
    padding: [[space[0], space[2], space[0], 0]],
    fontSize: fontSize.base,
  },
  th: {
    composes: '$td',
    fontWeight: 'bold',
  },
  tr: {},
})

function Markdown({ classes, text, inline }) {
  const overrides = inline ? getInlineOverrides(classes) : getBaseOverrides(classes)
  return compiler(text, { overrides })
}

Markdown.propTypes = {
  classes: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  inline: PropTypes.bool,
}

export default Styled(styles)(Markdown)
