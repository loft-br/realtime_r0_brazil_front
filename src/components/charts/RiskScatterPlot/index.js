import React from 'react';

import { ScatterPlot } from '@nivo/scatterplot';
import { Grid, Typography } from '@material-ui/core';

import AreaLayer from '../AreaLayer';

const commonProps = {
  width: 300,
  height: 200,
  margin: { top: 10, right: 10, bottom: 25, left: 20 },
  nodeSize: 5,
  blendMode: 'multiply',
  yScale: {
    type: 'linear',
    max: 5,
  },
  xFormat: (d) => d,
  yFormat: (d) => d,
  enableGridX: false,
  axisBottom: {
    tickValues: 5,
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 90,
    format: (d) => d,
  },
  axisLeft: {
    orient: 'left',
    tickSize: 5,
    tickValues: 5,
    tickPadding: 5,
    tickRotation: 0,
    format: (d) => d,
  },
  legends: [
    {
      anchor: 'bottom-left',
      direction: 'row',
      translateY: 60,
      itemWidth: 130,
      itemHeight: 12,
      symbolSize: 12,
      symbolShape: 'circle',
    },
  ],
  colors: '#ff774a',
};

const RiskScatterPlot = ({ data }) => (
  <ScatterPlot
    {...commonProps}
    data={data}
    legends={[]}
    layers={['grid', 'axes', AreaLayer, 'nodes', 'markers', 'mesh', 'legends']}
  />
);

const createRiskList = (data) =>
  Object.keys(data).map((id) => (
    <Grid
      alignItems="center"
      justify="center"
      container
      direction="column"
      item
      key={id}
      lg={3}
      xs
    >
      <Typography variant="h5">{id}</Typography>
      <RiskScatterPlot data={[{ id, data: data[id] }]} />
    </Grid>
  ));

export default RiskScatterPlot;
export { createRiskList };
