import React from 'react';
import PropTypes from 'prop-types';
import RadioSelectorItem from '../RadioSelectorItem';

class RadioSelectorGroup extends React.Component {
  constructor(props) {
    super(props);
    this.onSelectItem = this.onSelectItem.bind(this);
  }

  onSelectItem(e) {
    this.props.onSelect(e.target.value);
  }

  render() {
    const { groupName, items, renderItemContent } = this.props;
    return (
      <div className="container">
        <div className="grid-row">
          {
            items.map((item) => {
              return (
                <RadioSelectorItem
                  key={item.id}
                  onSelect={this.onSelectItem}
                  id={item.id}
                  value={item.value}
                  groupName={groupName}
                >
                  {renderItemContent(item)}
                </RadioSelectorItem>
              );
            })
          }
        </div>
      </div>
    );
  }
}

RadioSelectorGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  renderItemContent: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
  groupName: PropTypes.string.isRequired
};


export default RadioSelectorGroup;