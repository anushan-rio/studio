"use client";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const featurePoints = [
  "Capture activity with automated screenshots.",
  "Review work hours in an intuitive calendar view.",
  "Ensure transparency for both employees and managers.",
  "Generate accurate invoices based on tracked time.",
];

export function TimesheetFeaturePreview() {
  const image = PlaceHolderImages.find((img) => img.id === "timesheet-screenshot");

  return (
    <section className="py-20 sm:py-28 bg-secondary/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
              Visual, Verifiable Time Tracking
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Move beyond simple timers. TimeFlow's screenshot feature provides a clear, visual record of work as it happens, fostering trust and accountability.
            </p>
            <ul className="mt-8 space-y-4">
              {featurePoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={1200}
                    height={800}
                    className="rounded-xl shadow-2xl ring-1 ring-black/10"
                    data-ai-hint={image.imageHint}
                />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
