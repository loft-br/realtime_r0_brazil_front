import React from 'react';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from 'components/Layout';
import Routes from 'routes';
import configureStore from './store';
import theme from 'theme';

function App() {
  const store = configureStore();

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
