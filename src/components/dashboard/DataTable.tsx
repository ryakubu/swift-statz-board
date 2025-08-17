import { useState } from "react";
import { Search, Filter, Download, MoreHorizontal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Customer {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending";
  orders: number;
  revenue: number;
  joinDate: string;
}

const sampleData: Customer[] = [
  {
    id: "CUS001",
    name: "Alice Johnson",
    email: "alice.johnson@email.com",
    status: "active",
    orders: 24,
    revenue: 3580.50,
    joinDate: "2024-01-15"
  },
  {
    id: "CUS002",
    name: "Bob Smith",
    email: "bob.smith@email.com",
    status: "active",
    orders: 18,
    revenue: 2940.25,
    joinDate: "2024-02-03"
  },
  {
    id: "CUS003",
    name: "Carol White",
    email: "carol.white@email.com",
    status: "pending",
    orders: 5,
    revenue: 750.00,
    joinDate: "2024-03-20"
  },
  {
    id: "CUS004",
    name: "David Brown",
    email: "david.brown@email.com",
    status: "inactive",
    orders: 12,
    revenue: 1860.75,
    joinDate: "2024-01-08"
  },
  {
    id: "CUS005",
    name: "Emma Davis",
    email: "emma.davis@email.com",
    status: "active",
    orders: 31,
    revenue: 4720.80,
    joinDate: "2024-01-22"
  },
  {
    id: "CUS006",
    name: "Frank Wilson",
    email: "frank.wilson@email.com",
    status: "active",
    orders: 22,
    revenue: 3350.40,
    joinDate: "2024-02-14"
  },
  {
    id: "CUS007",
    name: "Grace Miller",
    email: "grace.miller@email.com",
    status: "pending",
    orders: 8,
    revenue: 1200.00,
    joinDate: "2024-03-15"
  },
  {
    id: "CUS008",
    name: "Henry Taylor",
    email: "henry.taylor@email.com",
    status: "active",
    orders: 15,
    revenue: 2250.60,
    joinDate: "2024-02-28"
  }
];

export function DataTable() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredData = sampleData.filter((customer) => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || customer.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-gradient-success text-success-foreground",
      inactive: "bg-muted text-muted-foreground",
      pending: "bg-gradient-warning text-warning-foreground"
    };
    return variants[status as keyof typeof variants] || variants.active;
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <CardTitle className="text-xl font-bold">Customer Management</CardTitle>
          <div className="flex flex-col sm:flex-row gap-2">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 w-full sm:w-64"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                  All Customers
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("active")}>
                  Active
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("pending")}>
                  Pending
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setStatusFilter("inactive")}>
                  Inactive
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="font-semibold">Customer ID</TableHead>
                <TableHead className="font-semibold">Name</TableHead>
                <TableHead className="font-semibold">Email</TableHead>
                <TableHead className="font-semibold">Status</TableHead>
                <TableHead className="font-semibold text-right">Orders</TableHead>
                <TableHead className="font-semibold text-right">Revenue</TableHead>
                <TableHead className="font-semibold">Join Date</TableHead>
                <TableHead className="font-semibold w-12">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((customer) => (
                <TableRow key={customer.id} className="hover:bg-muted/30 transition-colors">
                  <TableCell className="font-mono text-sm font-medium">
                    {customer.id}
                  </TableCell>
                  <TableCell className="font-medium">{customer.name}</TableCell>
                  <TableCell className="text-muted-foreground">{customer.email}</TableCell>
                  <TableCell>
                    <Badge className={getStatusBadge(customer.status)}>
                      {customer.status.charAt(0).toUpperCase() + customer.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-medium">{customer.orders}</TableCell>
                  <TableCell className="text-right font-medium">
                    ${customer.revenue.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </TableCell>
                  <TableCell>{new Date(customer.joinDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>View Details</DropdownMenuItem>
                        <DropdownMenuItem>Edit Customer</DropdownMenuItem>
                        <DropdownMenuItem>Send Email</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-destructive">
                          Delete Customer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-muted-foreground">
            Showing {filteredData.length} of {sampleData.length} customers
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}