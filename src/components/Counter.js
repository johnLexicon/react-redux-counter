import { useSelector, useDispatch } from 'react-redux'; // The useSelector hook creates automatically a subscription

// When the component is unmounted redux will automatically clear the subscription.
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = (amount) => {
    dispatch({ type: 'INCREMENT', amount });
  };
  const handleDecrement = (amount) => {
    dispatch({ type: 'DECREMENT', amount });
  };
  return (
    <div className="counter-wrapper text-center py-5">
      <div className="h3 text-muted">Redux Counter</div>
      <div className="h2">{counter}</div>
      <div className="counter-btns">
        <button
          onClick={() => handleIncrement(1)}
          className="btn btn-primary m-2"
        >
          Increment 1
        </button>
        <button
          onClick={() => handleIncrement(5)}
          className="btn btn-primary m-2"
        >
          Increment 5
        </button>
        <button
          onClick={() => handleDecrement(1)}
          className="btn btn-primary m-2"
        >
          Decrement 1
        </button>
        <button
          onClick={() => handleDecrement(5)}
          className="btn btn-primary m-2"
        >
          Decrement 5
        </button>
      </div>
      <div className="toggle-wrapper mt-3">
        <button className="btn btn-primary">Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;
