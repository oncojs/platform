/* @flow */

import { Box } from 'grid-styled';

const SparkBar = Box.extend`
  font-size: .8em;
  line-height: 1;
  text-transform: uppercase;

  height: 9px;

  background: repeating-linear-gradient(
    to right,
    #ddd,
    #ddd 1px,
    #fff 1px,
    #fff 5%
  );

  &:after {
    content: "";
    display: block;
    background-color: #3d9970;
    width: 50%;
    margin-bottom: 10px;
    height: 90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .3s ease;
    cursor: pointer;
  }
  &:hover,
  &:focus {
    &:after {
      background-color: #aaa;
    }
  }
`;

export default SparkBar;
