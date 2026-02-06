"use client";

export function TrustedBy() {
  const companies = ["Techcube", "NextGen", "HurryUp", "Etrenal", "Techcube", "NextGen", "HurryUp", "Etrenal"]; // Doubled for seamless loop

  return (
    <section className="py-12 bg-secondary/50">
      <div className="container text-center animate-fade-up">
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
