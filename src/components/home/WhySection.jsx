import { FiCalendar, FiShield, FiSliders } from "react-icons/fi";

const WhySection = () => {
  // Card data objects with icons, titles, and descriptions
  const cards = [
    {
      icon: (
        <FiCalendar className="size-6 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Easy Booking",
      description:
        "Pick a date, choose an hour, see the cost — done. No back-and-forth emails or paperwork.",
    },
    {
      icon: (
        <FiShield className="size-6 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Conflict-Free Scheduling",
      description:
        "Smart overlap detection prevents double-bookings, so the room you reserve is the room you get.",
    },
    {
      icon: (
        <FiSliders className="size-6 text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Manage Your Listings",
      description:
        "Own a room? List it, set your hourly rate, and keep full control from your dashboard.",
    },
  ];

  return (
    <section className="relative w-full py-20 overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
        {/* Section Heading */}
        <div className="space-y-2 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight leading-[1.1]">
            Why{" "}
            <span className="bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              StudyNook?
            </span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
            Built around the way real students study — quiet, focused, and on
            your schedule.
          </p>
        </div>

        {/* Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group flex flex-col items-center gap-6 p-8 bg-white/60 dark:bg-zinc-900/40 rounded-3xl border border-zinc-100 dark:border-zinc-800 backdrop-blur-xl shadow-xl shadow-indigo-600/5 dark:shadow-black/20 hover:border-indigo-500/50 hover:shadow-indigo-500/10 hover:scale-[1.03] transition-all duration-300 ease-out"
            >
              {/* Icon Holder Box */}
              <div className="flex items-center justify-center size-14 rounded-full border border-indigo-100 dark:border-indigo-950/50 bg-indigo-50/50 dark:bg-indigo-950/20 shadow-inner">
                {card.icon}
              </div>

              {/* Card Text Section */}
              <div className="space-y-2.5">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                  {card.title}
                </h3>
                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
