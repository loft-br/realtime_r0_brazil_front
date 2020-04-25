import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import Rt from 'components/Rt';
import Thumb from 'components/Thumb';

import useStyles from './Tooltip.styles';

const RED = '#f9e7e7';
const GREEN = '#c3f5c3';

const Tooltip = ({ children, data = {} }) => {
  const classes = useStyles();
  const getColor = (number) => (number < 1 ? GREEN : RED);

  return (
    <Paper variant="outlined" elevation={3} className={classes.root}>
      {children}
      <br />
      <Typography variant="caption">
        <Rt />: {data?.formattedY || data?.y}
      </Typography>
      <br />
      <Typography variant="caption">
        High: <Thumb color={getColor(data?.high)} /> {data?.high}
      </Typography>
      <br />
      <Typography variant="caption">
        Low: <Thumb color={getColor(data?.low)} /> {data?.low}
      </Typography>
    </Paper>
  );
};

export default Tooltip;
