
import React from 'react';
import { ShoppingCart, Truck, Package, TrendingUp, AlertCircle } from 'lucide-react';
import MetricCard from './MetricCard';
import OrdersChart from '../charts/OrdersChart';
import InventoryChart from '../charts/InventoryChart';
import ShipmentChart from '../charts/ShipmentChart';

const DashboardOverview = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Overview of your supply chain operations</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard 
          title="Total Orders" 
          value="2,345" 
          change="+15% from last month" 
          trend="up" 
          icon={ShoppingCart} 
        />
        <MetricCard 
          title="Active Shipments" 
          value="837" 
          change="+5% from last month" 
          trend="up" 
          icon={Truck} 
        />
        <MetricCard 
          title="Inventory Items" 
          value="12,432" 
          change="-3% from last month" 
          trend="down" 
          icon={Package} 
        />
        <MetricCard 
          title="Efficiency Rate" 
          value="94.8%" 
          change="+2.1% from last month" 
          trend="up" 
          icon={TrendingUp} 
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-4">Order Volume</h3>
          <div className="h-60">
            <OrdersChart />
          </div>
        </div>
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-4">Inventory Status</h3>
          <div className="h-60">
            <InventoryChart />
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="dashboard-card md:col-span-2">
          <h3 className="text-lg font-medium mb-4">Shipment Performance</h3>
          <div className="h-60">
            <ShipmentChart />
          </div>
        </div>
        <div className="dashboard-card">
          <h3 className="text-lg font-medium mb-4">Alerts</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Low inventory alert for SKU-78954</p>
                <p className="text-xs text-muted-foreground">Reorder level reached</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Delayed shipment #45623</p>
                <p className="text-xs text-muted-foreground">Expected 2 days late</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium">Order rate spike detected</p>
                <p className="text-xs text-muted-foreground">32% increase in last 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardOverview;
