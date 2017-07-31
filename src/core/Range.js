/* @flow */

import React, { Component } from 'react';
import { AnchorButton, Intent, NumericInput } from '@blueprintjs/core';

import Label from '../ui/Label';

type Props = {|
  min: number,
  max: number,
|};

type State = {|
  range: Array<number>,
|};

class Range extends Component<void, Props, State> {
  state: State;

  constructor(props) {
    super();

    this.state = {
      range: [props.min || 0, props.max || 100],
    };
  }

  handleValueChange = range => this.setState({ range });
  handleFromValueChange = (number, min) => {
    if (isNaN(number)) return;
    this.setState({
      range: [Math.max(number, min), this.state.range[1]],
    });
  };
  handleToValueChange = (number, max) => {
    if (isNaN(number)) return;
    this.setState({
      range: [this.state.range[0], Math.min(number, max)],
    });
  };
  render() {
    const props = this.props;

    return (
      <div>
        <div className="pt-control-group" style={{ alignItems: 'flex-end' }}>
          <Label>
            From
            <NumericInput
              placeholder="From"
              leftIconName="numerical"
              min={props.min}
              max={props.max}
              value={this.state.range[0]}
              clampValueOnBlur
              buttonPosition="none"
              onValueChange={n => this.handleFromValueChange(n, props.min)}
            />
          </Label>
          <Label>
            To
            <NumericInput
              placeholder="To"
              leftIconName="numerical"
              min={props.min}
              max={props.max}
              value={this.state.range[1]}
              clampValueOnBlur
              buttonPosition="none"
              onValueChange={n => this.handleToValueChange(n, props.max)}
            />
          </Label>

          <AnchorButton
            intent={Intent.PRIMARY}
            className="pt-minimal"
            text="Add"
          />
        </div>
      </div>
    );
  }
}
export default Range;
