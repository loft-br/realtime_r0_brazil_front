import React from 'react';
import { Line } from '@nivo/line';

import TooltipCaseLine from './TooltipCaseLine';

const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 30, bottom: 10, left: 10 },
  animate: true,
  enableSlices: 'x',
  axisBottom: null,
  axisTop: null,
  axisLeft: null,
  axisRight: {
    orient: 'left',
    tickSize: 5,
    tickValues: 5,
    tickPadding: 5,
    tickRotation: 0,
  },
};

const RiskScatterPlot = ({ data }) => (
  <Line
    {...commonProps}
    data={data}
    curve="monotoneX"
    xScale={{
      type: 'time',
    }}
    yScale={{
      type: 'linear',
      min: 0,
    }}
    useMesh
    layers={[
      'grid',
      'axes',
      'markers',
      'areas',
      'lines',
      'points',
      'mesh',
      'slices',
    ]}
    colors={['#aaa', '#19857b']}
    tooltip={({ point }) => <TooltipCaseLine data={point?.data} />}
  />
);

export default RiskScatterPlot;
