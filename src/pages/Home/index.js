import React from 'react';
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

const Home = () => <>{createRiskList(dataFormatted)}</>;

export default Home;
