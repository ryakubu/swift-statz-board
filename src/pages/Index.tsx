import { DollarSign, Users, ShoppingCart, TrendingUp } from "lucide-react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/AppSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { StatCard } from "@/components/dashboard/StatCard";
import { DataTable } from "@/components/dashboard/DataTable";
import { RecentActivity } from "@/components/dashboard/RecentActivity";

const Index = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$54,239",
      change: "+12.5% from last month",
      changeType: "positive" as const,
      icon: DollarSign,
      gradient: "bg-gradient-success"
    },
    {
      title: "Active Users",
      value: "2,847",
      change: "+8.2% from last month",
      changeType: "positive" as const,
      icon: Users,
      gradient: "bg-gradient-info"
    },
    {
      title: "Orders",
      value: "1,423",
      change: "+5.1% from last month",
      changeType: "positive" as const,
      icon: ShoppingCart,
      gradient: "bg-gradient-primary"
    },
    {
      title: "Performance",
      value: "94.2%",
      change: "-2.1% from last month",
      changeType: "negative" as const,
      icon: TrendingUp,
      gradient: "bg-gradient-warning"
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <AppSidebar />
        <main className="flex-1 flex flex-col overflow-hidden">
          <DashboardHeader />
          <div className="flex-1 overflow-auto">
            <div className="p-6 space-y-6">
              {/* Welcome Section */}
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                  Welcome back! Here's an overview of your business performance.
                </p>
              </div>

              {/* Statistics Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} {...stat} />
                ))}
              </div>

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Data Table - Takes 2/3 of the space */}
                <div className="lg:col-span-2">
                  <DataTable />
                </div>
                
                {/* Recent Activity - Takes 1/3 of the space */}
                <div className="lg:col-span-1">
                  <RecentActivity />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
