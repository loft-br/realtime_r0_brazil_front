import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import { BRAZIL_STATES, getLastRtValue } from '../../../utils';

import RiskScatterPlot from '../RiskScatterPlot';

import useStyles from './RiskList.styles';

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

export default RiskList;
