import React, { memo, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';

import {
  getLastRtValueById,
  formatNewCasesData,
  formatNewDeathsData,
  formatSmoothedCasesData,
  formatSmoothedDeathsData,
  formatRtData,
} from 'utils';

import { CasesLine, DeathsLine, RiskScatterPlot } from 'components/charts';
import StickyButtonGroup from 'components/StickyButtonGroup';

import useStyles from './RiskList.styles';

const RiskList = ({ data: content }) => {
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
        {Object.keys(content).map((id) => {
          const data = content[id];
          const lastRtValue = getLastRtValueById(content, id);

          return (
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
                data={data}
                chartActive={chartActive}
                lastRtValue={lastRtValue}
                id={id}
              />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const BoxChart = ({ chartActive, data, id, lastRtValue }) => {
  const classes = useStyles();

  const rtData = formatRtData(data);
  const newCases = formatNewCasesData(data);
  const smoothedCases = formatSmoothedCasesData(data);
  const newDeaths = formatNewDeathsData(data);
  const smoothedDeaths = formatSmoothedDeathsData(data);

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h6">{data[0]?.state}</Typography>
        <Typography
          variant="h6"
          color={lastRtValue < 1 ? 'secondary' : 'error'}
        >
          <strong>{lastRtValue}</strong>
        </Typography>
      </header>
      {
        {
          rt: <RiskScatterPlot data={[{ id, data: rtData }]} />,
          cases: (
            <CasesLine
              data={[
                { id: 'smoothed', data: smoothedCases },
                { id: 'new', data: newCases },
              ]}
            />
          ),
          death: (
            <DeathsLine
              data={[
                { id: 'smoothed', data: smoothedDeaths },
                { id: 'new', data: newDeaths },
              ]}
            />
          ),
        }[chartActive || 'rt']
      }
    </div>
  );
};

export default memo(RiskList);
