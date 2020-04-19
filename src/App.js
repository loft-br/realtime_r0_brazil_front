import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Home from './pages/Home';

function App() {
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="center"
        spacing={4}
      >
        <Home />
      </Grid>
    </Container>
  );
}

export default App;
