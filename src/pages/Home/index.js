import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Typography, Grid, List, ListItem, Link } from '@material-ui/core';

import { RiskList, Line } from 'components/charts/';
import Loader from 'components/Loader';
import Section from 'components/Section';

import { getModelResults } from 'store/actions';

import useStyles from './Home.styles';

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.loading);
  const error = useSelector((state) => state.error);
  const states = useSelector((state) => state.data?.states);

  const canRender = useCallback(
    (data) => !error && !loading && data !== undefined && data !== null,
    [error, loading]
  );

  const getData = useCallback(async () => {
    try {
      await dispatch(getModelResults());
    } catch (e) {
      console.error(e);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (error) {
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
        title="Uma métrica para acompanhar o COVID-19"
      >
        <Typography>
          Desde maio de 2020 temos informado o Rt, o número de reprodução efetivo da COVID-19 neste site. Passados quase dois anos,
          decidimos parar a atualização dos dados mostrados aqui. Deixamos referências a outras plataformas de com dados de confiança
          e atualizações contínuas:
          <ul>
            <li>
              <Link href="https://covid.saude.gov.br/" target="_blank">Painel Coronavírus</Link> do Ministério da Saúde
            </li>
            <li>
              <Link href="https://covid19analytics.com.br/" target="_blank">Covid-19 Analytics</Link>, mantido por representantes de diversas universidades
            </li>
          </ul>
          Preservando nosso objetivo de divulgação científica, mantemos a última execução do modelo abaixo, com links para repositórios com os códigos utilizados e outros recursos interessantes. Obrigado!
        </Typography>
      </Section>
      <Section
        title="Comparação entre estados"
        description="Para fazer uma comparação entre estados, mostramos a última estimativa de <em>R<sub>t</sub></em> de cada estado no gráfico a seguir, com a incerteza associada.<br>Os gráficos estão ordenados do melhor para o pior usando a estimativa mais provável do modelo."
      >
        <div className={classes.barChartWrapper}>
          {canRender(states) ? <Line data={states} /> : <Loader />}
        </div>
      </Section>
      {/*<Section*/}
      {/*  title="<em>R<sub>t</sub></em> em tempo real por UF"*/}
      {/*  description="Nosso modelo produz uma estimativa de <em>R<sub>t</sub></em> para cada um dos estados brasileiros, com um intervalo crível de 90% de probabilidade. Nos gráficos a seguir, mostramos a estimativa para cada estado. No eixo vertical temos a estimativa de <em>R<sub>t</sub></em> ao longo do tempo. Os pontos são as estimativas, enquanto a sombra significa todos os possíveis valores de <em>R<sub>t</sub></em> em determinada data (intervalo crível). Somente se o <em>R<sub>t</sub></em> for menor do que 1, a epidemia irá diminuir de tamanho até ser eliminada."*/}
      {/*>*/}
      {/*  <Grid*/}
      {/*    container*/}
      {/*    direction="column"*/}
      {/*    alignItems="center"*/}
      {/*    justify="center"*/}
      {/*    spacing={4}*/}
      {/*  >*/}
      {/*    {canRender(states) ? <RiskList data={states} /> : <Loader />}*/}
      {/*  </Grid>*/}
      {/*</Section>*/}
    </>
  );
};

export default Home;
