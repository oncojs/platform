/* @flow */

import React from 'react';
import { Intent } from '@blueprintjs/core';

import ListItem from './ListItem';
import SparkProgress from './SparkProgress';

type Term = { key: string, doc_count: number };
type Props = {
  data: Term,
  total: number,
  url: string,
};

const HistogramListItem = ({ data, total, url }: Props) =>
  <ListItem value={data.key}>
    <SparkProgress value={data.doc_count} total={total} intent={Intent.NONE} />
  </ListItem>;

export default HistogramListItem;
