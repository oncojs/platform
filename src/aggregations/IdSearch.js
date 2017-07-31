/* @flow */

import * as classNames from 'classnames';
import * as React from 'react';
import { Button, MenuItem, Position, Classes, Text } from '@blueprintjs/core';
import { Select } from '@blueprintjs/labs';
import { Flex } from 'grid-styled';

import Aggregation from './Aggregation';
import SearchedListItem from '../core/SearchedListItem';
import UploadIds from '../core/UploadIds';
import Autocomplete from '../core/Autocomplete';

type Props = {|
  title: string,
  searched: Function,
  searchedCompFn: Function,
  buckets: Function,
  bucketsCompFn: Function,
|};

const searchedCompFn = b => <SearchedListItem value={b} />;

const IdSearch = (props: Props) => {
  const showReset = props.searched && props.searched.length > 0;

  return (
    <Aggregation
      title={props.title}
      showReset={showReset}
      showSearch={true}
      searchedValues={state => (props.searched || []).map(searchedCompFn)}
    >
      {state =>
        <div>
          <Autocomplete />
          <div className="pt-control-group" style={{ marginTop: '1rem' }}>
            <div className="pt-button-group pt-fill">
              <UploadIds />
              <Select
                filterable={true}
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
                ]}
                itemPredicate={(query: string, item: any) => {
                  return (
                    item.key.toLowerCase().indexOf(query.toLowerCase()) >= 0
                  );
                }}
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
                        <Flex
                          justify="space-between"
                          style={{ maxWidth: '270px' }}
                        >
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
                popoverProps={{ position: Position.BOTTOM_RIGHT }}
              >
                <Button rightIconName="caret-down" text="Add Set" />
              </Select>
            </div>
          </div>
        </div>}
    </Aggregation>
  );
};
export default IdSearch;
