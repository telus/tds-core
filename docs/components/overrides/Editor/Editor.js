/* eslint-disable */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/mode/jsx/jsx'

// We’re explicitly specifying Webpack loaders here so we could skip specifying them in Webpack configuration.
// That way we could avoid clashes between our loaders and user loaders.
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
require('!!../../../../node_modules/react-styleguidist/loaders/style-loader!../../../../node_modules/react-styleguidist/loaders/css-loader!../../../../node_modules/codemirror/lib/codemirror.css')

// loading our own (TDS) custom AAA colour accessible ttcn.css theme instead of loading the ttcn theme from the
// codemirror package mapped to the rsg-codemirror-theme.css webpack alias
// eslint-disable-next-line import/no-unresolved, import/no-webpack-loader-syntax
require('!!../../../../node_modules/react-styleguidist/loaders/style-loader!../../../../node_modules/react-styleguidist/loaders/css-loader!./codemirror/ttcn.css')

const UPDATE_DELAY = 10

export default class Editor extends Component {
  static propTypes = {
    code: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  static contextTypes = {
    config: PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.handleChange = debounce(this.handleChange.bind(this), UPDATE_DELAY)
  }

  shouldComponentUpdate() {
    return false
  }

  handleChange(editor, metadata, newCode) {
    this.props.onChange(newCode)
  }

  render() {
    const { code } = this.props
    let { editorConfig } = this.context.config
    editorConfig = Object.assign(editorConfig, {
      lineWrapping: true,
    })
    return (
      <CodeMirror
        value={code}
        onChange={this.handleChange}
        options={editorConfig}
        className="cm-s-ttcn"
      />
    )
  }
}
