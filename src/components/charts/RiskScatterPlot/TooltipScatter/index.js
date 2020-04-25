import React from 'react';

import { Typography } from '@material-ui/core';
import { formatDate } from 'utils';
import Tooltip from 'components/charts/Tooltip';

const TooltipScatter = ({ data }) => (
  <Tooltip data={data}>
    <Typography variant="caption">
      <strong>Dia {formatDate(data?.date)}</strong>
    </Typography>
  </Tooltip>
);

export default TooltipScatter;
