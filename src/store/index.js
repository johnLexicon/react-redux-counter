import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return state.counter + 1;
  }
  if (action.type === 'DECREMENT') {
    return state.counter - 1;
  }
  return state;
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
