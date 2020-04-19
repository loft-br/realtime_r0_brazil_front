import React from 'react';
import { Container, Typography } from '@material-ui/core';

import AppBar from '../AppBar';

const Layout = ({ children }) => (
  <>
    <AppBar />
    <Container component="main">
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

export default Layout;
