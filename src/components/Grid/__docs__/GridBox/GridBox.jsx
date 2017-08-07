import React from 'react';
import PropTypes from 'prop-types';

import styles from './GridBox.modules.scss';

const GridBox = ({ children }) => <div className={styles.box}>{children}</div>;
GridBox.propTypes = {
  children: PropTypes.node.isRequired
};

export default GridBox;
