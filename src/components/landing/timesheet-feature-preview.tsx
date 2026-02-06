"use client";
import { CheckCircle } from "lucide-react";

const featurePoints = [
  "Log work hours with detailed notes and tags.",
  "Review work hours in an intuitive calendar view.",
  "Ensure transparency for both employees and managers.",
  "Generate accurate invoices based on tracked time.",
];

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Create an array for calendar days. 
const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const day = i - 3; // Start calendar on a certain day of the week
    const isToday = day === 24;
    let hours: number | null = null;
    const workDays: {[key: number]: number} = {
        15: 8, 16: 8, 17: 12, 18: 8, 22: 8, 23: 12, 24: 8, 25: 8, 29: 12, 30: 8
    };

    if (day in workDays) {
        hours = workDays[day];
    }
    
    return {
        day: day > 0 && day <= 31 ? day : null,
        hours,
        isToday
    }
});


export function TimesheetFeaturePreview() {
  return (
    <section className="py-20 sm:py-28 bg-secondary/20 overflow-x-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="animate-fade-up">
              <h2 className="text-3xl font-headline tracking-tight sm:text-4xl">
                Intuitive and Flexible Time Tracking
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Effortlessly log work hours. TimeFlow provides a clear, visual record of your team's work, fostering trust and accountability.
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
          <div className="order-1 md:order-2 animate-fade-up [animation-delay:200ms]">
            <div className="rounded-xl shadow-2xl ring-1 ring-black/10 bg-card p-4 lg:p-6">
              <div className="flex justify-between items-center mb-4">
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
                    {item.hours && (
                      <div 
                        className="absolute bottom-1 left-1 right-1 rounded-sm overflow-hidden animate-fade-in" 
                        style={{animationDelay: `${50 * i}ms`}}
                      >
                        <div className={`flex items-center justify-center w-full h-4 rounded-sm ${item.hours > 8 ? 'bg-primary/90' : 'bg-chart-2/90'} text-white text-[9px] font-bold`}>
                            {item.hours}hrs
                        </div>
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
