import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import './Panel.scss'

/**
 * A collapsable panel that belongs in an ExpandCollapse Group.
 *
 * _This component can only be accessed as a name-spaced component: `ExpandCollapse.Panel`._
 *
 * Panel is used with `ExpandCollapse.Group` to produce an ExpandCollapse set.
 */
class Panel extends Component {

  componentWillMount() {
    const id = Math.random().toString(36).substr(2, 9)
    this.setId(id)
  }

  componentDidMount() {
    this.setMaxHeight()
  }

  componentDidUpdate() {
    this.setMaxHeight()
  }

  setId(id) {
    this.contentId = id
  }

  setMaxHeight() {
    if (this.props.isActive) {
      const height = this.panelContent.scrollHeight + 40
      this.panelContent.style.maxHeight = `${height}px`
    } else {
      this.panelContent.style.maxHeight = '0px'
    }
  }

  render() {
    const { className, header, children, isActive, isDisabled, onPanelClick, isFirst } = this.props
    const collapsePanelClassName = classNames('collapsible-panel', className)
    const collapsePanelContent = classNames('collapsible-panel__content', {
      'collapsible-panel__content--visible': isActive
    })

    const collapsePaneLabelClassName = classNames('collapsible-panel__label', {
      'collapsible-panel__label--disabled': isDisabled,
      'collapsible-panel__label--expanded': isActive,
      'collapsible-panel__label--collapsed': !isActive,
      'collapsible-panel__label--first': isFirst
    })

    const iconClassName = classNames('icon icon--primary', {
      'icon-core-caret-up': isActive,
      'icon-core-caret-down': !isActive
    })


    return (
      <div className={collapsePanelClassName}>
        <span className="accessible-hide">{isActive ? 'expanded' : 'collapsed'}</span>
        <button
          onClick={onPanelClick}
          aria-expanded={isActive ? 'true' : 'false'}
          aria-controls={this.contentId}
          className={collapsePaneLabelClassName}
        >
          <span className="collapsible-panel__icon">
            <i className={iconClassName} />
          </span>
          <span className="collapsible-panel__header">{ header }</span>
        </button>
        <div
          ref={(node) => { this.panelContent = node }}
          className={collapsePanelContent}
          id={this.contentId}
        >
          { children }
        </div>
      </div>
    )
  }
}

Panel.propTypes = {
  /**
   * One or more CSS class names separated by spaces to append onto the container.
   * Don't advertise as we plan on removing this feature soon.
   *
   * @ignore
   */
  className: PropTypes.string,
  /**
   * Panel title.
   */
  header: PropTypes.string,
  /**
   * @ignore
   */
  isActive: PropTypes.bool,
  /**
   * @ignore
   */
  isDisabled: PropTypes.bool,
  /**
   * @ignore
   */
  onPanelClick: PropTypes.func,
  /**
   * @ignore
   */
  isFirst: PropTypes.bool,
  /**
   * The panels. Must be TDS ExpandCollapse.Panel components.
   */
  children: PropTypes.node
}

Panel.defaultProps = {
  isActive: false,
  isDisabled: false,
  className: '',
  header: ''
}


export default Panel
