
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Electronics', current: 3000, optimal: 3500 },
  { name: 'Clothing', current: 2000, optimal: 2500 },
  { name: 'Food', current: 1500, optimal: 2000 },
  { name: 'Furniture', current: 800, optimal: 1200 },
  { name: 'Books', current: 500, optimal: 600 },
];

const InventoryChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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
        <Bar dataKey="current" fill="hsl(var(--secondary))" barSize={20} />
        <Bar dataKey="optimal" fill="hsl(var(--muted))" barSize={20} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default InventoryChart;
