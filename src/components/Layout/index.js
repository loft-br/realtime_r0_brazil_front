import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector } from 'react-redux';

import AppBar from 'components/AppBar';
import Footer from 'components/Footer';
import Typography from 'components/Typography';
import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();
  const formattedDate = useSelector((state) => state?.data?.lastUpdateTime);

  return (
    <>
      <AppBar />
      <Container className={classes.container} maxWidth="lg" component="main">
        <Typography variant="h2" component="h2">
          <em>
            R<sub>t</sub>
          </em>{' '}
          do COVID-19 por estado no Brasil
        </Typography>
        <Typography variant="h6">
          Dados até: <strong>{formattedDate}</strong>
        </Typography>
        {children}
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
