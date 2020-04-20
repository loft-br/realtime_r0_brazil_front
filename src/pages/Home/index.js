import React, { useEffect, useState } from 'react';
import { CircularProgress, Grid } from '@material-ui/core';

import { createRiskList, RiskBar, Line } from '../../components/charts/';
import Typography from '../../components/Typography';
import Section from '../../components/Section';
import { DataEntity } from '../../services';
import useStyles from './Home.styles';

const dataApi = new DataEntity();

const formatListData = ({ data }) => {
  return data?.reduce((current, next) => {
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
};

const formatBarChartData = (data) => {
  return Object.keys(data).map((k) => data[k][data[k].length - 1]);
};

const Home = () => {
  const classes = useStyles();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listData, setListData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        const response = await dataApi.getModelResultState();

        setListData(formatListData(response));
        setBarChartData(formatBarChartData(formatListData(response)));
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className={classes.loadingWrapper}>
        <CircularProgress size={60} />
      </div>
    );
  }

  if (error || !listData || !barChartData) {
    return (
      <div className={classes.errorWrapper}>
        <Typography variant="h5">Um Erro ocorreu!</Typography>
        <Typography variant="h6">Tente novamente mais tarde.</Typography>
      </div>
    );
  }

  return (
    <>
      <Section
        title="Observando os resultados: comparação entre estados"
        description="Para fazer uma comparação entre estados, mostramos a última estimativa de $R_t$ de cada estado no gráfico de barras a seguir, com a incerteza associada. Os gráficos estão ordenados do melhor para o pior usando a estimativa mais provável do modelo."
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            position: 'relative',
            height: 500,
            overflowX: 'auto',
            overflowY: 'hidden',
          }}
        >
          <Line data={barChartData} />
        </div>
      </Section>
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
          {createRiskList(listData)}
        </Grid>
      </Section>
    </>
  );
};

export default Home;
