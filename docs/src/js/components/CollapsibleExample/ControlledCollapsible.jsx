import React, { Component, PropTypes } from 'react';
import { Collapsible } from 'telus-thorium-enriched';


class ControlledCollapsibleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKeys: []
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e, panelKey) {
      e.preventDefault();
      if (this.state.activeKeys.indexOf(panelKey) > -1) {
          this.setState({
              activeKeys: this.state.activeKeys.filter(k => k !== panelKey)
          });
      } else {
          this.setState({
              activeKeys: this.state.activeKeys.concat([panelKey])
          });
      }


  }

  render() {
      return (
      <div>
        <a href="" className="tds-button tds-button--secondary tds-button--link" onClick={(e)=>this.togglePanel(e, 'panel-1')}>Toggle panel #1</a>
        <a href="" className="tds-button tds-button--secondary tds-button--link" onClick={(e)=>this.togglePanel(e, 'panel-2')}>Toggle panel #2</a>
        <Collapsible.Group activeKeys={this.state.activeKeys}>
            <Collapsible.Panel header="Panel #1" panelKey="panel-1">
            Panel #1 Body
            </Collapsible.Panel>
            <Collapsible.Panel header="Panel #2" panelKey="panel-2">
            Panel #2 Body
            </Collapsible.Panel>
        </Collapsible.Group>
      </div>
    );
  }
}


export default ControlledCollapsibleExample;
