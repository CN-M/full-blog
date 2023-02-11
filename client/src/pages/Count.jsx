import { useDispatch, useSelector } from 'react-redux';
import { increment, reset, decrement } from '../Features/Counter/counterSlice';

const count = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const Inc = () => {
    dispatch(increment());
  };

  const Reset = () => {
    dispatch(reset());
  };

  const Dec = () => {
    dispatch(decrement());
  };

  return (
    <div className="count-container">
      <div className="totals">
        <p>Total</p>
        <div className="count">
          {count}
        </div>
      </div>
      <div className="buttons">
        <button type="button" onClick={Inc}>Increment</button>
        <button type="button" onClick={Reset}>Reset</button>
        <button type="button" onClick={Dec}>Decrement</button>
      </div>
    </div>
  );
};

export default count;
