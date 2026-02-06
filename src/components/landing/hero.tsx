import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="bg-secondary border-b">
      <div className="container py-24 sm:py-32 lg:py-40">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-headline tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Streamline Your Workflow,
            <span className="text-primary"> Unleash Your Team</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            TimeFlow is the all-in-one platform to automate timesheets, payroll,
            and leave management. Get back to focusing on what matters most:
            growing your business.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/login">Get Started for Free</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
