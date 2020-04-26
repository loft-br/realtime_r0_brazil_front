import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import { formatDate } from 'utils';

import useStyles from './TooltipCaseLine.styles';

const TooltipCaseLine = ({ data = {} }) => {
  const classes = useStyles();
  const daysAvg = 7;

  return (
    <Paper variant="outlined" elevation={3} className={classes.root}>
      <Typography variant="caption">
        <strong>Dia {formatDate(data?.date)}</strong>
      </Typography>
      <br />
      <Typography variant="caption">
        Novos casos: <strong>{data?.newCases ?? data?.y}</strong>
      </Typography>
      <br />
      <Typography variant="caption">
        Média móvel ({daysAvg}d):{' '}
        <strong>{data?.smoothedCases ?? data?.y}</strong>
      </Typography>
    </Paper>
  );
};

export default TooltipCaseLine;
