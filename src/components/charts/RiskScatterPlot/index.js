import React from 'react';

import { ScatterPlot } from '@nivo/scatterplot';
import { Grid, Typography } from '@material-ui/core';

import { commonProps } from './RiskScatterPlot.styles';

import AreaLayer from '../AreaLayer';
import LineLayer from '../LineLayer';

const RiskScatterPlot = ({ data }) => (
  <ScatterPlot
    {...commonProps}
    data={data}
    legends={[]}
    layers={['grid', 'axes', AreaLayer, 'nodes', LineLayer]}
  />
);

const createRiskList = (data) =>
  Object.keys(data).map((id) => (
    <Grid
      container
      alignItems="center"
      direction="column"
      item
      key={id}
      lg={3}
      xs
    >
      <Typography variant="h6">{id}</Typography>
      <RiskScatterPlot data={[{ id, data: data[id] }]} />
    </Grid>
  ));

export default RiskScatterPlot;
export { createRiskList };
