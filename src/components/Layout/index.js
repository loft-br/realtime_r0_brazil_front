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
          Gráficos do Covid-19 nos estados brasileiros
        </Typography>
        <Typography variant="h5">Atualizado em 19 de Abril de 2020.</Typography>
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
