"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const featurePoints = [
  "Automate complex payroll calculations and tax withholdings.",
  "Seamless direct deposit integration for timely payments.",
  "Generate detailed payroll reports with just one click.",
  "Ensure compliance with automated tax form filings.",
];

const payrollData = [
    { name: "John Doe", avatar: "https://picsum.photos/seed/p1/40/40", hours: 40, rate: 25, total: 1000, status: "Paid" },
    { name: "Jane Smith", avatar: "https://picsum.photos/seed/p2/40/40", hours: 38, rate: 30, total: 1140, status: "Paid" },
    { name: "Peter Jones", avatar: "https://picsum.photos/seed/p3/40/40", hours: 42, rate: 22, total: 924, status: "Paid" },
    { name: "Emily White", avatar: "https://picsum.photos/seed/p4/40/40", hours: 40, rate: 50, total: 2000, status: "Pending" },
]

export function PayrollFeaturePreview() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2, triggerOnce: true });

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-secondary/20 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn("order-2 md:order-1", isVisible ? "animate-slide-in-from-left" : "opacity-0")}>
            <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
              Automated Payroll, Simplified
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Run payroll in minutes, not hours. TimeFlow automates everything from calculations to direct deposits, ensuring your team gets paid accurately and on time, every time.
            </p>
            <ul className="mt-8 space-y-4">
              {featurePoints.map((point, index) => (
                <li key={index} className={cn("flex items-start", isVisible ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: isVisible ? `${200 * (index + 2)}ms` : "0ms"}}>
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={cn("order-1 md:order-2", isVisible ? "animate-slide-in-from-right" : "opacity-0")} style={{ animationDelay: isVisible ? "200ms" : "0ms" }}>
            <Card className="shadow-2xl ring-1 ring-black/10">
                <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                        <span>October Payroll Run</span>
                        <span className="text-sm font-normal text-muted-foreground">Oct 1 - Oct 31, 2024</span>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-4">
                    {payrollData.map((employee, index) => (
                         <div 
                            key={employee.name} 
                            className={cn("flex items-center p-2 rounded-lg hover:bg-accent/50 transition-colors", isVisible ? "animate-fade-up" : "opacity-0")}
                            style={{ animationDelay: isVisible ? `${150 * (index + 1)}ms` : "0ms"}}
                        >
                            <Avatar className="h-9 w-9">
                                <AvatarImage src={employee.avatar} alt={employee.name} data-ai-hint="person portrait"/>
                                <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div className="ml-4 flex-1">
                                <p className="text-sm font-medium">{employee.name}</p>
                                <p className="text-xs text-muted-foreground">{employee.hours} hrs @ ${employee.rate}/hr</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold">${employee.total.toLocaleString()}</p>
                                <Badge variant={employee.status === 'Paid' ? 'secondary' : 'outline'} className="text-xs">
                                    {employee.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
