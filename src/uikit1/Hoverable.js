/* @flow */

import { Box } from 'grid-styled';
import styled from 'styled-components';

import theme from './theme';

const Hoverable = styled(Box)`
  cursor: pointer;
  transition: color .2s ease-out;
  :hover {
    color: ${theme.orange};
  }
`;

export default Hoverable;
