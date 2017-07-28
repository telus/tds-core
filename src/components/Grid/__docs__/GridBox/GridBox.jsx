import React from 'react';

import styles from './GridBox.modules.scss';

const GridBox = ({ children }) => <div className={styles.box}>{children}</div>;

export default GridBox;
