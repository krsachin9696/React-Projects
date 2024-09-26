import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, setCustomValue } from './store/counter';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleCustomValueChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    dispatch(setCustomValue(value));
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Redux Toolkit Practice</h1>
      <h2>Display 1: Counter Value: {count}</h2>
      <h2>Display 2: Counter Value: {count}</h2>

      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>

      <div style={{ marginTop: '20px' }}>
        <input
          type="number"
          placeholder="Set Custom Value"
          onChange={handleCustomValueChange}
        />
      </div>
    </div>
  );
};

export default App;
