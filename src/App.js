import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Home from './pages/Home'

function App() {
  return (
    <Container>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <Home />
      </Grid>
    </Container>
  );
}

export default App;
