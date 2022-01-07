import actionTypes from '../store/actionTypes';

// NEVER MUTATE THE EXISTING STATE, ALWAYS RETURN A COPY OF THE STATE!!!
const counterReducer = (state = { counter: 0, showCounter: true }, action) => {
  const { type, amount, toggleValue } = action;
  if (type === actionTypes().counter.INCREMENT) {
    return { ...state, counter: state.counter + amount };
  }
  if (type === actionTypes().counter.DECREMENT) {
    return { ...state, counter: state.counter - amount };
  }
  if (type === actionTypes().counter.TOGGLE_COUNTER) {
    return { ...state, showCounter: toggleValue };
  }
  return state;
};

export default counterReducer;
