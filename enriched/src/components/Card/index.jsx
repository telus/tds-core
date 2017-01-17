import React, {Component} from 'react';
import cx from 'classnames';

if (process.env.BROWSER) {
  require('./card.scss');
}

class Card extends Component {
  render() {
    const { children, className, ...restProps } = this.props;
    const cls = cx('card', className);

    return (
      <div className={cls} {...restProps}>
        {children}
      </div>
    );
  }
}

Card.propTypes = {
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

Card.defaultProps = {
  className: ''
};

export default Card;
