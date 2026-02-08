"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

export function TrustedBy() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const companies = ["Techcube", "NextGen", "HurryUp", "Etrenal", "Techcube", "NextGen", "HurryUp", "Etrenal"]; // Doubled for seamless loop

  return (
    <section ref={ref} className={cn("py-12 bg-secondary/50", isVisible ? "animate-fade-up" : "opacity-0")}>
      <div className="container text-center">
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
          Trusted by the world's best companies
        </h3>
        <div className="relative overflow-hidden">
            <div className="flex animate-marquee hover:[animation-play-state:paused]">
                {companies.map((company, index) => (
                <div key={index} className="mx-12 flex-shrink-0 text-2xl font-bold text-muted-foreground/60">
                    {company}
                </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
