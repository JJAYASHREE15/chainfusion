
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', onTime: 30, delayed: 10 },
  { name: 'Tue', onTime: 28, delayed: 8 },
  { name: 'Wed', onTime: 32, delayed: 5 },
  { name: 'Thu', onTime: 35, delayed: 7 },
  { name: 'Fri', onTime: 40, delayed: 12 },
  { name: 'Sat', onTime: 25, delayed: 6 },
  { name: 'Sun', onTime: 15, delayed: 3 },
];

const ShipmentChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
        <XAxis 
          dataKey="name" 
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <YAxis 
          stroke="hsl(var(--muted-foreground))"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: 'hsl(var(--card))', 
            border: '1px solid hsl(var(--border))',
            color: 'hsl(var(--card-foreground))'
          }} 
        />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="onTime" 
          stroke="hsl(var(--primary))" 
          activeDot={{ r: 8 }} 
        />
        <Line 
          type="monotone" 
          dataKey="delayed" 
          stroke="hsl(var(--destructive))" 
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ShipmentChart;
