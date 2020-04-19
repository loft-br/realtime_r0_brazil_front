import React from 'react';
import { ResponsiveBar } from '@nivo/bar';
// import AreaLayer from '../AreaLayer';

const RiskBar = ({ data, width }) => (
  <ResponsiveBar
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
    layers={['grid', 'axes', 'bars', 'markers', 'legends']}
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default RiskBar;
