import React from 'react';
import { Container } from '@material-ui/core';
import AppBar from '../AppBar';
import Footer from '../Footer';
import Typography from '../Typography';
import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar />
      <Container className={classes.container} maxWidth="lg" component="main">
        <Typography variant="h2" component="h2">
          Rt do COVID-19 por estado no Brasil
        </Typography>
        <Typography variant="h6">
          Atualizado diariamente.
          <br></br>
          Última atualização: <strong>19 de Abril de 2020</strong>
        </Typography>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
