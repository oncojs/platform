/* @flow */

import React from 'react';
import { AnchorButton, Intent } from '@blueprintjs/core';
import { DateInput } from '@blueprintjs/datetime';

import Aggregation from './Aggregation';
import SearchedListItem from '../core/SearchedListItem';

type Props = {|
  title: string,
  searched: Function,
  searchedCompFn: Function,
|};

const searchedCompFn = b => <SearchedListItem value={b} />;

const DateSelect = (props: Props) => {
  const showReset = props.searched && props.searched.length > 0;

  return (
    <Aggregation
      title={props.title}
      showReset={showReset}
      searchedValues={state => (props.searched || []).map(searchedCompFn)}
    >
      {state =>
        <div className="pt-control-group">
          <DateInput
            popoverProps={{ className: 'pt-fill' }}
            rightElement={<span className="pt-icon pt-icon-calendar" />}
          />
          <AnchorButton
            intent={Intent.PRIMARY}
            className="pt-minimal"
            text="Add"
          />
        </div>}
    </Aggregation>
  );
};
export default DateSelect;
