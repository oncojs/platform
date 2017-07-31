/* @flow */

import React, { Component } from 'react';
import {
  AnchorButton,
  Intent,
  InputGroup,
  Classes,
  IconClasses,
} from '@blueprintjs/core';

type Props = {};

type State = {| query: string |};

class FreeText extends Component<void, Props, State> {
  state: State = { query: '' };
  render() {
    return (
      <div className={Classes.CONTROL_GROUP}>
        <InputGroup
          className={Classes.FILL}
          autoFocus={true}
          leftIconName={IconClasses.ANNOTATION}
          onChange={event =>
            this.setState({
              query: event.target.value,
            })}
          placeholder="Filter..."
          rightElement={
            this.state.query &&
            <AnchorButton
              className={Classes.MINIMAL}
              iconName={IconClasses.CROSS}
              onClick={() => this.setState({ query: '' })}
            />
          }
          value={this.state.query}
        />
        <AnchorButton
          intent={Intent.PRIMARY}
          className={Classes.MINIMAL}
          text="Add"
        />
      </div>
    );
  }
}
export default FreeText;
