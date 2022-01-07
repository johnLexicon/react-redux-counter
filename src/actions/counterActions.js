import actionTypes from '../store/actionTypes';

export const increment = (amount) => {
  return {
    type: actionTypes().counter.INCREMENT,
    amount
  };
};

export const decrement = (amount) => {
  return {
    type: actionTypes().counter.DECREMENT,
    amount
  };
};

export const toggleCounter = (value) => {
  return {
    type: actionTypes().counter.TOGGLE_COUNTER,
    toggleValue: value
  };
};
