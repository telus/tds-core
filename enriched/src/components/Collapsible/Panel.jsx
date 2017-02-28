import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

if ( process.env.BROWSER ) {
  require('./Panel.scss');
}

class Panel extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const { className, header, children, isActive, onPanelClick} = this.props;
    const collapsePanelClassName = classNames('collapsible-panel', className);
    const collapsePanelContent = classNames('collapsible-panel__content', {
      'collapsible-panel__content--visible': isActive
    });

    const collapsePaneLabelClassName = classNames('collapsible-panel__label', {
      'collapsible-panel__label--expanded': isActive,
      'collapsible-panel__label--collapsed': !isActive
    });

    const iconClassName = classNames('icon', {
      'icon-core-minus': isActive,
      'icon-core-plus': !isActive
    });

    return (
      <div className={collapsePanelClassName}>
        <span aria-live="polite" className="accessible-hide">{isActive ? 'expanded' : 'collapsed'}</span>
        <button onClick={onPanelClick} aria-expanded={isActive ? 'true' : 'false'} className={collapsePaneLabelClassName}>
          <span className="collapsible-panel__header">{ header }</span>
          <span className="collapsible-panel__icon">
            <i className={iconClassName} />
          </span>
        </button>
        <div className={collapsePanelContent}>
          { children }
        </div>
      </div>
    );
  }
}

Panel.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  onPanelClick: PropTypes.func
};

Panel.defaultProps = {
  isActive: false,
  className: '',
  header: ''
};


export default Panel;
