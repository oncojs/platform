/* @flow */

import * as React from 'react';
import { Flex } from 'grid-styled';
import { ProgressBar } from '@blueprintjs/core';

type Props = {
  value: number,
  total?: number,
  intent: string,
};

const HistogramListItem = ({ value, total, intent }: Props) =>
  <Flex style={{ alignItems: 'center', marginLeft: '0.25rem' }}>
    <span style={{ fontSize: '1rem', fontFamily: 'monospace' }}>
      {value}
    </span>

    {total &&
      <div style={{ marginLeft: '.5rem', width: '2rem' }}>
        <ProgressBar
          className="pt-no-stripes pt-no-animation"
          intent={intent}
          value={value / total}
        />
      </div>}
  </Flex>;

export default HistogramListItem;
