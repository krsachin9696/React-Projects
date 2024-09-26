import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { useSelector } from 'react-redux';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const Charts = () => {
  const chartData = useSelector((state) => state.counter.data);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex' }}>
      <div>
        <PieChart width={400} height={400}>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <h2>Pie Chart Representation</h2>
      </div>

      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-end'}}>
        <BarChart
          width={600}
          height={300}
          data={chartData}
          margin={{
            top: 20, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
        <h2>Bar Chart Representation</h2>
      </div>
    </div>
  );
};

export default Charts;
