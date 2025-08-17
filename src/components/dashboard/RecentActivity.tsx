import { Clock, User, ShoppingCart, DollarSign, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface ActivityItem {
  id: string;
  type: "user" | "order" | "sale" | "analytics";
  title: string;
  description: string;
  time: string;
  amount?: number;
  user?: string;
}

const recentActivities: ActivityItem[] = [
  {
    id: "1",
    type: "order",
    title: "New Order Placed",
    description: "Order #ORD-12345 has been placed",
    time: "2 minutes ago",
    amount: 299.99,
    user: "Emma Davis"
  },
  {
    id: "2",
    type: "user",
    title: "New User Registration",
    description: "Frank Wilson joined the platform",
    time: "15 minutes ago",
    user: "Frank Wilson"
  },
  {
    id: "3",
    type: "sale",
    title: "High Value Sale",
    description: "Premium package sold",
    time: "1 hour ago",
    amount: 1299.99,
    user: "Alice Johnson"
  },
  {
    id: "4",
    type: "analytics",
    title: "Traffic Spike",
    description: "Website traffic increased by 45%",
    time: "2 hours ago"
  },
  {
    id: "5",
    type: "order",
    title: "Order Completed",
    description: "Order #ORD-12340 has been delivered",
    time: "3 hours ago",
    user: "Bob Smith"
  }
];

export function RecentActivity() {
  const getIcon = (type: string) => {
    switch (type) {
      case "user":
        return <User className="h-4 w-4" />;
      case "order":
        return <ShoppingCart className="h-4 w-4" />;
      case "sale":
        return <DollarSign className="h-4 w-4" />;
      case "analytics":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case "user":
        return "bg-gradient-info";
      case "order":
        return "bg-gradient-primary";
      case "sale":
        return "bg-gradient-success";
      case "analytics":
        return "bg-gradient-warning";
      default:
        return "bg-muted";
    }
  };

  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/30 transition-colors">
              <div className={`p-2 rounded-lg ${getIconBg(activity.type)} shadow-sm`}>
                <div className="text-white">
                  {getIcon(activity.type)}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-foreground truncate">{activity.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">{activity.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  {activity.user && (
                    <div className="flex items-center gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarFallback className="text-xs bg-muted">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-xs text-muted-foreground">{activity.user}</span>
                    </div>
                  )}
                  {activity.amount && (
                    <span className="text-sm font-medium text-success">
                      +${activity.amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}