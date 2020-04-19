import React, { Fragment } from 'react';
import { area, curveMonotoneX } from 'd3-shape';
import { ScatterPlot } from '@nivo/scatterplot';
import { Grid, Typography } from '@material-ui/core';

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

const AreaLayer = ({ nodes, xScale, yScale }) => {
  const areaGenerator = area()
    .x((d) => xScale(d.data.x))
    .y0((d) => yScale(d.data.low))
    .y1((d) => yScale(d.data.high))
    .curve(curveMonotoneX);

  return <path d={areaGenerator(nodes)} fill="rgba(255, 119, 74, 0.2)" />;
};

const RiskScatterPlot = ({ info }) => (
  <ScatterPlot
    {...commonProps}
    data={[
      {
        id: info.key,
        data: info.data,
      },
    ]}
    legends={[]}
    layers={['grid', 'axes', AreaLayer, 'nodes', 'markers', 'mesh', 'legends']}
  />
);

const createRiskList = (data) =>
  Object.keys(data).map((key) => (
    <Grid
      alignItems="center"
      justifyContent="center"
      container
      direction="column"
      item
      key={key}
      lg={3}
      xs
    >
      <Typography variant="h5">{key}</Typography>
      <RiskScatterPlot info={{ key, data: data[key] }} />
    </Grid>
  ));

export { RiskScatterPlot, createRiskList };
