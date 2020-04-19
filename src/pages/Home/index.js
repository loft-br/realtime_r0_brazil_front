import React from 'react';
import { Grid } from '@material-ui/core';
import { createRiskList } from '../../components/charts/';

import * as mock from '../../mock/charts.json';

const dataFormatted = mock?.data?.reduce((current, next) => {
  const [id, _x, y, low, high] = next;
  const index = (current[id] || []).length;

  return {
    ...current,
    [id]: (current[id] || []).concat({
      id,
      x: index,
      y,
      low,
      high,
    }),
  };
}, {});

const Home = () => (
  <Grid
    container
    direction="row"
    justify="flex-start"
    alignItems="center"
    spacing={4}
  >
    {createRiskList(dataFormatted)}
  </Grid>
);

export default Home;
