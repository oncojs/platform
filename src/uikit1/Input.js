/* @flow */

import styled from 'styled-components';

import theme from './theme';

const Input = styled.input`
  background: none;
  border: none;
  font-family: ${theme.font};
  font-size: 14px;
  line-height: 27px;
  color: ${theme.grey3};
  width: 100%;
  padding: 1px 28px 0;
  border-radius: 4px;
  transition: box-shadow .2s;
  position: relative;
  box-sizing: border-box;

  :focus {
    outline: none;
    box-shadow: 0 0 0 0.5px rgba(50, 151, 211, .2),
      0 0 0 2px rgba(50, 151, 211, .25), 0 0.5px 1px rgba(0, 0, 0, .08);
  }
`;

export default Input;
