
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Plus, Eye, Edit, Trash2 } from 'lucide-react';

// Sample order data
const orders = [
  { 
    id: 'ORD-2023-1001', 
    customer: 'Acme Corp', 
    date: '2023-04-05', 
    items: 12, 
    total: '$3,458.99', 
    status: 'Processing',
    source: 'Online'
  },
  { 
    id: 'ORD-2023-1002', 
    customer: 'Globex Inc', 
    date: '2023-04-05', 
    items: 5, 
    total: '$1,254.50', 
    status: 'Shipped',
    source: 'Mobile App'
  },
  { 
    id: 'ORD-2023-1003', 
    customer: 'Wayne Enterprises', 
    date: '2023-04-04', 
    items: 8, 
    total: '$2,876.25', 
    status: 'Delivered',
    source: 'In-store'
  },
  { 
    id: 'ORD-2023-1004', 
    customer: 'Stark Industries', 
    date: '2023-04-04', 
    items: 3, 
    total: '$876.00', 
    status: 'Processing',
    source: 'Online'
  },
  { 
    id: 'ORD-2023-1005', 
    customer: 'Umbrella Corp', 
    date: '2023-04-03', 
    items: 15, 
    total: '$4,321.75', 
    status: 'On Hold',
    source: 'Mobile App'
  },
];

const OrderManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Order Management System</h1>
        <p className="text-muted-foreground mt-1">Manage customer orders and fulfillment</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search orders..." 
              className="pl-8 w-[250px] md:w-[300px]" 
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          New Order
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Customer</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Items</TableHead>
              <TableHead>Source</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.items}</TableCell>
                <TableCell>{order.source}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      order.status === 'Processing' 
                        ? 'bg-blue-500' 
                        : order.status === 'Shipped' 
                        ? 'bg-amber-500' 
                        : order.status === 'Delivered' 
                        ? 'bg-green-500' 
                        : 'bg-red-500'
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex gap-4 flex-wrap">
        <div className="dashboard-card flex-1 min-w-[300px]">
          <h3 className="text-lg font-medium mb-4">Order Validation</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Real-time inventory verification</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Customer credit validation</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Fraud detection system</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Address verification</span>
            </li>
          </ul>
        </div>
        
        <div className="dashboard-card flex-1 min-w-[300px]">
          <h3 className="text-lg font-medium mb-4">Multi-Channel Integration</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Online store integration</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Mobile app order processing</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>In-store POS connection</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>B2B portal integration</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
