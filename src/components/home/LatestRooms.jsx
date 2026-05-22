import { Button } from "@heroui/react";
import RoomsCard from "./RoomsCard";

const LatestRooms = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/available-study-rooms`,
  );
  const rooms = await res.json();

  return (
    <div className="py-16 max-w-7xl mx-auto px-3">
      {/* Section Header */}
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6 sm:gap-0 sm:items-end mb-10">
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] dark:text-white tracking-tight">
            Available{" "}
            <span className="bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              Study Rooms
            </span>
          </h2>
          <p className="mt-2 text-[#4b5563] dark:text-gray-300">
            Hand-picked rooms recently added to StudyNook.
          </p>
        </div>
        <Button
          variant="outline"
          className="rounded-lg border-gray-300 text-gray-700 dark:text-gray-300 hover:bg-indigo-600 dark:hover:bg-indigo-600 hover:text-white duration-300 ease-in-out dark:hover:text-white transition-all"
        >
          View all rooms
        </Button>
      </div>

      {/* Card Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {rooms.map((room) => (
          <RoomsCard key={room._id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default LatestRooms;
