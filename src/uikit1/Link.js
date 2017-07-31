/* @flow */

import styled from 'styled-components';

import theme from './theme';

const Link = styled.a`
  color: ${theme.lightBlue};
  :hover {
    color: ${theme.darkBlue};
  }
  :focus {
    color: ${theme.darkBlue};
  }
  :visited {
    color: ${theme.purple};
  }
`;

export default Link;
