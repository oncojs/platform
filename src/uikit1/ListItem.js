/* @flow */

import styled from 'styled-components';
import { List } from 'semantic-ui-react';

import theme from './theme';

const ListItem = styled(List.Item)`
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  line-height: 1;
  font-family: ${theme.monospacedFont};
  padding: 4px 8px;

  &:after {
    content: "";
    background-color: #3d9970;
  }
`;

export default ListItem;
