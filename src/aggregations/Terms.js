/* @flow */

import * as React from 'react';

import Aggregation from './Aggregation';
import HistogramListItem from '../core/HistogramListItem';
import SearchedHistogramListItem from '../core/SearchedHistogramListItem';

type Props = {|
  title: string,
  searched: Function,
  searchedCompFn: Function,
  buckets: Function,
  bucketsCompFn: Function,
|};

const searchedCompFn = b =>
  <SearchedHistogramListItem data={b} total={593532} />;
const bucketsCompFn = b => <HistogramListItem data={b} total={593532} />;

const Terms = (props: Props) => {
  const showSearch = props.buckets && props.buckets.length > 2;
  const showReset = props.searched && props.searched.length > 0;

  return (
    <Aggregation
      title={props.title}
      showSearch={showSearch}
      showReset={showReset}
      searchedValues={state => (props.searched || []).map(searchedCompFn)}
    >
      {state =>
        props.buckets
          .filter(
            b =>
              state.query === '' || b.key.toLowerCase().includes(state.query),
          )
          .map(bucketsCompFn)}
    </Aggregation>
  );
};
export default Terms;
