/* @flow */

import * as React from 'react';

import Aggregation from './Aggregation';
import Range from '../core/Range';
import SearchedListItem from '../core/SearchedListItem';

type Props = {|
  title: string,
  searched: Function,
  searchedCompFn: Function,
  min: number,
  max: number,
|};

const searchedCompFn = b => <SearchedListItem value={b} />;

const RangeAggregation = (props: Props) => {
  const showReset = props.searched && props.searched.length > 0;

  return (
    <Aggregation
      title={props.title}
      showReset={showReset}
      searchedValues={state => (props.searched || []).map(searchedCompFn)}
    >
      {state => <Range min={props.min} max={props.max} />}
    </Aggregation>
  );
};

export default RangeAggregation;
