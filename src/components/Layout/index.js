import React from 'react';
import { Container, Typography } from '@material-ui/core';
import AppBar from '../AppBar';
import useStyles from './Layout.styles';

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar />
      <Container className={classes.container} maxWidth="lg" component="main">
        <Typography variant="h2" component="h2">
          Brazil State Covid-19 Charts
        </Typography>
        <Typography variant="h5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        {children}
      </Container>
    </>
  );
};

export default Layout;
