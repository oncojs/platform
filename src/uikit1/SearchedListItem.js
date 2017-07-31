/* @flow */

import { lighten } from 'polished';

import theme from './theme';
import ListItem from './ListItem';

const SearchedListItem = ListItem.extend`
  background-color: ${lighten(0.6, theme.purple)};
`;

export default SearchedListItem;
