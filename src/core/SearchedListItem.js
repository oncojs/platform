/* @flow */

import * as React from 'react';
import { Intent } from '@blueprintjs/core';

import ListItem from './ListItem';

type Term = { key: string, doc_count: number };
type Props = {
  value: Term,
  url: number,
};

const SearchedListItem = ({ value, url, ...props }: Props) =>
  <ListItem
    value={value}
    intent={Intent.PRIMARY}
    hoverIntent={Intent.DANGER}
    defaultIcon="small-tick"
    hoverIcon="small-minus"
    {...props}
  />;

export default SearchedListItem;
