import React from 'react';

if ( process.env.BROWSER ) {
  require('./b-divider-dimple.scss');
}

const BlockDividerDimple = () => {
  return (
    <section className="container b-divider-dimple__bg" />
  );
};

export default BlockDividerDimple;
