/* @flow */

import * as React from 'react';
import { Button, Classes, MenuItem } from '@blueprintjs/core';
import { Select } from '@blueprintjs/labs';

import FieldDropdownItem from './FieldDropdownItem';

type Props = {|
  items: ?any,
|};
type State = {|
  item: ?string,
|};

class FieldSelect extends React.Component<void, Props, State> {
  state: State = {
    item: null,
  };

  filterItem(query: string, item: any) {
    return (
      `${item.field} ${item.description} ${item.type}`
        .toLowerCase()
        .indexOf(query.toLowerCase()) >= 0
    );
  }

  handleValueChange = (item: any) => this.setState({ item });

  render() {
    const { item } = this.state;
    return (
      <Select
        filterable={true}
        resetOnSelect={true}
        items={this.props.items}
        itemPredicate={this.filterItem}
        itemRenderer={FieldDropdownItem}
        noResults={<MenuItem disabled text="No results." />}
        onItemSelect={this.handleValueChange}
      >
        <Button
          className={Classes.FILL}
          rightIconName="double-caret-vertical"
          text={item ? item.field : '(No selection)'}
        />
      </Select>
    );
  }
}

export default FieldSelect;
