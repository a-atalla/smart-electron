import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '~store/configure-store';
import Home from '~screens/Home';
import '~assets/styles/main.scss';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Home />
  </Provider>,
  document.getElementById('app'),
);

module.hot.accept();
