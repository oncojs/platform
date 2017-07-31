/* @flow */

import React, { Component } from 'react';
import { Text, AnchorButton } from '@blueprintjs/core';

import ListItem from '../ui/ListItem';

type Term = { key: string, doc_count: number };
type Props = {
  data: Term,
  total: number,
  hoverIcon: string,
  defaultIcon: string,
};
type State = { hover: boolean };

class TermItem extends Component<void, Props, State> {
  state: State = { hover: false };
  hoverOn = () => {
    this.setState({ hover: true });
  };
  hoverOff = () => {
    this.setState({ hover: false });
  };
  render() {
    const {
      value,
      intent,
      hoverIntent,
      url,
      hoverIcon = 'small-plus',
      defaultIcon = 'blank',
    } = this.props;
    const { hover } = this.state;
    return (
      <ListItem>
        <Text ellipsize={true}>
          <AnchorButton
            href={url}
            intent={hover ? hoverIntent : intent}
            iconName={hover ? hoverIcon : defaultIcon}
            className="pt-icon pt-minimal"
            onMouseOver={this.hoverOn}
            onMouseLeave={this.hoverOff}
            text={value}
          />
        </Text>
        {this.props.children}
      </ListItem>
    );
  }
}
export default TermItem;
