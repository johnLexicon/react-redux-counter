import { useSelector, useDispatch } from 'react-redux'; // The useSelector hook creates automatically a subscription

// When the component is unmounted redux will automatically clear the subscription.
const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  return (
    <div className="counter-wrapper text-center py-5">
      <div className="h3 text-muted">Redux Counter</div>
      <div className="h2">{counter}</div>
      <div className="counter-btns">
        <button onClick={handleIncrement} className="btn btn-primary m-2">
          Increment
        </button>
        <button onClick={handleDecrement} className="btn btn-primary m-2">
          Decrement
        </button>
      </div>
      <div className="toggle-wrapper mt-3">
        <button className="btn btn-primary">Toggle Counter</button>
      </div>
    </div>
  );
};

export default Counter;
