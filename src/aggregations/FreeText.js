/* @flow */

import React from 'react';

import Aggregation from './Aggregation';
import SearchedListItem from '../core/SearchedListItem';
import Text from '../core/Text';

type Props = {|
  title: string,
  searched: Function,
  searchedCompFn: Function,
|};

const searchedCompFn = b => <SearchedListItem value={b} />;

const FreeText = (props: Props) => {
  const showReset = props.searched && props.searched.length > 0;

  return (
    <Aggregation
      title={props.title}
      showReset={showReset}
      searchedValues={state => (props.searched || []).map(searchedCompFn)}
    >
      {state => <Text />}
    </Aggregation>
  );
};

export default FreeText;
