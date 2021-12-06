import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="counter-wrapper text-center py-5">
      <div className="h2">{counter}</div>
      <button className="btn btn-primary mt-3">Toggle Counter</button>
    </div>
  );
};

export default Counter;
