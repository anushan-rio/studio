import { DashboardLayout } from "@/components/dashboard-layout";
import { LeaveRequestForm } from "@/components/leave-request-form";

export default function LeaveManagementPage() {
  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Leave Management</h1>
        <p className="text-muted-foreground">
          Submit a leave request and our AI will review it based on team needs.
        </p>
      </div>
      <div className="max-w-2xl mx-auto">
        <LeaveRequestForm />
      </div>
    </DashboardLayout>
  );
}
