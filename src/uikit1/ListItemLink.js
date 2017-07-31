/* @flow */

import styled from 'styled-components';

import Link from './Link';

const ListItemLink = styled(Link)`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-decoration: none;
`;

export default ListItemLink;
