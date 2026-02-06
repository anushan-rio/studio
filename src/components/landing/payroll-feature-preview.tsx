"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

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
  return (
    <section className="py-20 sm:py-28 bg-secondary/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fade-up">
            <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
              Automated Payroll, Simplified
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Run payroll in minutes, not hours. TimeFlow automates everything from calculations to direct deposits, ensuring your team gets paid accurately and on time, every time.
            </p>
            <ul className="mt-8 space-y-4">
              {featurePoints.map((point, index) => (
                <li key={index} className="flex items-start animate-fade-up" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 animate-fade-up [animation-delay:400ms]">
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
                            className="flex items-center p-2 rounded-lg hover:bg-accent/50 transition-colors animate-fade-up"
                            style={{ animationDelay: `${150 * (index + 1)}ms`}}
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
