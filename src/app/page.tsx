import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { UserReviews } from "@/components/landing/user-reviews";
import { PricingTiers } from "@/components/landing/pricing-tiers";
import { TrustedBy } from "@/components/landing/trusted-by";
import { TimesheetFeaturePreview } from "@/components/landing/timesheet-feature-preview";
import { PayrollFeaturePreview } from "@/components/landing/payroll-feature-preview";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <TrustedBy />
      <Features />
      <TimesheetFeaturePreview />
      <PayrollFeaturePreview />
      <UserReviews />
      <PricingTiers />
    </div>
  );
}
