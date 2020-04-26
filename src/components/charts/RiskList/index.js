import React, { memo, useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@material-ui/core';

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
  const classes = useStyles();
  const rtData = formatListData(content);
  const newCases = formatNewCasesData(content);
  const smoothedCases = formatSmoothedCasesData(content);

  const [chartActive, setChartActive] = useState('rt');
  const handleClick = (value) => setChartActive(value);

  return (
    <>
      <ButtonGroup
        className={classes.navigation}
        color="secondary"
        variant="outlined"
        aria-label="Escolha o tipo de dado para visualizar no gráfico"
      >
        <Button
          variant={chartActive === 'rt' ? 'contained' : 'outlined'}
          onClick={() => handleClick('rt')}
        >
          Rt
        </Button>
        <Button
          variant={chartActive === 'cases' ? 'contained' : 'outlined'}
          onClick={() => handleClick('cases')}
        >
          Casos
        </Button>
        {/* <Button
          variant={chartActive === 'death' ? 'contained' : 'outlined'}
          disabled
          onClick={() => handleClick('death')}
        >
          Óbitos (em breve)
        </Button> */}
      </ButtonGroup>
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
              smoothedCases={smoothedCases}
              rtData={rtData}
              id={id}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

const BoxChart = ({ chartActive, newCases, smoothedCases, rtData, id }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        <Typography variant="h6">{BRAZIL_STATES[id]}</Typography>
        {/* <Button size="small" onClick={handleClick}>
          {butonLabel[chartActive] || ''}
        </Button> */}
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
          death: null,
        }[chartActive || 'rt']
      }
    </div>
  );
};

export default memo(RiskList);
