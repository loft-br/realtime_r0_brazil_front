import React from 'react';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

import Typography from '../Typography';
import useStyles from './Footer.styles';

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.container}>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h5">
          Recursos
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              <Link
                color="secondary"
                href="https://docs.google.com/presentation/d/1J0xtMQH0LxN-ZEfnl8I4iooGofEp49fyqKIk69rMf1w/edit#slide=id.g71c335fc92_32_492"
              >
                Base Case
              </Link>{' '}
              e{' '}
              <Link
                color="secondary"
                href="https://docs.google.com/presentation/d/1OeQuD0zuU5FcOUGWxkidCvFDloHuMa9zs03iTW2QjCM/edit#slide=id.g714b42d86c_6_298"
              >
                Action Plan
              </Link>{' '}
              da Loft, divulgados para a comunidade
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                color="secondary"
                href="https://docs.google.com/document/d/1PvR_dI5L_5mhjDWovgIgkkSMtFFHFQ9bRYCY9hx30ZE/edit?ts=5e6a7c6f"
              >
                Warzoom
              </Link>{' '}
              Loft com todas as políticas internas, atualizado diariamente
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                color="secondary"
                href="https://docs.google.com/document/d/1c8U-eZSZQwr8m3KifQBndBOv0WlDDJ9aD0VPYATe3cg/edit#heading=h.gkvqnzw9i612"
              >
                Reports
              </Link>{' '}
              de modelagem do COVID-19 do time de data science da Loft
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                color="secondary"
                href="https://github.com/gdmarmerola/realtime_r0_brazil"
              >
                Repositório no GitHub
              </Link>{' '}
              com nossa metodologia de cálculo do Rt
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              <Link
                color="secondary"
                href="https://github.com/k-sys/covid-19/blob/master/Realtime%20R0.ipynb"
              >
                Notebook
              </Link>{' '}
              do Jupyter do Kevin Systrom com sua metodologia para calcular Rt
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h5">
          Limitações conhecidas da metodologia
        </Typography>
        <ul>
          <li>
            <Typography variant="body1">
              A metodologia consegue lidar com baixos níveis de testagem, já que
              usa variações entre um dia e outro — mais importa a variação entre
              os números de casos e não o número absoluto — mas pode ser afetada
              se tivermos grandes variações na disponibilidade de testes.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Existe um atraso entre ter a doença e o teste positivo. Isto não
              se reflete nesses números. Os valores de Rt reais podem estar
              atrasados em alguns dias.
            </Typography>
          </li>
          <li>
            <Typography variant="body1">
              Tentamos fazer a estimativa de Rt da melhor forma possível. Mesmo
              que este seja o caso, é impossível fazê-lo com perfeição. Pedimos
              para que levem isto em consideração.
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.section}>
        <Typography className={classes.sectionTitle} variant="h5">
          Créditos
        </Typography>
        <Typography variant="body1">
          Análise por{' '}
          <Link
            color="secondary"
            href="https://www.linkedin.com/in/gdmarmerola/"
          >
            Guilherme Marmerola
          </Link>{' '}
          e site construído por{' '}
          <Link
            color="secondary"
            href="https://www.linkedin.com/in/thiago-capelo-0156446a/"
          >
            Thiago Capelo
          </Link>
          ,{' '}
          <Link color="secondary" href="https://www.linkedin.com/in/kopplin/">
            Sérgio Kopplin
          </Link>{' '}
          e{' '}
          <Link
            color="secondary"
            href="https://www.linkedin.com/in/filipecunha/"
          >
            Filipe Cunha
          </Link>
        </Typography>
        <Typography variant="body1">
          Obrigado a Flora Oliveira, Ricardo Kauffman e Diogo Kpelo por suas
          contribuições ao projeto.
        </Typography>
      </div>
      <svg
        className={classes.logo}
        focusable="false"
        viewBox="0 0 140 119"
        color="#FF774A"
        aria-hidden="false"
        role="img"
      >
        <g fill-rule="evenodd">
          <polygon points="139.879 44.876 131.05 44.876 131.05 28.52 118.437 28.52 118.437 98.567 131.05 98.567 131.05 57.384 139.879 57.384"></polygon>
          <path d="M90.6315856,119.840822 L78.018973,119.840822 L78.018973,27.6728524 C78.018973,12.9617512 90.087982,0.991235202 104.922937,0.991235202 L104.922937,13.4996113 C97.0425766,13.4996113 90.6315856,19.8576189 90.6315856,27.6728524 L90.6315856,119.840822 Z"></path>
          <path d="M71.6580365,44.8761224 L112.073027,44.8761224 L108.497351,57.3844985 L71.6580365,57.3844985 C68.8358742,68.510984 58.6626658,76.7724816 46.5798919,76.7724816 C32.3225946,76.7724816 20.724036,65.2697789 20.724036,51.1303105 C20.724036,36.9908421 32.3225946,25.4881394 46.5798919,25.4881394 C58.6626658,25.4881394 68.8358742,33.749637 71.6580365,44.8761224 Z M32.0753874,51.1303105 C32.0753874,59.0618718 38.5822342,65.514943 46.5798919,65.514943 C54.5775495,65.514943 61.0843964,59.0618718 61.0843964,51.1303105 C61.0843964,43.1987492 54.5775495,36.7456779 46.5798919,36.7456779 C38.5822342,36.7456779 32.0753874,43.1987492 32.0753874,51.1303105 Z"></path>
          <path d="M34.9076757,97.7300156 C15.6595676,97.7300156 -0.000252252253,82.1996158 -0.000252252253,63.1093321 L-0.000252252253,28.5199196 L12.6123604,28.5199196 L12.6123604,63.1093321 C12.6123604,75.3012464 22.6141622,85.2216395 34.9076757,85.2216395 L34.9076757,97.7300156 Z"></path>
        </g>
        <title>Loft</title>
      </svg>
    </footer>
  );
};

export default Footer;
