import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your dashboard.
        </p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 animate-fade-up [animation-delay:200ms]">
        <Card>
          <CardHeader>
            <CardTitle>Getting Started</CardTitle>
            <CardDescription>This is your main dashboard view.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>You can customize this page with widgets and data relevant to your business.</p>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
