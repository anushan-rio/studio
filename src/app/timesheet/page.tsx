import { DashboardLayout } from "@/components/dashboard-layout";

export default function TimesheetPage() {
  return (
    <DashboardLayout>
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold">Timesheet</h1>
        <p className="text-muted-foreground">
          Track your team's time here.
        </p>
      </div>
    </DashboardLayout>
  );
}
