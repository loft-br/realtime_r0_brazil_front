import React, { memo, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';

import {
  BRAZIL_STATES,
  getLastRtValue,
  formatListData,
  formatNewCasesData,
  formatSmoothedCasesData,
} from 'utils';

import { CasesLine, RiskScatterPlot } from 'components/charts';

import useStyles from './RiskList.styles';

const butonLabel = {
  cases: 'Ver Rt',
  rt: 'Ver casos',
};

const RiskList = ({ data: content }) => {
  const rtData = formatListData(content);
  const newCases = formatNewCasesData(content);
  const smoothedCases = formatSmoothedCasesData(content);

  return (
    <>
      {Object.keys(rtData).map((id) => (
        <Grid
          container
          alignItems="center"
          direction="column"
          item
          key={id}
          lg={3}
          xs
        >
          <BoxChart
            newCases={newCases}
            smoothedCases={smoothedCases}
            rtData={rtData}
            id={id}
          />
        </Grid>
      ))}
    </>
  );
};

const BoxChart = ({ newCases, smoothedCases, rtData, id }) => {
  const classes = useStyles();
  const [chartActive, setChartActive] = useState('rt');
  const handleClick = () =>
    setChartActive(chartActive === 'rt' ? 'cases' : 'rt');

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h6">{BRAZIL_STATES[id]}</Typography>
        <Button size="small" onClick={handleClick}>
          {butonLabel[chartActive] || ''}
        </Button>
        <Typography
          variant="h6"
          color={getLastRtValue(rtData, id) < 1 ? 'secondary' : 'error'}
        >
          <strong>{getLastRtValue(rtData, id)}</strong>
        </Typography>
      </header>
      {chartActive === 'rt' ? (
        <RiskScatterPlot data={[{ id, data: rtData[id] }]} />
      ) : (
        <CasesLine
          data={[
            { id: 'confirmados', data: newCases[id] },
            { id: 'previstos', data: smoothedCases[id] },
          ]}
        />
      )}
    </div>
  );
};

export default memo(RiskList);
