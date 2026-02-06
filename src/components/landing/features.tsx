import {
  Clock,
  Users,
  CreditCard,
  CalendarCheck,
  LayoutDashboard,
  Quote,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Automated Timesheet Management",
    description: "Automatically track employee hours and project time with precision, eliminating manual entry.",
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Customer Data Entry",
    description: "Easily capture, store, and manage customer information in a centralized, accessible database.",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    title: "Automated Payroll Processing",
    description: "Streamline payroll calculations and payment distribution, ensuring accuracy and timeliness.",
  },
  {
    icon: <CalendarCheck className="w-8 h-8 text-primary" />,
    title: "AI-Powered Leave Management",
    description: "Our AI predicts optimal staffing and auto-approves leave requests based on team needs.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Interactive Dashboard",
    description: "Get a visual overview of key metrics and insights with our customizable, interactive dashboard.",
  },
  {
    icon: <Quote className="w-8 h-8 text-primary" />,
    title: "User Review Display",
    description: "Showcase customer credibility with animated quotes that highlight user satisfaction.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            TimeFlow provides a complete suite of tools to manage your workforce
            efficiently.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="p-2">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="pt-2">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
