import React from 'react';

import { Typography, Paper } from '@material-ui/core';
import { formatDate } from 'utils';

import useStyles from './TooltipDeathsLine.styles';

const TooltipDeathsLine = ({ data = {} }) => {
  const classes = useStyles();
  const daysAvg = 7;

  return (
    <Paper variant="outlined" elevation={3} className={classes.root}>
      <Typography variant="caption">
        <strong>Dia {formatDate(data?.date)}</strong>
      </Typography>
      <br />
      <Typography variant="caption">
        Novos óbitos: <strong>{data?.y}</strong>
      </Typography>
      <br />
      <Typography variant="caption">
        Média óbitos ({daysAvg}d):{' '}
        <strong>{(data?.y / daysAvg).toFixed(1)}</strong>
      </Typography>
    </Paper>
  );
};

export default TooltipDeathsLine;
