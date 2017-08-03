## Basic Usage

```
<Group disabledKeys={["panel-3"]}>
  <Panel header="Panel #1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet at lacus vel fringilla.">
    Panel #1 Body
  </Panel>
  <Panel header="Panel #2">
    Panel #2 Body
  </Panel>
  <Panel header="Panel #3 is disabled" panelKey="panel-3">
    Panel #3 Body
  </Panel>
</Group>
```

## State Control with Toggles

We can control the Expand/Collapse component state.

```
class ToggleExample extends React.Component {
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
        <a href="" className="button button--secondary button--link" onClick={(e)=>this.togglePanel(e, 'panel-1')}>Toggle panel #1</a>
        <a href="" className="button button--secondary button--link" onClick={(e)=>this.togglePanel(e, 'panel-2')}>Toggle panel #2</a>
        <Group activeKeys={this.state.activeKeys}>
          <Panel header="Panel #1" panelKey="panel-1">
          Panel #1 Body
          </Panel>
          <Panel header="Panel #2" panelKey="panel-2">
          Panel #2 Body
          </Panel>
        </Group>
      </div>
    );
  }
}

<ToggleExample/>
```

## Accordion

Accordion is a special kind of Collapse, which allows only one panel to be expanded at a time.

```
<Group accordion>
  <Panel header="Panel #1">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia fermentum nisl, id lobortis nunc porta sed. Vestibulum quis tortor non nisl vulputate varius. Vivamus euismod congue mi, quis ultricies dolor viverra at.</p>
  </Panel>
  <Panel header="Panel #2">
    <p>Ut fermentum, turpis vel tincidunt volutpat, diam est vehicula leo, sed convallis dolor ante aliquet nisi. Nunc nisi erat, pulvinar quis lectus eget, tristique suscipit lectus. Maecenas non erat semper, tristique odio euismod, pulvinar metus.</p>
  </Panel>
</Group>
```
