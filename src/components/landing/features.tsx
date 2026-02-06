import {
  Timer,
  Users,
  CreditCard,
  CalendarCheck,
  LayoutDashboard,
  Clock,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: <Timer className="w-8 h-8 text-primary" />,
    title: "Automated Timesheet Management",
    description: "Automatically track employee hours and project time with precision, eliminating manual entry.",
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
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Customer Data Management",
    description: "Easily capture, store, and manage customer information in a centralized, accessible database.",
  },
  {
    icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
    title: "Interactive Dashboard",
    description: "Get a visual overview of key metrics and insights with our customizable, interactive dashboard.",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" />,
    title: "Live Timesheet Screenshots",
    description: "Visually track time with automated screenshots in a calendar view for transparency and accuracy.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center animate-fade-up">
          <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
            Everything You Need, All in One Place
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            TimeFlow provides a complete suite of tools to manage your workforce
            efficiently.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-2 transition-transform duration-300 hover:-translate-y-2 animate-fade-up"
              style={{ animationDelay: `${200 * (index + 2)}ms` }}
            >
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
