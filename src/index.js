import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import { store } from './store';
import Layout from './components/Layout';
import setRem from './utils/screenRem';
setRem(375, 375);
ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
