import React from 'react';
import { Grid } from '@material-ui/core';
import { createRiskList, RiskBar } from '../../components/charts/';
import Section from '../../components/Section';

import * as mock from '../../mock/charts.json';

const listDataFormatted = mock?.data?.reduce((current, next) => {
  const [id, , y, low, high] = next;
  const index = (current[id] || []).length;

  return {
    ...current,
    [id]: (current[id] || []).concat({
      id,
      state: id,
      x: index,
      y,
      low,
      high,
    }),
  };
}, {});

const barChartDataFormatted = Object.keys(listDataFormatted).map(
  (k) => listDataFormatted[k][listDataFormatted[k].length - 1]
);

const Home = () => (
  <>
    <Section title="Lorem ipsum">
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={4}
      >
        {createRiskList(listDataFormatted)}
      </Grid>
    </Section>
    <Section title="Lorem ipsum">
      <div
        style={{
          display: 'flex',
          width: '100%',
          position: 'relative',
          height: 400,
        }}
      >
        <RiskBar data={barChartDataFormatted} />
      </div>
    </Section>
  </>
);

export default Home;
