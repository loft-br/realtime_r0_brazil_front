import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const RiskBar = ({ data }) => (
  <ResponsiveBar
    data={data}
    keys={['y']}
    maxValue={3}
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
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default RiskBar;
