import React from 'react';

import { ScatterPlot } from '@nivo/scatterplot';
import { Grid, Typography } from '@material-ui/core';

import { commonProps } from './RiskScatterPlot.styles';

import { BRAZIL_STATES, getLastRtValue } from '../../../utils';

import { AreaLayerNegative, AreaLayerPositive } from '../AreaLayer';
import LineLayer from '../LineLayer';
import Tooltip from '../Tooltip';

import useStyles from './RiskScatterPlot.styles';

const RiskScatterPlot = ({ data }) => {
  return (
    <ScatterPlot
      {...commonProps}
      data={data}
      tooltip={Tooltip}
      legends={[]}
<<<<<<< HEAD
=======
      xFormat={(d) =>
        `${('0' + d.getDate()).slice(-2)}/${('0' + (d.getMonth() + 1)).slice(
          -2
        )}/${d.getFullYear()}`
      }
      yFormat={(d) => d}
>>>>>>> add: tooltip
      layers={[
        AreaLayerPositive,
        AreaLayerNegative,
        'grid',
        'axes',
        'nodes',
        LineLayer,
      ]}
    />
  );
};

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
