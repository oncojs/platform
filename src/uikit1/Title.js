/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';

import theme from './theme';

const Title = styled(({ children, ...props }) =>
  <Header sub {...props}>
    {children}
  </Header>,
)`
  // flex-direction: 'row';
  // text-decoration: none;
  // font-family: ${theme.sansSerifFont};
  // font-size: 16px;
  // background: transparent;
  // cursor: pointer;
  // text-transform: uppercase;
  // letter-spacing: .025em;
  // overflow: hidden;
  // white-space: nowrap;
  // text-overflow: ellipsis;
`;

export default Title;
