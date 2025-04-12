
import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { inventoryData, COLORS } from '../analyticsData';
import AnalyticsChartCard from '../charts/AnalyticsChartCard';

const InventoryTab = () => {
  return (
    <AnalyticsChartCard 
      title="Inventory Analysis" 
      description="Current inventory distribution by category"
    >
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={inventoryData}
              cx="50%"
              cy="50%"
              labelLine={true}
              label={({ name, value }) => `${name}: ${value}%`}
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
            >
              {inventoryData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </AnalyticsChartCard>
  );
};

export default InventoryTab;
