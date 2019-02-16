import { INCREMENT, DECREMENT } from '~store/constants';

const initialState = {
  count: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        count: state.count > 0 ? state.count - 1 : 0,
      };
    default:
      return state;
  }
};
