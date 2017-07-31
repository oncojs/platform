/* @flow */

import React, { Component } from 'react';

import { Flex } from 'grid-styled';

import {
  Text,
  AnchorButton,
  Button,
  Collapse,
  Tooltip,
} from '@blueprintjs/core';

import theme from '../ui/theme';

type Props = {|
  title: string,
  open?: boolean,
  showSearch?: boolean,
  showReset?: boolean,
  searchedValues?: Function,
  children: Function,
|};
type State = {| query: string, open: boolean, searching: boolean |};

class Aggregation extends Component<void, Props, State> {
  state: State;

  constructor(props: Props) {
    super();

    this.state = {
      query: '',
      open: props.hasOwnProperty('open') ? props.open : true,
      searching: false,
    };
  }

  render() {
    return (
      <Flex style={{ flexDirection: 'column' }}>
        <Flex
          style={{
            justifyContent: 'space-between',
            color: theme.grey3,
            padding: '1rem 0',
          }}
        >
          <Text ellipsize={true}>
            <AnchorButton
              className="pt-minimal"
              style={{ textTransform: 'uppercase' }}
              iconName={`pt-icon-chevron-${this.state.open ? 'down' : 'right'}`}
              text={this.props.title}
              onClick={() =>
                this.setState(prevState => ({
                  open: !prevState.open,
                }))}
            />
          </Text>
          <div className="pt-button-group pt-minimal">
            {this.props.showReset &&
              <Tooltip hoverOpenDelay={700} content="Reset Query">
                <AnchorButton iconName="undo" />
              </Tooltip>}
            {this.props.showSearch &&
              <Tooltip hoverOpenDelay={700} content="Filter values">
                <Button
                  active={this.state.searching}
                  onClick={event =>
                    this.setState({
                      searching: !this.state.searching,
                    })}
                  iconName="filter"
                />
              </Tooltip>}
          </div>
        </Flex>
        {this.state.searching &&
          this.state.open &&
          <Flex
            style={{
              justifyContent: 'space-between',
              color: theme.grey3,
            }}
          >
            <div
              className="pt-input-group"
              style={{ display: 'flex', flex: 1, marginBottom: '1rem' }}
            >
              <span className="pt-icon pt-icon-filter-list" />
              <input
                className="pt-input pt-fill"
                autoFocus
                value={this.state.query}
                placeholder="Filter value..."
                onChange={event =>
                  this.setState({
                    query: event.target.value,
                  })}
                type="search"
                dir="auto"
              />
              {this.state.query &&
                this.state.query.length &&
                <button
                  onClick={event =>
                    this.setState({
                      query: '',
                    })}
                  type="button"
                  style={{ borderRadius: '25px' }}
                  className="pt-button pt-minimal pt-icon-cross"
                />}
            </div>
          </Flex>}
        {this.props.showReset && this.props.searchedValues(this.state)}
        <Collapse isOpen={this.state.open}>
          {this.state.open && this.props.children(this.state)}
        </Collapse>
      </Flex>
    );
  }
}

export default Aggregation;
