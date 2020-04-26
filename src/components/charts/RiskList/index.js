import React, { memo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import {
  BRAZIL_STATES,
  getLastRtValue,
  formatListData,
  formatNewCasesData,
  formatNewDeathsData,
  formatSmoothedCasesData,
  formatSmoothedDeathsData,
} from 'utils';

import { CasesLine, DeathsLine, RiskScatterPlot } from 'components/charts';
import StickyButtonGroup from 'components/StickyButtonGroup';

import useStyles from './RiskList.styles';

const RiskList = ({ data: content }) => {
  const classes = useStyles();
  const rtData = formatListData(content);
  const newCases = formatNewCasesData(content);
  const smoothedCases = formatSmoothedCasesData(content);
  const newDeaths = formatNewDeathsData(content);
  const smoothedDeaths = formatSmoothedDeathsData(content);

  const [chartActive, setChartActive] = useState('rt');
  const handleClick = (value) => setChartActive(value);

  return (
    <>
      <StickyButtonGroup chartActive={chartActive} onClick={handleClick} />
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={4}
      >
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
              chartActive={chartActive}
              newCases={newCases}
              newDeaths={newDeaths}
              smoothedCases={smoothedCases}
              smoothedDeaths={smoothedDeaths}
              rtData={rtData}
              id={id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const BoxChart = ({
  chartActive,
  id,
  newCases,
  newDeaths,
  rtData,
  smoothedCases,
  smoothedDeaths,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h6">{BRAZIL_STATES[id]}</Typography>
        <Typography
          variant="h6"
          color={getLastRtValue(rtData, id) < 1 ? 'secondary' : 'error'}
        >
          <strong>{getLastRtValue(rtData, id)}</strong>
        </Typography>
      </header>
      {
        {
          rt: <RiskScatterPlot data={[{ id, data: rtData[id] }]} />,
          cases: (
            <CasesLine
              data={[
                { id: 'smoothed', data: smoothedCases[id] },
                { id: 'new', data: newCases[id] },
              ]}
            />
          ),
          death: (
            <DeathsLine
              data={[
                { id: 'smoothed', data: smoothedDeaths[id] },
                { id: 'new', data: newDeaths[id] },
              ]}
            />
          ),
        }[chartActive || 'rt']
      }
    </div>
  );
};

export default memo(RiskList);
