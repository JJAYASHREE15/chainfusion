
import React from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import DistributionManagement from '@/components/modules/dms/DistributionManagement';

const DistributionPage = () => {
  return (
    <DashboardLayout>
      <DistributionManagement />
    </DashboardLayout>
  );
};

export default DistributionPage;
