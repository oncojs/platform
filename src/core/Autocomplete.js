/* @flow */

import classNames from 'classnames';
import React, { Component } from 'react';
import {
  Classes,
  Position,
  MenuItem,
  Text,
  InputGroup,
  AnchorButton,
  IconClasses,
} from '@blueprintjs/core';
import { Select } from '@blueprintjs/labs';
import { Flex } from 'grid-styled';
console.log(Select);
type Props = {};

type State = {| query: string |};

class Autocomplete extends Component<void, Props, State> {
  state: State = { query: '' };
  render() {
    return (
      <Select
        popoverProps={{
          isOpen: this.state.query.length > 1,
          position: Position.BOTTOM_LEFT,
        }}
        filterable={false}
        resetOnSelect={true}
        items={[
          {
            key: 'TP53',
            doc_count: 1243576,
          },
          {
            key: 'Kidney / Heart',
            doc_count: 12476,
          },
          {
            key:
              'Kidney / Heart / Kidney / Heart Kidney / Heart / Kidney / Heart',
            doc_count: 12476,
          },
        ].filter(
          x => x.key.toLowerCase().indexOf(this.state.query.toLowerCase()) >= 0,
        )}
        itemRenderer={({ handleClick, isActive, item }) => {
          const classes = classNames({
            [Classes.ACTIVE]: isActive,
            [Classes.INTENT_PRIMARY]: isActive,
          });
          return (
            <MenuItem
              className={classes}
              key={item.field}
              onClick={handleClick}
              text={
                <Flex justify="space-between" style={{ maxWidth: '270px' }}>
                  <Text ellipsize>
                    {item.key}
                  </Text>
                  <div
                    style={{
                      marginLeft: '.5rem',
                      fontFamily: 'monospace',
                    }}
                  >
                    {item.doc_count}
                  </div>
                </Flex>
              }
            />
          );
        }}
        noResults={<MenuItem disabled text="No results." />}
      >
        <InputGroup
          type="search"
          leftIconName={IconClasses.SEARCH}
          onChange={event =>
            this.setState({
              query: event.target.value,
            })}
          placeholder="..."
          rightElement={
            this.state.query &&
            <AnchorButton
              className={Classes.MINIMAL}
              iconName={IconClasses.CROSS}
              onClick={() => this.setState({ query: '' })}
            />
          }
          value={this.state.query}
        />
      </Select>
    );
  }
}

export default Autocomplete;
