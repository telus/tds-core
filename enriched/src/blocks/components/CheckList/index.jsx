import React from 'react';
import cx from 'classnames';

const CheckList = (props) => {
  const {className, header, list} = props;
  const cls = cx(className);

  const renderCheckList = list.map((item, index) => {
    return (<li key={index} className="list__item">{item}</li>);
  });

  const renderHeader = header === '' ? null : <h4>{header}</h4>;

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
  header: React.PropTypes.string,
  list: React.PropTypes.array
};

CheckList.defaultProps = {
  className: '',
  header: '',
  list: []
};

export default CheckList;
