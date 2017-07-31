/* @flow */

import styled from 'styled-components';

const SearchInputListItem = styled.div`
  background: #f6f9fc;
  border-radius: 4px;
  position: relative;

  :before {
    content: '';
    position: absolute;
    left: 10px;
    top: 8px;
    background: purple;
    pointer-events: none;
  }
`;

export default SearchInputListItem;
