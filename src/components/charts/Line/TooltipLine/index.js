import React from 'react';

import { Typography } from '@material-ui/core';
import { BRAZIL_STATES } from 'utils';
import Tooltip from 'components/charts/Tooltip';

const TooltipLine = ({ data }) => (
  <Tooltip data={data}>
    <Typography variant="caption">
      <strong>{BRAZIL_STATES[data?.state]}</strong>
    </Typography>
  </Tooltip>
);

export default TooltipLine;
