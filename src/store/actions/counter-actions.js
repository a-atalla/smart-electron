import { DECREMENT, INCREMENT } from '~store/constants';

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});
