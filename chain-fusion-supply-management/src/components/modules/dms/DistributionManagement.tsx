
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
import { Search, Filter, Plus, Boxes, BarChart, RefreshCw, PackageOpen } from 'lucide-react';

// Sample inventory data
const inventory = [
  { 
    sku: 'SKU-78954', 
    name: 'Wireless Headphones', 
    category: 'Electronics',
    warehouse: 'Chicago', 
    stock: 345, 
    allocated: 50,
    reorderLevel: 100,
    status: 'In Stock'
  },
  { 
    sku: 'SKU-45871', 
    name: 'Smart Watch', 
    category: 'Electronics',
    warehouse: 'Dallas', 
    stock: 120, 
    allocated: 35,
    reorderLevel: 50,
    status: 'In Stock'
  },
  { 
    sku: 'SKU-12365', 
    name: 'Cotton T-Shirt', 
    category: 'Clothing',
    warehouse: 'Chicago', 
    stock: 580, 
    allocated: 200,
    reorderLevel: 200,
    status: 'In Stock'
  },
  { 
    sku: 'SKU-36524', 
    name: 'Protein Powder', 
    category: 'Food & Supplements',
    warehouse: 'Los Angeles', 
    stock: 45, 
    allocated: 20,
    reorderLevel: 60,
    status: 'Low Stock'
  },
  { 
    sku: 'SKU-98745', 
    name: 'Office Chair', 
    category: 'Furniture',
    warehouse: 'Seattle', 
    stock: 5, 
    allocated: 2,
    reorderLevel: 10,
    status: 'Critical'
  },
];

const DistributionManagement = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Distribution Management System</h1>
        <p className="text-muted-foreground mt-1">Manage warehouses, inventory, and demand forecasting</p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Search inventory..." 
              className="pl-8 w-[250px] md:w-[300px]" 
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>
        <Button className="gap-1">
          <Plus className="h-4 w-4" />
          Add Inventory
        </Button>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>SKU</TableHead>
              <TableHead>Product Name</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Warehouse</TableHead>
              <TableHead>Available</TableHead>
              <TableHead>Allocated</TableHead>
              <TableHead>Reorder Level</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {inventory.map((item) => (
              <TableRow key={item.sku}>
                <TableCell className="font-medium">{item.sku}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.warehouse}</TableCell>
                <TableCell>{item.stock}</TableCell>
                <TableCell>{item.allocated}</TableCell>
                <TableCell>{item.reorderLevel}</TableCell>
                <TableCell>
                  <Badge
                    className={
                      item.status === 'In Stock' 
                        ? 'bg-green-500' 
                        : item.status === 'Low Stock' 
                        ? 'bg-amber-500' 
                        : 'bg-red-500'
                    }
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button size="sm" variant="ghost">
                    <RefreshCw className="mr-1 h-4 w-4" />
                    Restock
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
            <Boxes className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Warehouse Management</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Multi-warehouse inventory tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Bin location management</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Pick, pack, and ship workflows</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Labor management tools</span>
            </li>
          </ul>
        </div>
        
        <div className="dashboard-card col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <BarChart className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Demand Forecasting</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>ML-based demand prediction</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Seasonality analysis</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Trend detection</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Inventory optimization</span>
            </li>
          </ul>
        </div>
        
        <div className="dashboard-card col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <PackageOpen className="h-5 w-5 text-primary" />
            <h3 className="text-lg font-medium">Returns Management</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Returns authorization system</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Reverse logistics tracking</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Quality inspection workflow</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Inventory restocking automation</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DistributionManagement;
