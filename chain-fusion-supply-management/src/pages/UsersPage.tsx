
import React, { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PlusCircle, User, Search, MoreHorizontal, Edit, Trash2, UserPlus, X, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface UserType {
  id: number;
  name: string;
  role: string;
  email: string;
  status: 'active' | 'inactive';
  lastActive?: string;
  joinDate: string;
}

const UsersPage = () => {
  // Initial users data
  const initialUsers: UserType[] = [
    { 
      id: 1, 
      name: 'Jayashree', 
      role: 'Supply Chain Manager', 
      email: 'jayashree@chainfusion.com',
      status: 'active',
      lastActive: '1 hour ago',
      joinDate: '2023-04-15',
    },
    { 
      id: 2, 
      name: 'Alex Johnson', 
      role: 'Warehouse Manager', 
      email: 'alex@chainfusion.com',
      status: 'active',
      lastActive: '3 hours ago',
      joinDate: '2023-06-22',
    },
    { 
      id: 3, 
      name: 'Maria Garcia', 
      role: 'Transport Coordinator', 
      email: 'maria@chainfusion.com',
      status: 'active',
      lastActive: '2 days ago',
      joinDate: '2023-08-10',
    },
    { 
      id: 4, 
      name: 'David Lee', 
      role: 'Order Processor', 
      email: 'david@chainfusion.com',
      status: 'inactive',
      lastActive: '2 weeks ago',
      joinDate: '2023-09-05',
    },
    { 
      id: 5, 
      name: 'Sarah Wilson', 
      role: 'Inventory Specialist', 
      email: 'sarah@chainfusion.com',
      status: 'active',
      lastActive: 'Just now',
      joinDate: '2023-11-18',
    },
  ];

  const [users, setUsers] = useState<UserType[]>(initialUsers);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [isAddUserDialogOpen, setIsAddUserDialogOpen] = useState(false);
  const [isEditUserDialogOpen, setIsEditUserDialogOpen] = useState(false);
  const [isDeleteUserDialogOpen, setIsDeleteUserDialogOpen] = useState(false);
  const [isUserDetailsDialogOpen, setIsUserDetailsDialogOpen] = useState(false);
  
  // Form fields for add/edit user
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
  });

  // Filter users based on search query
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Open add user dialog
  const handleAddUserClick = () => {
    setFormData({
      name: '',
      email: '',
      role: 'Order Processor',
    });
    setIsAddUserDialogOpen(true);
  };

  // Open edit user dialog
  const handleEditUserClick = (user: UserType) => {
    setSelectedUser(user);
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
    setIsEditUserDialogOpen(true);
  };

  // Open delete user dialog
  const handleDeleteUserClick = (user: UserType) => {
    setSelectedUser(user);
    setIsDeleteUserDialogOpen(true);
  };

  // Open user details dialog
  const handleViewUserClick = (user: UserType) => {
    setSelectedUser(user);
    setIsUserDetailsDialogOpen(true);
  };

  // Handle form input changes
  const handleFormInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form role selection
  const handleRoleChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      role: value
    }));
  };

  // Add new user
  const handleAddUser = () => {
    const newUser: UserType = {
      id: Math.max(...users.map(u => u.id)) + 1,
      name: formData.name,
      email: formData.email,
      role: formData.role,
      status: 'active',
      lastActive: 'Just now',
      joinDate: new Date().toISOString().split('T')[0],
    };

    setUsers(prev => [...prev, newUser]);
    setIsAddUserDialogOpen(false);
    toast.success(`User ${formData.name} added successfully`);
  };

  // Update existing user
  const handleUpdateUser = () => {
    if (!selectedUser) return;
    
    setUsers(prev => prev.map(user => 
      user.id === selectedUser.id 
        ? { ...user, name: formData.name, email: formData.email, role: formData.role }
        : user
    ));
    
    setIsEditUserDialogOpen(false);
    toast.success(`User ${formData.name} updated successfully`);
  };

  // Delete user
  const handleDeleteUser = () => {
    if (!selectedUser) return;
    
    setUsers(prev => prev.filter(user => user.id !== selectedUser.id));
    setIsDeleteUserDialogOpen(false);
    toast.success(`User ${selectedUser.name} deleted successfully`);
  };

  // Toggle user status
  const handleToggleUserStatus = (user: UserType) => {
    setUsers(prev => prev.map(u => 
      u.id === user.id 
        ? { ...u, status: u.status === 'active' ? 'inactive' : 'active' }
        : u
    ));
    
    toast.success(`User ${user.name} ${user.status === 'active' ? 'deactivated' : 'activated'} successfully`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">User Management</h1>
            <p className="text-muted-foreground mt-1">Manage users and their access in ChainFusion</p>
          </div>
          <Button onClick={handleAddUserClick}>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search users..."
              className="pl-8"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="rounded-md">
              Total Users: {users.length}
            </Badge>
            <Badge variant="outline" className="rounded-md bg-green-500/10 text-green-500 hover:bg-green-500/20">
              Active: {users.filter(u => u.status === 'active').length}
            </Badge>
            <Badge variant="outline" className="rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20">
              Inactive: {users.filter(u => u.status === 'inactive').length}
            </Badge>
          </div>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <Card key={user.id} className={`overflow-hidden ${user.status === 'inactive' ? 'opacity-70' : ''}`}>
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="-mr-2">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleViewUserClick(user)}>
                        <User className="mr-2 h-4 w-4" />
                        View Details
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleEditUserClick(user)}>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit User
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleToggleUserStatus(user)}>
                        {user.status === 'active' ? (
                          <>
                            <X className="mr-2 h-4 w-4" />
                            Deactivate
                          </>
                        ) : (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Activate
                          </>
                        )}
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem 
                        onClick={() => handleDeleteUserClick(user)}
                        className="text-destructive"
                      >
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete User
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
                <CardDescription>{user.email}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-primary">
                    <User className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{user.role}</p>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Badge 
                        variant="outline" 
                        className={`rounded-sm px-1 ${
                          user.status === 'active' 
                            ? 'bg-green-500/10 text-green-500' 
                            : 'bg-red-500/10 text-red-500'
                        }`}
                      >
                        {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                      </Badge>
                      <span className="mx-2">•</span>
                      <span>Last active: {user.lastActive}</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end mt-4 space-x-2">
                  <Button variant="outline" size="sm" onClick={() => handleViewUserClick(user)}>View</Button>
                  <Button variant="outline" size="sm" onClick={() => handleEditUserClick(user)}>Edit</Button>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Empty state when no users match search */}
          {filteredUsers.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
              <div className="rounded-full bg-muted p-4 mb-4">
                <User className="h-8 w-8 text-muted-foreground" />
              </div>
              <h3 className="font-medium mb-1">No users found</h3>
              <p className="text-muted-foreground text-sm mb-4">
                No users match your search criteria. Try different search terms.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Add User Dialog */}
      <Dialog open={isAddUserDialogOpen} onOpenChange={setIsAddUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New User</DialogTitle>
            <DialogDescription>
              Add a new user to the ChainFusion system. All users will receive an email with login instructions.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleFormInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@chainfusion.com"
                value={formData.email}
                onChange={handleFormInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select value={formData.role} onValueChange={handleRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Supply Chain Manager">Supply Chain Manager</SelectItem>
                  <SelectItem value="Warehouse Manager">Warehouse Manager</SelectItem>
                  <SelectItem value="Transport Coordinator">Transport Coordinator</SelectItem>
                  <SelectItem value="Order Processor">Order Processor</SelectItem>
                  <SelectItem value="Inventory Specialist">Inventory Specialist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleAddUser} disabled={!formData.name || !formData.email || !formData.role}>
              <UserPlus className="mr-2 h-4 w-4" />
              Add User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit User Dialog */}
      <Dialog open={isEditUserDialogOpen} onOpenChange={setIsEditUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit User</DialogTitle>
            <DialogDescription>
              Update user information. Changes will be applied immediately.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="space-y-2">
              <Label htmlFor="edit-name">Full Name</Label>
              <Input
                id="edit-name"
                name="name"
                value={formData.name}
                onChange={handleFormInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-email">Email Address</Label>
              <Input
                id="edit-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="edit-role">Role</Label>
              <Select value={formData.role} onValueChange={handleRoleChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Supply Chain Manager">Supply Chain Manager</SelectItem>
                  <SelectItem value="Warehouse Manager">Warehouse Manager</SelectItem>
                  <SelectItem value="Transport Coordinator">Transport Coordinator</SelectItem>
                  <SelectItem value="Order Processor">Order Processor</SelectItem>
                  <SelectItem value="Inventory Specialist">Inventory Specialist</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={handleUpdateUser} disabled={!formData.name || !formData.email || !formData.role}>
              Save Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete User Dialog */}
      <Dialog open={isDeleteUserDialogOpen} onOpenChange={setIsDeleteUserDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete User</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this user? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <div className="py-3">
            <p>You are about to delete <strong>{selectedUser?.name}</strong> ({selectedUser?.email}).</p>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button variant="destructive" onClick={handleDeleteUser}>
              <Trash2 className="mr-2 h-4 w-4" />
              Delete User
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* User Details Dialog */}
      <Dialog open={isUserDetailsDialogOpen} onOpenChange={setIsUserDetailsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>
          {selectedUser && (
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="h-16 w-16 rounded-full bg-muted flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{selectedUser.name}</h3>
                  <p className="text-muted-foreground">{selectedUser.email}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 py-2">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                  <p>{selectedUser.role}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Status</h4>
                  <Badge 
                    variant="outline" 
                    className={`mt-1 ${
                      selectedUser.status === 'active' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-red-500/10 text-red-500'
                    }`}
                  >
                    {selectedUser.status.charAt(0).toUpperCase() + selectedUser.status.slice(1)}
                  </Badge>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Joined</h4>
                  <p>{selectedUser.joinDate}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Last Active</h4>
                  <p>{selectedUser.lastActive}</p>
                </div>
              </div>
              
              <div className="pt-4">
                <h4 className="text-sm font-medium text-muted-foreground mb-2">Recent Activity</h4>
                <div className="space-y-2 text-sm">
                  <div className="border-l-2 border-muted pl-4 py-1">
                    <p className="font-medium">Logged in</p>
                    <p className="text-muted-foreground">Today, 10:30 AM</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4 py-1">
                    <p className="font-medium">Updated order #12345</p>
                    <p className="text-muted-foreground">Yesterday, 2:15 PM</p>
                  </div>
                  <div className="border-l-2 border-muted pl-4 py-1">
                    <p className="font-medium">Generated inventory report</p>
                    <p className="text-muted-foreground">May 12, 2023, 9:45 AM</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
            <Button onClick={() => handleEditUserClick(selectedUser!)}>Edit User</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </DashboardLayout>
  );
};

export default UsersPage;
