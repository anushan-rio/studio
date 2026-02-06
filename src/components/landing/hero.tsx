import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="border-b bg-gradient-to-br from-background via-secondary to-accent">
      <div className="container py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up">
            Streamline Your Workflow,
            <span className="text-primary"> Unleash Your Team</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl animate-fade-up [animation-delay:200ms]">
            TimeFlow is the all-in-one platform to automate timesheets, payroll,
            and leave management. Get back to focusing on what matters most:
            growing your business.
          </p>
          <div className="mt-10 flex justify-center gap-4 animate-fade-up [animation-delay:400ms]">
            <Button asChild size="lg">
              <Link href="/dashboard">Get Started for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
