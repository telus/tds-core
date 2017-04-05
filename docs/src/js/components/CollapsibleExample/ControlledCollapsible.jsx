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

  togglePanel(panelKey) {
      if (this.state.activeKeys.includes(panelKey)) {
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
        <button className="button button-green button-green--outlined" onClick={()=>this.togglePanel('panel-1')}>Toggle panel #1</button>
        <button className="button button-green button-green--outlined" onClick={()=>this.togglePanel('panel-2')}>Toggle panel #2</button>
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
