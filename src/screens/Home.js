import React from 'react';
import Title from '../components/Title';
import AtomIcon from '../assets/icons/atom-solid.svg';

class Home extends React.Component {
  getName = () => {
    console.log('Name');
  };

  render() {
    return (
      <div className="container">
        <Title text="Smart Electron !!" />
        <button onClick={this.getName}>Get Name</button>
        <div className="icon-container">
          <AtomIcon className="icon" />
        </div>
      </div>
    );
  }
}

export default Home;
