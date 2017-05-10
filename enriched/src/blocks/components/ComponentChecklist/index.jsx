import React from 'react';
import cx from 'classnames';

import { components } from '@telusdigital/redux-contentful';

const { Legal: { WithLegal } } = components;

const ComponentChecklist = (props) => {
  const { className, listItems, listTitle } = props;
  const cls = cx(className);

  const renderCheckList = listItems.map((item, index) => {
    return (<li key={index} className="list__item"><WithLegal content={item} /></li>);
  });

  const renderHeader = listTitle === '' ? null : <h4><WithLegal content={listTitle} /></h4>;

  return (
    <div className={cls}>
      {renderHeader}
      <ul className="list list--checked list--small">
        {renderCheckList}
      </ul>
    </div>
  );
};

ComponentChecklist.propTypes = {
  className: React.PropTypes.string,
  listTitle: React.PropTypes.string,
  listItems: React.PropTypes.array
};

ComponentChecklist.defaultProps = {
  className: '',
  listTitle: '',
  listItems: []
};

export default ComponentChecklist;
