"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const reviews = [
  {
    name: "Sarah L.",
    title: "CEO of Innovate Inc.",
    quote:
      "TimeFlow has revolutionized how we manage our team. The automated timesheets and payroll have saved us countless hours. It's an indispensable tool for any modern business.",
    avatarId: "user-avatar-1",
  },
  {
    name: "Michael B.",
    title: "Project Manager, Tech Solutions",
    quote:
      "The AI leave management is a game-changer. It intelligently handles requests, ensuring our projects are always adequately staffed. I can't imagine going back.",
    avatarId: "user-avatar-2",
  },
  {
    name: "Jessica P.",
    title: "HR Director at Creative Co.",
    quote:
      "Finally, a tool that does it all! From customer data to payroll, TimeFlow has streamlined our operations. The dashboard gives me all the insights I need at a glance.",
    avatarId: "user-avatar-4",
  },
];

export function UserReviews() {
  const [currentReview, setCurrentReview] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentReview((prev) => (prev + 1) % reviews.length);
        setIsFading(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentReview];
  const avatar = PlaceHolderImages.find((img) => img.id === review.avatarId);

  return (
    <section className="bg-secondary border-y">
      <div className="container py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
            Loved by Teams Everywhere
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            See what our customers have to say about their experience with
            TimeFlow.
          </p>
          <Card className="mt-10 overflow-hidden">
            <CardContent
              className={cn(
                "p-8 transition-opacity duration-500 ease-in-out",
                isFading ? "opacity-0" : "opacity-100"
              )}
            >
              <blockquote className="text-xl italic text-foreground">
                "{review.quote}"
              </blockquote>
              <div className="mt-6 flex items-center justify-center space-x-4">
                {avatar && (
                  <Image
                    src={avatar.imageUrl}
                    alt={avatar.description}
                    width={40}
                    height={40}
                    className="rounded-full"
                    data-ai-hint={avatar.imageHint}
                  />
                )}
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.title}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
