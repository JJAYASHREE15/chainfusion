
import React, { ReactNode } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface AnalyticsChartCardProps {
  title: string;
  children: ReactNode;
  description?: string;
}

const AnalyticsChartCard = ({ title, description, children }: AnalyticsChartCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-medium">{title}</CardTitle>
        {description && <p className="text-muted-foreground mb-4">{description}</p>}
      </CardHeader>
      <CardContent>
        <div className="h-80">
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default AnalyticsChartCard;
