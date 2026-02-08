"use client";

import { useState } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    price: { monthly: 29, annual: 290 },
    description: "For small teams just getting started.",
    features: ["Up to 10 users", "Timesheet & Payroll", "Basic Reporting"],
    cta: "Choose Starter",
  },
  {
    name: "Pro",
    price: { monthly: 79, annual: 790 },
    description: "For growing businesses that need more power.",
    features: [
      "Up to 50 users",
      "All Starter features",
      "AI Leave Management",
      "Customer Data Module",
      "Advanced Reporting",
    ],
    cta: "Choose Pro",
    isPopular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom needs.",
    features: [
      "Unlimited users",
      "All Pro features",
      "Dedicated Support",
      "Custom Integrations",
      "SSO & Security",
    ],
    cta: "Contact Sales",
  },
];

export function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="pricing" ref={ref} className="py-20 sm:py-28">
      <div className="container">
        <div className={cn("max-w-2xl mx-auto text-center", isVisible ? "animate-fade-up" : "opacity-0")}>
          <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
            Choose the Right Plan for Your Team
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Simple, transparent pricing that scales with you.
          </p>
        </div>

        <div className={cn("flex items-center justify-center gap-4 mt-8", isVisible ? "animate-fade-up" : "opacity-0")} style={{ animationDelay: isVisible ? '200ms' : "0ms" }}>
          <Label htmlFor="billing-cycle">Monthly</Label>
          <Switch
            id="billing-cycle"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <Label htmlFor="billing-cycle">
            Annual{" "}
            <span className="text-primary font-semibold">(Save 2 months)</span>
          </Label>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={cn(
                `flex flex-col transition-transform duration-300 hover:-translate-y-2 ${tier.isPopular ? "border-primary ring-2 ring-primary" : ""}`,
                isVisible ? "animate-fade-up" : "opacity-0"
              )}
              style={{ animationDelay: isVisible ? `${200 * (index + 2)}ms` : "0ms" }}
            >
              <CardHeader className={tier.isPopular ? "bg-primary/5" : ""}>
                <CardTitle>{tier.name}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
                <div className="pt-4">
                  {typeof tier.price === "string" ? (
                    <p className="text-4xl font-bold">{tier.price}</p>
                  ) : (
                    <div className={cn("flex items-baseline", isVisible ? "animate-fade-in" : "opacity-0")} key={isAnnual ? 'annual' : 'monthly'}>
                      <p className="text-4xl font-bold">
                        ${isAnnual ? tier.price.annual / 12 : tier.price.monthly}
                      </p>
                      <span className="text-muted-foreground ml-1">/month</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="flex-1 pt-6">
                <ul className="space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full" variant={tier.isPopular ? 'default' : 'outline'}>
                  <Link href="/dashboard">{tier.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
