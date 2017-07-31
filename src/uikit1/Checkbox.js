/* @flow */

import styled from 'styled-components';

import theme from './theme';

const Checkbox = styled.input.attrs({
  type: 'checkbox',
})`
  &:checked {
    border-radius: 4px;
    position: relative;
    box-sizing: border-box;

  }
`;

export default Checkbox;
