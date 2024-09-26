import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateDataValue } from './store/counter';
import Charts from './components/chart';

const App = () => {
  const chartData = useSelector((state) => state.counter.data);
  const dispatch = useDispatch();
  const [newDataValue, setNewDataValue] = useState('');

  const handleDataChange = (index) => {
    const value = parseInt(newDataValue, 10) || 0;
    dispatch(updateDataValue({ index, newValue: value }));
    setNewDataValue('');
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Redux Toolkit with Charts</h1>

      <Charts />

      <div style={{ marginTop: '40px' }}>
        <h2>Update Chart Data</h2>
        {chartData.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <span>{item.name}: {item.value}</span>
            <input
              type="number"
              placeholder="New Value"
              value={newDataValue}
              onChange={(e) => setNewDataValue(e.target.value)}
            />
            <button onClick={() => handleDataChange(index)}>Update</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
