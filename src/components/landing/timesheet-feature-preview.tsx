"use client";
import Image from "next/image";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const featurePoints = [
  "Capture activity with automated screenshots.",
  "Review work hours in an intuitive calendar view.",
  "Ensure transparency for both employees and managers.",
  "Generate accurate invoices based on tracked time.",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Create an array for calendar days. 
// This is just for demonstration purposes.
const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // Start calendar on a certain day of the week
    const hasScreenshot = [15, 16, 17, 18, 22, 23, 24, 25, 29, 30].includes(day);
    const isToday = day === 24;
    return {
        day: day > 0 && day <= 31 ? day : null,
        hasScreenshot,
        isToday
    }
});


export function TimesheetFeaturePreview() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-slide-in-from-left">
              <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
                Visual, Verifiable Time Tracking
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Move beyond simple timers. TimeFlow's screenshot feature provides a clear, visual record of work as it happens, fostering trust and accountability.
              </p>
            </div>
            <ul className="mt-8 space-y-4">
              {featurePoints.map((point, index) => (
                <li key={index} className="flex items-start animate-fade-up" style={{ animationDelay: `${200 * (index + 2)}ms`}}>
                  <CheckCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2 animate-slide-in-from-right [animation-delay:200ms]">
            <div className="rounded-xl shadow-2xl ring-1 ring-black/10 bg-card p-4 lg:p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <button className="p-1 rounded-md hover:bg-accent"><ChevronLeft className="w-5 h-5" /></button>
                    <button className="p-1 rounded-md hover:bg-accent"><ChevronRight className="w-5 h-5" /></button>
                </div>
                <h3 className="font-semibold text-lg">October 2024</h3>
                <div className="text-sm rounded-md border px-2 py-1 cursor-default">Today</div>
              </div>
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {daysOfWeek.map(day => (
                  <div key={day} className="text-center text-xs text-muted-foreground font-semibold">{day}</div>
                ))}
                {calendarDays.map((item, i) => (
                  <div key={i} className={`relative aspect-square rounded-md p-1 group transition-all duration-300 hover:bg-accent ${item.isToday ? 'bg-primary/10 border-primary' : 'bg-transparent'}`}>
                    {item.day && <span className={`text-xs ${item.isToday ? 'font-bold text-primary' : 'text-muted-foreground'}`}>{item.day}</span>}
                    {item.hasScreenshot && (
                      <div className="absolute inset-1.5 sm:inset-1 rounded-sm overflow-hidden animate-fade-in" style={{animationDelay: `${50 * i}ms`}}>
                        <Image 
                          src={`https://picsum.photos/seed/ss${item.day}/50/50`} 
                          alt={`Screenshot for day ${item.day}`}
                          width={50}
                          height={50}
                          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                          data-ai-hint="desktop screenshot"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
