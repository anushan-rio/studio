import { DashboardLayout } from "@/components/dashboard-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export default function PayrollPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Payroll</h1>
        <p className="text-muted-foreground">
          Automate and manage your payroll processing.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payroll Run</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
                <div className="text-2xl font-bold">$12,231.89</div>
                <p className="text-xs text-muted-foreground">Scheduled for next Friday</p>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Start Payroll Run</Button>
            </CardFooter>
        </Card>
        <Card>
            <CardHeader className="pb-2">
                <CardTitle>History</CardTitle>
                <CardDescription>View past payroll runs and reports.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">No recent history.</p>
            </CardContent>
            <CardFooter>
                 <Button variant="outline" className="w-full">View History</Button>
            </CardFooter>
        </Card>
      </div>
    </DashboardLayout>
  );
}
