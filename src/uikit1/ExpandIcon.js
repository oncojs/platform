/* @flow */

import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

import theme from './theme';

const ExpandIcon = styled(props =>
  <Icon
    {...(props.open ? {} : { rotated: 'counterclockwise' })}
    name="angle down"
    {...props}
  />,
)`
  transition-duration: 0.2s
`;

export default ExpandIcon;
