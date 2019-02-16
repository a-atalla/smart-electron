import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '~store/reducers/root-reducer';

const isDev = process.env.NODE_ENV === 'development';

/* eslint-disable-next-line no-underscore-dangle */
const composeEnhancers = isDev ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

export default () => createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
