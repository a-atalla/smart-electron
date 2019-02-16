import React from 'react';
import ReactDOM from 'react-dom';
import AtomIcon from './assets/icons/atom-solid.svg';

const App = () => (
  <div>
    <h2>Welcome to smart-electron project</h2>
    <div>
      <AtomIcon style={{width: 50, height: 50, color: '#51727d'}}/>
    </div>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();

