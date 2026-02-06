import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { UserReviews } from "@/components/landing/user-reviews";
import { PricingTiers } from "@/components/landing/pricing-tiers";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <UserReviews />
      <PricingTiers />
    </div>
  );
}
