"use client";

import Link from "next/link";
// react-icons থেকে তোর প্রজেক্ট থিমের সাথে মানানসই মিনিমাল আইকন নিলাম
import { FiSearch, FiClock, FiCheckCircle, FiArrowRight } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      stepNumber: "01",
      icon: (
        <FiSearch className="size-6 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Browse Rooms",
      description:
        "Filter by floor, capacity, amenities, or hourly rate to find your perfect fit.",
    },
    {
      stepNumber: "02",
      icon: <FiClock className="size-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Pick a Time",
      description:
        "Choose a date and an open time slot — we'll prevent any booking conflicts.",
    },
    {
      stepNumber: "03",
      icon: (
        <FiCheckCircle className="size-6 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Study Peacefully",
      description:
        "Get an instant confirmation, show up, and focus. Manage everything from your dashboard.",
    },
  ];

  return (
    <section className="relative w-full bg-white dark:bg-zinc-950 py-20 overflow-hidden">
      <div className="absolute top-0 right-1/4 size-96 bg-purple-500/5 dark:bg-purple-500/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 size-96 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        {/* Heading Section */}
        <div className="space-y-3 mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-zinc-900 dark:text-zinc-50 tracking-tight">
            How It{" "}
            <span className="bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-500 dark:text-zinc-400 max-w-xl mx-auto font-medium">
            From browsing to booked in under a minute.
          </p>
        </div>

        {/* Card Container */}
        <div className="relative mt-8">
          {/* Responsive Grid Layout: Mobile 1 Column, Desktop 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 relative z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="group flex flex-col items-center bg-white/50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/80 rounded-3xl p-8 pt-10 shadow-xl shadow-zinc-200/30 dark:shadow-black/20 hover:border-indigo-500/40 dark:hover:border-indigo-500/30 transition-all duration-300 ease-out hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Step Number */}
                <div className="absolute top-6 right-8 text-4xl font-black text-zinc-200/60 dark:text-zinc-900/40 group-hover:text-indigo-500/10 transition-colors duration-300 select-none">
                  {step.stepNumber}
                </div>

                {/* Icon Holder Box */}
                <div className="flex items-center justify-center size-16 rounded-2xl border border-indigo-100 dark:border-indigo-950/60 bg-white dark:bg-indigo-950/20 shadow-xs group-hover:scale-110 group-hover:shadow-md group-hover:shadow-indigo-500/10 transition-all duration-300">
                  {step.icon}
                </div>

                {/* Text Section */}
                <div className="mt-6 space-y-2.5">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button Section */}
        <div className="mt-16 flex justify-center">
          <Link href="/rooms">
            <button className="h-12 px-6 flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 hover:from-indigo-500 hover:to-pink-500 shadow-md shadow-indigo-600/20 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer group">
              Start Browsing
              <FiArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
