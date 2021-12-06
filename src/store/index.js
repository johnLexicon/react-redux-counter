import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  const { type, amount } = action;
  if (type === 'INCREMENT') {
    return { ...state, counter: state.counter + amount };
  }
  if (type === 'DECREMENT') {
    return { ...state, counter: state.counter - amount };
  }
  return state;
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
