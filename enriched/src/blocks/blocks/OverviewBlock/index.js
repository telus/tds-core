import React from 'react';

const OverviewBlock = (props) => {
  const {header} = props;

  const renderHeader = header === '' ? null : <h4>{header}</h4>;

  return (
    <div className="container container--limited-width">
      {renderHeader}
    </div>
  );
};

OverviewBlock.propTypes = {
  className: React.PropTypes.string,
  header: React.PropTypes.string
};

OverviewBlock.defaultProps = {
  className: '',
  header: ''
};

export default OverviewBlock;
