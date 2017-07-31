/* @flow */

import styled from 'styled-components';
import { Flex } from 'grid-styled';

import theme from './theme';

const ListItemCount = styled(Flex)`
  color: ${theme.grey4};
  margin: 0 4px;

  &:after {
    content: "",
    background: red;
    width: ${props => props.count}px;
    height: 10px;
  }
`;

export default ListItemCount;
