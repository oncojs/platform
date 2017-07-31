import * as classNames from 'classnames';
import * as React from 'react';
import { Flex } from 'grid-styled';
import { Classes, MenuItem } from '@blueprintjs/core';

const FieldDropdownItem = ({ handleClick, isActive, item }) => {
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
        <Flex column>
          <Flex justify="space-between">
            <div style={{ fontWeight: 600 }}>
              {item.field}
            </div>
            <div
              style={{
                marginLeft: '.5rem',
                fontStyle: 'italic',
              }}
            >
              {item.type}
            </div>
          </Flex>
          <div
            style={{
              margin: '.75rem .25rem 0',
              fontStyle: 'italic',
            }}
          >
            {item.description}
          </div>
        </Flex>
      }
    />
  );
};

export default FieldDropdownItem;
