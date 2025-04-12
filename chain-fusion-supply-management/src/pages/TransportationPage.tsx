
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import TransportationManagement from '@/components/modules/tms/TransportationManagement';

const TransportationPage = () => {
  return (
    <DashboardLayout>
      <TransportationManagement />
    </DashboardLayout>
  );
};

export default TransportationPage;
