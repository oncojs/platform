/* @flow */

import * as React from 'react';

import Aggregation from './Aggregation';
import FieldSelect from '../core/FieldSelect';
import Label from '../ui/Label';

type Props = {|
  title: string,
  fields: Function,
|};

const Facets = (props: Props) =>
  <Aggregation title={props.title}>
    {state =>
      <div>
        <Label>
          <span
            style={{ color: '#999', marginRight: '.5rem' }}
            className="pt-icon pt-icon-horizontal-bar-chart"
          />Row faceting
          <div style={{ margin: '.75rem 0 1rem 0' }}>
            <FieldSelect items={props.fields} />
          </div>
        </Label>
        <Label>
          <span
            style={{ color: '#999', marginRight: '.5rem' }}
            className="pt-icon pt-icon-timeline-bar-chart"
          />Column faceting
          <div style={{ margin: '.75rem 0 1rem 0' }}>
            <FieldSelect items={props.fields} />
          </div>
        </Label>
      </div>}
  </Aggregation>;

export default Facets;
