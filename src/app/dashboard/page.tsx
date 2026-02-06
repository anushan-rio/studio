import { DashboardLayout } from "@/components/dashboard-layout";
import { BentoGrid, BentoGridItem } from "@/components/dashboard/bento-grid";
import { StatCard } from "@/components/dashboard/stat-card";
import { TimesheetChart } from "@/components/dashboard/timesheet-chart";
import { RecentCustomers } from "@/components/dashboard/recent-customers";
import {
  Activity,
  CreditCard,
  DollarSign,
  Users,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Here's a quick overview of your business.
        </p>
      </div>
      <BentoGrid className="auto-rows-[192px]">
        <BentoGridItem
          title="Total Revenue"
          className="md:col-span-2"
          header={<StatCard title="Total Revenue" value="$45,231.89" icon={<DollarSign className="h-4 w-4 text-muted-foreground" />} description="+20.1% from last month" />}
        />
        <BentoGridItem
          title="Active Projects"
          header={<StatCard title="Active Projects" value="+23" icon={<Activity className="h-4 w-4 text-muted-foreground" />} description="+5 since last week" />}
        />
        <BentoGridItem
          title="Hours Logged"
          header={<StatCard title="Hours Logged (Week)" value="1,234" icon={<Users className="h-4 w-4 text-muted-foreground" />} description="+180.1 hours from last week" />}
        />
        <BentoGridItem
          title="Pending Payroll"
          className="md:col-span-2"
          header={<StatCard title="Pending Payroll" value="$5,782.00" icon={<CreditCard className="h-4 w-4 text-muted-foreground" />} description="Due next Friday" />}
        />
         <BentoGridItem
          title="Weekly Hours"
          className="md:col-span-2 row-span-2"
          header={<TimesheetChart />}
        />
        <BentoGridItem
          title="New Customers"
          className="md:col-span-2 row-span-2"
          header={<RecentCustomers />}
        />
      </BentoGrid>
    </DashboardLayout>
  );
}
