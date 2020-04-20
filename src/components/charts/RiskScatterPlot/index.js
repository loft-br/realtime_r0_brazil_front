import React from 'react';

import { ScatterPlot } from '@nivo/scatterplot';
import { Grid, Typography } from '@material-ui/core';

import { commonProps } from './RiskScatterPlot.styles';

import AreaLayer from '../AreaLayer';
import LineLayer from '../LineLayer';

import { BRAZIL_STATES, getLastRtValue } from '../../../utils';

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
      <header
        style={{
          display: 'flex',
          flex: 1,
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h6">{BRAZIL_STATES[id]}</Typography>
        <Typography
          variant="h6"
          color={getLastRtValue(data, id) >= 1 ? 'secondary' : 'error'}
        >
          <strong>{getLastRtValue(data, id)}</strong>
        </Typography>
      </header>
      <RiskScatterPlot data={[{ id, data: data[id] }]} />
    </Grid>
  ));

export default RiskScatterPlot;
export { createRiskList };
