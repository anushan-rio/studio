import { DashboardLayout } from "@/components/dashboard-layout";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <DashboardLayout>
      <div className="animate-fade-up">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account settings.
        </p>
      </div>
      <div className="mt-8 max-w-xl animate-fade-up [animation-delay:200ms]">
        <Card>
            <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>This is where your profile settings would be.</CardDescription>
            </CardHeader>
            <CardContent>
                <p>A settings form could go here.</p>
            </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
