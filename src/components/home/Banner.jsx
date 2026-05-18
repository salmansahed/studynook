import { Button } from "@heroui/react";
import Link from "next/link";
import { FiGrid } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="relative min-h-[65vh] md:min-h-[75vh] flex items-center justify-center bg-white dark:bg-zinc-950 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 size-88 sm:size-120 bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 size-64 sm:size-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main container */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-950/50 bg-indigo-50/50 dark:bg-indigo-950/20 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-6">
          <span className="size-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
          Your Ultimate Study Companion
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight max-w-4xl leading-tight">
          Find Your Perfect{" "}
          <span className="bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            Study Room
          </span>
        </h1>

        {/* Subtitle or Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
          Browse and book quiet, private study rooms in your library. List your
          own room and earn.
        </p>

        {/* Action Button */}
        <Link href="/rooms" className="mt-10 w-full sm:w-auto">
          <Button
            size="lg"
            className="w-full sm:w-auto font-semibold rounded-2xl bg-indigo-600 text-white shadow-xl shadow-indigo-600/20 px-8 py-6"
          >
            <FiGrid className="size-5" />
            Explore Rooms
          </Button>
        </Link>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
    </div>
  );
};

export default Banner;
