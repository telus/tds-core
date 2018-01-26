import PropTypes from 'prop-types';
import React from 'react';
import cx from 'classnames';

import { components } from '@telusdigital/redux-contentful';

const { Legal: { WithLegal } } = components;

/**
 * ComponentChecklist is composed of a list title and an array of list items to be rendered as checklist items.
 * It can be used with [BlockOverview](#blockoverview).
 * It takes up the full width of its parent container.
 *
 * Contentful models (BUS > Marketing): Text List
 */
const ComponentChecklist = ({ className, listItems, listTitle }) => {
  const renderChecklistItems = listItems.map(item => (
    <li key={item} className="list__item">
      <WithLegal content={item} />
    </li>
    )
  );

  const renderHeader = listTitle === '' ? null : <h4><WithLegal content={listTitle} /></h4>;

  return (
    <div className={cx(className)}>
      {renderHeader}
      {
        listItems instanceof Array &&
        <ul className="list list--checked list--small">
          {renderChecklistItems}
        </ul>
      }
    </div>
  );
};

ComponentChecklist.propTypes = {
  className: PropTypes.string,
  /** recommended: text should fit in one line */
  listTitle: PropTypes.string.isRequired,
  listItems: PropTypes.arrayOf(PropTypes.string).isRequired
};

ComponentChecklist.defaultProps = {
  className: ''
};

export default ComponentChecklist;
