/* @flow */

import { Flex } from 'grid-styled';

import theme from './theme';

const Header = Flex.extend`
  justify-content: space-between;


  color: ${theme.grey3};
`;

export default Header;
