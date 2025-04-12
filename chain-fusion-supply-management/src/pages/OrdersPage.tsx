
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import OrderManagement from '@/components/modules/oms/OrderManagement';

const OrdersPage = () => {
  return (
    <DashboardLayout>
      <OrderManagement />
    </DashboardLayout>
  );
};

export default OrdersPage;
