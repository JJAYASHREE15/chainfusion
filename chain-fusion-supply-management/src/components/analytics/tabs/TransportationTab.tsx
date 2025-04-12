
import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { deliveryPerformance } from '../analyticsData';
import AnalyticsChartCard from '../charts/AnalyticsChartCard';

const TransportationTab = () => {
  return (
    <AnalyticsChartCard 
      title="Delivery Performance" 
      description="Weekly delivery statistics"
    >
      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={deliveryPerformance}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area type="monotone" dataKey="onTime" name="On-time Delivery %" stackId="1" fill="#10b981" stroke="#10b981" />
            <Area type="monotone" dataKey="delayed" name="Delayed %" stackId="1" fill="#f97316" stroke="#f97316" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </AnalyticsChartCard>
  );
};

export default TransportationTab;
