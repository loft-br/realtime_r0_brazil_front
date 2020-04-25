import React from 'react';
import { ScatterPlot } from '@nivo/scatterplot';

import { formatDate } from 'utils';

import {
  AreaLayerNegative,
  AreaLayerPositive,
} from 'components/charts/AreaLayer';
import LineLayer from 'components/charts/LineLayer';
import TooltipScatter from './TooltipScatter';

const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 30, bottom: 10, left: 10 },
  nodeSize: 5,
  blendMode: 'normal',
  yScale: {
    type: 'linear',
    max: 5,
  },
  xScale: { type: 'time' },
  yFormat: (d) => d.toFixed(2),
  enableGridX: false,
  axisBottom: null,
  axisTop: null,
  axisLeft: null,
  axisRight: {
    orient: 'left',
    tickSize: 5,
    tickValues: 5,
    tickPadding: 5,
    tickRotation: 0,
    format: (d) => d.toFixed(1),
  },
  legends: [
    {
      anchor: 'bottom-right',
      direction: 'row',
      translateY: 60,
      itemWidth: 130,
      itemHeight: 12,
      symbolSize: 12,
      symbolShape: 'circle',
    },
  ],
  colors: '#E17272',
  layers: [
    AreaLayerPositive,
    AreaLayerNegative,
    'grid',
    'axes',
    'nodes',
    LineLayer,
    'mesh',
  ],
  useMesh: true,
  xFormat: formatDate,
};

const RiskScatterPlot = ({ data }) => (
  <ScatterPlot
    {...commonProps}
    data={data}
    tooltip={({ node }) => <TooltipScatter data={node?.data} />}
  />
);

export default RiskScatterPlot;
