import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Title from '~components/Title';
import AtomIcon from '~assets/icons/atom-solid.svg';
import { decrement, increment } from '~store/actions/counter-actions';

const Home = ({ count, incrementCounter, decrementCounter }) => (
  <div className="container">
    <Title text="Smart Electron" />
    <div className="icon-container">
      <AtomIcon className="icon" />
      <div>
        <h2 className="title">
          <button type="button" onClick={incrementCounter}>+</button>
          {count}
          <button type="button" onClick={decrementCounter}>-</button>
        </h2>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  count: PropTypes.number.isRequired,
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  count: state.counter.count,
});

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch(increment()),
  decrementCounter: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
