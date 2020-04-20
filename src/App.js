import React from 'react';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './store';
import Routes from './routes';
import Layout from './components/Layout';

function App() {
  const { persistor, store } = configureStore();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Routes />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default App;
