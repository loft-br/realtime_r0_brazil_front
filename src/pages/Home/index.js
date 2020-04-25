import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Typography, CircularProgress, Grid } from '@material-ui/core';

import { RiskList, Line } from 'components/charts/';
import Section from 'components/Section';

import { getModelResults } from 'store/actions';
import { formatListData, formatBarChartData } from 'utils';

import useStyles from './Home.styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [listData, setListData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);

  useEffect(() => {
    setLoading(true);

    const getData = async () => {
      try {
        await dispatch(getModelResults()).then((response) => {
          setListData(formatListData(response));
          setBarChartData(formatBarChartData(response));
          setLoading(false);
        });
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getData();
  }, [dispatch]);

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
        title="O que é o <em>R<sub>t</sub></em>?"
        description={`O <em>R<sub>t</sub></em>, ou número de reprodução eficaz, é o número médio de contágios
          causados por cada pessoa infectada em um determinado ponto no tempo,
          levando em consideração mudanças no nosso comportamento (quarentena,
          uso de máscaras, home office, etc). Um <em>R<sub>t</sub></em> de 3–4 infectará
          virtualmente toda a população, enquanto um <em>R<sub>t</sub></em> de 1.5 pode ainda
          alcançar 60% da população. Somente se o <em>R<sub>t</sub></em> for menor do que 1, a
          epidemia irá diminuir de tamanho até ser eliminada.`}
      />
      <Section
        title="Comparação entre estados"
        description="Para fazer uma comparação entre estados, mostramos a última estimativa de <em>R<sub>t</sub></em> de cada estado no gráfico a seguir, com a incerteza associada.<br>Os gráficos estão ordenados do melhor para o pior usando a estimativa mais provável do modelo."
      >
        <div className={classes.barChartWrapper}>
          <Line data={barChartData} />
        </div>
      </Section>
      <Section
        title="<em>R<sub>t</sub></em> em tempo real por UF"
        description="Nosso modelo produz uma estimativa de <em>R<sub>t</sub></em> para cada um dos estados brasileiros, com um intervalo crível de 90% de probabilidade. Nos gráficos a seguir, mostramos a estimativa para cada estado. No eixo vertical temos a estimativa de <em>R<sub>t</sub></em> ao longo do tempo. Os pontos são as estimativas, enquanto a sombra significa todos os possíveis valores de <em>R<sub>t</sub></em> em determinada data (intervalo crível). Somente se o <em>R<sub>t</sub></em> for menor do que 1, a epidemia irá diminuir de tamanho até ser eliminada."
      >
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
          spacing={4}
        >
          <RiskList data={listData} />
        </Grid>
      </Section>
    </>
  );
};

export default Home;
