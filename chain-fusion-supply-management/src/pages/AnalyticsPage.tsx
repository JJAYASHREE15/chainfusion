
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DownloadIcon, RefreshCw } from 'lucide-react';
import AnalyticsHeader from '@/components/analytics/AnalyticsHeader';
import OverviewTab from '@/components/analytics/tabs/OverviewTab';
import OrdersTab from '@/components/analytics/tabs/OrdersTab';
import InventoryTab from '@/components/analytics/tabs/InventoryTab';
import WarehousesTab from '@/components/analytics/tabs/WarehousesTab';
import TransportationTab from '@/components/analytics/tabs/TransportationTab';

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <AnalyticsHeader />
        
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full md:w-auto md:inline-flex grid-cols-3 md:grid-cols-none">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="warehouses">Warehouses</TabsTrigger>
            <TabsTrigger value="transportation">Transportation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-6 mt-6">
            <OverviewTab />
          </TabsContent>
          
          <TabsContent value="orders" className="space-y-6 mt-6">
            <OrdersTab />
          </TabsContent>
          
          <TabsContent value="inventory" className="mt-6">
            <InventoryTab />
          </TabsContent>
          
          <TabsContent value="warehouses" className="mt-6">
            <WarehousesTab />
          </TabsContent>
          
          <TabsContent value="transportation" className="mt-6">
            <TransportationTab />
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default AnalyticsPage;
