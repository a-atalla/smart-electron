import React from 'react';
import ReactDOM from 'react-dom';
import Home from '~screens/Home';
import '~assets/styles/main.scss';

ReactDOM.render(
  <Home />,
  document.getElementById('app'),
);

module.hot.accept();
