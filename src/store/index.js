import { createStore } from 'redux';

const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  const { type, amount, toggleValue } = action;
  if (type === 'INCREMENT') {
    return { ...state, counter: state.counter + amount };
  }
  if (type === 'DECREMENT') {
    return { ...state, counter: state.counter - amount };
  }
  if (type === 'TOGGLE_COUNTER') {
    return { ...state, showCounter: toggleValue };
  }
  return state;
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
