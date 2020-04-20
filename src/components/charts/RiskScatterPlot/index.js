import React from 'react';

import { ScatterPlot } from '@nivo/scatterplot';
import { Grid, Typography } from '@material-ui/core';

import { commonProps } from './RiskScatterPlot.styles';

import { BRAZIL_STATES, getLastRtValue } from '../../../utils';

import { AreaLayer, AreaLayerNegative, AreaLayerPositive } from '../AreaLayer';
import LineLayer from '../LineLayer';

import useStyles from './RiskScatterPlot.styles';

const RiskScatterPlot = ({ data }) => (
  <ScatterPlot
    {...commonProps}
    data={data}
    legends={[]}
    layers={[
      AreaLayerPositive,
      AreaLayerNegative,
      // AreaLayer,
      'grid',
      'axes',
      'nodes',
      LineLayer,
    ]}
  />
);

const RiskList = ({ data }) => {
  const classes = useStyles();

  return (
    <>
      {Object.keys(data).map((id) => (
        <Grid
          container
          alignItems="center"
          direction="column"
          item
          key={id}
          lg={3}
          xs
        >
          <header className={classes.header}>
            <Typography variant="h6">{BRAZIL_STATES[id]}</Typography>
            <Typography
              variant="h6"
              color={getLastRtValue(data, id) < 1 ? 'secondary' : 'error'}
            >
              <strong>{getLastRtValue(data, id)}</strong>
            </Typography>
          </header>
          <RiskScatterPlot data={[{ id, data: data[id] }]} />
        </Grid>
      ))}
    </>
  );
};

export default RiskScatterPlot;
export { RiskList };
