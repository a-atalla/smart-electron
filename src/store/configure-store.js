import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '~store/reducers/root-reducer';

export default () => createStore(
  rootReducer,
  applyMiddleware(thunk),
);
