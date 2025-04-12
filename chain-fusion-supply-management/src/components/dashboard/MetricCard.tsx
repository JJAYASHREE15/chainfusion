
import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  className?: string;
}

const MetricCard = ({ title, value, change, trend, icon: Icon, className }: MetricCardProps) => {
  return (
    <div className={cn("dashboard-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change && (
            <p className={cn(
              "flex items-center text-xs font-medium mt-1",
              trend === 'up' && "text-green-500",
              trend === 'down' && "text-red-500",
              trend === 'neutral' && "text-muted-foreground"
            )}>
              {change}
            </p>
          )}
        </div>
        <div className="rounded-full p-2 bg-muted">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default MetricCard;
