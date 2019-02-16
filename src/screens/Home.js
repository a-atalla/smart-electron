import React from 'react';
import Title from '../components/Title';
import AtomIcon from '../assets/icons/atom-solid.svg';

const Home = () => (
  <div className="container">
    <Title text="Smart Electron !!" />
    <div className="icon-container">
      <AtomIcon className="icon" />
    </div>
  </div>
);

export default Home;
