import React from 'react';
import cx from 'classnames';

const CheckList = (props) => {
  const { className, listItems, listTitle } = props;
  const cls = cx(className);

  const renderCheckList = listItems.map((item, index) => {
    return (<li key={index} className="list__item">{item}</li>);
  });

  const renderHeader = listTitle === '' ? null : <h4>{listTitle}</h4>;

  return (
    <div className={cls}>
      {renderHeader}
      <ul className="list list--checked list--small">
        {renderCheckList}
      </ul>
    </div>
  );
};

CheckList.propTypes = {
  className: React.PropTypes.string,
  listTitle: React.PropTypes.string,
  listItems: React.PropTypes.array
};

CheckList.defaultProps = {
  className: '',
  listTitle: '',
  listItems: []
};

export default CheckList;
