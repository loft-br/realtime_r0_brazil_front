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
    <Section
      title="Observando os resultados"
      description="Usamos o mesmo padrão de visualização adotado pelo Kevin. Nos gráficos, cada ponto é a estimativa de $R_t$ para o dia, e a área cinzenta indica o intervalo crível de 90% de probabilidade. Deixamos $R = 1$ em evidência, já que quando $R_t &lt; 1$ indica que a epidemia está sob controle."
    >
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
    <Section
      title="Observando os resultados: comparação entre estados"
      description="Para fazer uma comparação entre estados, mostramos a última estimativa de $R_t$ de cada estado no gráfico de barras a seguir, com a incerteza associada. Os gráficos estão ordenados do melhor para o pior usando a estimativa mais provável do modelo."
    >
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
