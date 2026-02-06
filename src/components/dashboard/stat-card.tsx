import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  type StatCardProps = {
    title: string;
    value: string;
    icon: React.ReactNode;
    description?: string;
  };
  
  export function StatCard({ title, value, icon, description }: StatCardProps) {
    return (
      <>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-0">
          <CardTitle className="text-sm font-medium">{title}</CardTitle>
          {icon}
        </CardHeader>
        <CardContent className="p-0">
          <div className="text-2xl font-bold">{value}</div>
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </CardContent>
      </>
    );
  }
  