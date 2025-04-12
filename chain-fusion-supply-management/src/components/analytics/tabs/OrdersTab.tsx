
import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { monthlyData } from '../analyticsData';
import AnalyticsChartCard from '../charts/AnalyticsChartCard';

const OrdersTab = () => {
  return (
    <AnalyticsChartCard title="Order Trends">
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={monthlyData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="orders" name="Orders" stroke="#3b82f6" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="shipments" name="Shipments" stroke="#10b981" />
            <Line type="monotone" dataKey="returns" name="Returns" stroke="#f97316" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </AnalyticsChartCard>
  );
};

export default OrdersTab;
