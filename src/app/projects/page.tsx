import { DashboardLayout } from "@/components/dashboard-layout";

export default function ProjectsPage() {
  return (
    <DashboardLayout>
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold">Project Management</h1>
        <p className="text-muted-foreground">
          Manage your projects here.
        </p>
      </div>
    </DashboardLayout>
  );
}
