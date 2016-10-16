import React, { Component } from 'react';
import classnames from 'classnames';


class Step extends Component {

  render() {
    const props = this.props;
    const { isFinished, isProcess, index, children, ...others } = props;
    const cls = classnames({
      'c-step'         : true,
      'c-step--finished'  : 'finished' in props || isFinished,
      'c-step--in-process' : 'process' in props || isProcess,
    });
    return (
      <div {...others} className={cls}>
       <div className="c-step__body">
         {index}. {children}
       </div>
     </div>
    );
  }
}

export default Step;
