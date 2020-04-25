import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from './components/Layout';
import Routes from './routes';
import configureStore from './store';
import theme from './theme';

function App() {
  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
