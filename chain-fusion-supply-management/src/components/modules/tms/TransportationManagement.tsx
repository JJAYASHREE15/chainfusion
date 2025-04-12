
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
import { Search, Filter, Plus, MapPin, Route, TruckIcon, BarChart2 } from 'lucide-react';

// Sample shipment data
const shipments = [
  { 
    id: 'SHP-2023-5001', 
    order: 'ORD-2023-1001',
    origin: 'Chicago, IL', 
    destination: 'New York, NY', 
    carrier: 'FastFreight', 
    departure: '2023-04-05', 
    arrival: '2023-04-07',
    status: 'In Transit'
  },
  { 
    id: 'SHP-2023-5002', 
    order: 'ORD-2023-1002',
    origin: 'Los Angeles, CA', 
    destination: 'Phoenix, AZ', 
    carrier: 'ExpressLogistics', 
    departure: '2023-04-05', 
    arrival: '2023-04-06',
    status: 'Delivered'
  },
  { 
    id: 'SHP-2023-5003', 
    order: 'ORD-2023-1003',
    origin: 'Miami, FL', 
    destination: 'Atlanta, GA', 
    carrier: 'Continental', 
    departure: '2023-04-04', 
    arrival: '2023-04-06',
    status: 'Delayed'
  },
  { 
    id: 'SHP-2023-5004', 
    order: 'ORD-2023-1004',
    origin: 'Seattle, WA', 
    destination: 'Portland, OR', 
    carrier: 'PacificTransport', 
    departure: '2023-04-06', 
    arrival: '2023-04-07',
    status: 'Scheduled'
  },
  { 
    id: 'SHP-2023-5005', 
    order: 'ORD-2023-1005',
    origin: 'Dallas, TX', 
    destination: 'Houston, TX', 
    carrier: 'LoneStarFreight', 
    departure: '2023-04-05', 
    arrival: '2023-04-06',
    status: 'In Transit'
  },
];

const TransportationManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Transportation Management System</h1>
        <p className="text-muted-foreground mt-1">Manage shipments, carriers, and routes</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search shipments..." 
              className="pl-8 w-[250px] md:w-[300px]" 
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          New Shipment
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Shipment ID</TableHead>
              <TableHead>Order ID</TableHead>
              <TableHead>Origin</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Carrier</TableHead>
              <TableHead>Departure</TableHead>
              <TableHead>Arrival</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Track</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {shipments.map((shipment) => (
              <TableRow key={shipment.id}>
                <TableCell className="font-medium">{shipment.id}</TableCell>
                <TableCell>{shipment.order}</TableCell>
                <TableCell>{shipment.origin}</TableCell>
                <TableCell>{shipment.destination}</TableCell>
                <TableCell>{shipment.carrier}</TableCell>
                <TableCell>{shipment.departure}</TableCell>
                <TableCell>{shipment.arrival}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      shipment.status === 'In Transit' 
                        ? 'bg-blue-500' 
                        : shipment.status === 'Delivered' 
                        ? 'bg-green-500' 
                        : shipment.status === 'Delayed' 
                        ? 'bg-red-500'
                        : 'bg-amber-500'
                    }
                  >
                    {shipment.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">
                    <MapPin className="mr-1 h-4 w-4" />
                    Track
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="dashboard-card col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Route className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Route Optimization</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>AI-powered route planning</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Real-time traffic integration</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Multi-stop optimization</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Fuel consumption estimates</span>
            </li>
          </ul>
        </div>
        
        <div className="dashboard-card col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <TruckIcon className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Carrier Management</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Carrier performance ratings</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Automated carrier selection</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Contract management</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Capacity planning tools</span>
            </li>
          </ul>
        </div>
        
        <div className="dashboard-card col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Freight Auditing</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Automated invoice matching</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Discrepancy detection</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Payment processing</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Cost analysis reporting</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TransportationManagement;
