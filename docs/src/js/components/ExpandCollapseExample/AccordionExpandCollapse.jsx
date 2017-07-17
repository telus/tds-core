import React from 'react';
import { ExpandCollapse } from 'telus-thorium-enriched';

const AccordionExpandCollapseExample = () => {
    return (
      <ExpandCollapse.Group accordion>
        <ExpandCollapse.Panel header="Panel #1">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia fermentum nisl,
          id lobortis nunc porta sed. Vestibulum quis tortor non nisl vulputate varius. Vivamus euismod
          congue mi, quis ultricies dolor viverra at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia fermentum nisl,
          id lobortis nunc porta sed. Vestibulum quis tortor non nisl vulputate varius. Vivamus euismod
          congue mi, quis ultricies dolor viverra at.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris lacinia fermentum nisl,
          id lobortis nunc porta sed. Vestibulum quis tortor non nisl vulputate varius. Vivamus euismod
          congue mi, quis ultricies dolor viverra at.</p>
        </ExpandCollapse.Panel>
        <ExpandCollapse.Panel header="Panel #2">
          <p>Ut fermentum, turpis vel tincidunt volutpat, diam est vehicula leo, sed convallis dolor
          ante aliquet nisi. Nunc nisi erat, pulvinar quis lectus eget, tristique suscipit lectus.
          Maecenas non erat semper, tristique odio euismod, pulvinar metus.</p>
          <p>Ut fermentum, turpis vel tincidunt volutpat, diam est vehicula leo, sed convallis dolor
          ante aliquet nisi. Nunc nisi erat, pulvinar quis lectus eget, tristique suscipit lectus.
          Maecenas non erat semper, tristique odio euismod, pulvinar metus.</p>
          <p>Ut fermentum, turpis vel tincidunt volutpat, diam est vehicula leo, sed convallis dolor
          ante aliquet nisi. Nunc nisi erat, pulvinar quis lectus eget, tristique suscipit lectus.
          Maecenas non erat semper, tristique odio euismod, pulvinar metus.</p>
        </ExpandCollapse.Panel>
      </ExpandCollapse.Group>
    );
}

export default AccordionExpandCollapseExample;
