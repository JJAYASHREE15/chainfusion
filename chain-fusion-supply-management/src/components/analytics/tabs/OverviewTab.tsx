
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { monthlyData, inventoryData, deliveryPerformance, warehouseEfficiency, COLORS } from '../analyticsData';
import AnalyticsChartCard from '../charts/AnalyticsChartCard';

const OverviewTab = () => {
  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        <AnalyticsChartCard title="Monthly Performance">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="orders" name="Orders" fill="#3b82f6" />
              <Bar dataKey="shipments" name="Shipments" fill="#10b981" />
              <Bar dataKey="returns" name="Returns" fill="#f97316" />
            </BarChart>
          </ResponsiveContainer>
        </AnalyticsChartCard>
        
        <AnalyticsChartCard title="Inventory Distribution">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={inventoryData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
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
        </AnalyticsChartCard>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <AnalyticsChartCard title="Delivery Performance">
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
              <Area type="monotone" dataKey="onTime" name="On-time Delivery %" fill="#10b981" stroke="#10b981" />
              <Area type="monotone" dataKey="delayed" name="Delayed %" fill="#f97316" stroke="#f97316" />
            </AreaChart>
          </ResponsiveContainer>
        </AnalyticsChartCard>
        
        <AnalyticsChartCard title="Warehouse Efficiency">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={warehouseEfficiency}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="warehouse" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pickingRate" name="Picking Efficiency %" stroke="#3b82f6" />
              <Line type="monotone" dataKey="packingRate" name="Packing Efficiency %" stroke="#10b981" />
              <Line type="monotone" dataKey="shippingRate" name="Shipping Efficiency %" stroke="#f97316" />
            </LineChart>
          </ResponsiveContainer>
        </AnalyticsChartCard>
      </div>
    </>
  );
};

export default OverviewTab;
