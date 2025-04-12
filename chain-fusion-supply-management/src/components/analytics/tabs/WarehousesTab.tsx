
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { warehouseEfficiency } from '../analyticsData';
import AnalyticsChartCard from '../charts/AnalyticsChartCard';

const WarehousesTab = () => {
  return (
    <AnalyticsChartCard 
      title="Warehouse Performance" 
      description="Efficiency rates across all warehouses"
    >
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={warehouseEfficiency}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="warehouse" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pickingRate" name="Picking Efficiency %" fill="#3b82f6" />
            <Bar dataKey="packingRate" name="Packing Efficiency %" fill="#10b981" />
            <Bar dataKey="shippingRate" name="Shipping Efficiency %" fill="#f97316" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </AnalyticsChartCard>
  );
};

export default WarehousesTab;
