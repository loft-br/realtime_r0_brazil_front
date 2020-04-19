import React from 'react';
import { Bar } from '@nivo/bar';
// import AreaLayer from '../AreaLayer';

const RiskBar = ({ data, width }) => (
  <Bar
    width={width || 500}
    height={400}
    data={data}
    keys={['y']}
    maxValue={4}
    padding={0.6}
    margin={{
      top: 10,
      right: 10,
      bottom: 36,
      left: 36,
    }}
    indexBy="id"
    enableLabel={false}
    colors={['#ff774a']}
    layers={['grid', 'axes', 'bars' /* AreaLayer */, , 'markers', 'legends']}
  />
);

export default RiskBar;
