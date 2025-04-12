
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Truck, 
  Warehouse, 
  BarChart3, 
  Settings, 
  Users, 
  PanelLeft
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

type User = {
  name: string;
  email: string;
  role: string;
};

const Sidebar = ({ isSidebarOpen, toggleSidebar }: SidebarProps) => {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    // Check for user in localStorage or sessionStorage
    const storedUser = localStorage.getItem('user') || sessionStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  
  const navigation = [
    { name: 'Dashboard', to: '/', icon: LayoutDashboard },
    { name: 'Order Management', to: '/orders', icon: ShoppingCart },
    { name: 'Transportation', to: '/transportation', icon: Truck },
    { name: 'Distribution', to: '/distribution', icon: Warehouse },
    { name: 'Analytics', to: '/analytics', icon: BarChart3 },
    { name: 'User Management', to: '/users', icon: Users },
    { name: 'Settings', to: '/settings', icon: Settings },
  ];

  // Get user initials
  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 z-20 bg-background/80 backdrop-blur-sm transition-opacity md:hidden",
          isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={toggleSidebar}
      />
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col border-r bg-card transition-transform md:translate-x-0",
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
              <span className="text-lg font-bold text-primary-foreground">CF</span>
            </div>
            <span className="text-xl font-bold tracking-tight">ChainFusion</span>
          </div>
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="md:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Close Sidebar</span>
          </Button>
        </div>
        <nav className="flex-1 overflow-auto py-6 px-4">
          <div className="space-y-1">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) => cn(
                  "nav-link",
                  isActive && "active"
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </NavLink>
            ))}
          </div>
        </nav>
        <div className="border-t p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-muted">
              <span className="text-sm font-medium">
                {user ? getUserInitials(user.name) : 'JD'}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium">{user ? user.name : 'John Doe'}</p>
              <p className="text-xs text-muted-foreground">{user ? user.role : 'Supply Chain Manager'}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
