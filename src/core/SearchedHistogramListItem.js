/* @flow */

import * as React from 'react';
import { Intent } from '@blueprintjs/core';

import SearchedListItem from './SearchedListItem';
import SparkProgress from './SparkProgress';

type Term = { key: string, doc_count: number };
type Props = {
  data: Term,
  total: number,
  url: string,
};

const SearchedHistogramListItem = ({ data, total, url }: Props) =>
  <SearchedListItem value={data.key}>
    <SparkProgress
      value={data.doc_count}
      total={total}
      intent={Intent.PRIMARY}
    />
  </SearchedListItem>;

export default SearchedHistogramListItem;
