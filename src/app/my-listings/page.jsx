export const metadata = {
  title: "StudyNook - My Listings",
};

import RoomsCard from "@/components/home/RoomsCard";
import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";
import { HiPlus } from "react-icons/hi";
import { IoAddCircleOutline, IoLibraryOutline } from "react-icons/io5";

const { token } = await auth.api.getToken({
  headers: await headers(),
});

const MyListingsPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user.id;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/owner/${userId}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );
  const myRooms = await res.json();
  return (
    <div className="max-w-7xl mx-auto px-3 py-8 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-10 text-center sm:text-left gap-4 sm:gap-20 md:gap-44 lg:gap-90">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            My Listings
          </h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Manage and monitor your{" "}
            <span className="text-indigo-600 dark:text-indigo-500">
              {myRooms.length}
            </span>{" "}
            active study spaces on StudyNook.
          </p>
        </div>
        <Link href="/add-room">
          <Button className="h-10 sm:h-12 px-4 sm:px-6 bg-indigo-600 hover:bg-indigo-700 rounded-lg  group">
            <HiPlus className="group-hover:scale-150 transition-all duration-300" />
            Add Room
          </Button>
        </Link>
      </div>
      {myRooms.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {myRooms.map((room) => (
            <RoomsCard key={room._id} room={room} />
          ))}
        </div>
      ) : (
        <div className="w-full my-12 p-12 flex flex-col items-center justify-center text-center border-2 border-dashed border-gray-300 dark:border-gray-700 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-xl transition-all duration-300">
          {/* Library Icon */}
          <div className="p-5 rounded-full bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 mb-6 shadow-inner ring-4 ring-indigo-500/10">
            <IoLibraryOutline className="size-12 animate-pulse" />
          </div>

          {/* Title & Description */}
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 tracking-tight">
            No Active Listings Found
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mb-8 leading-relaxed">
            You haven&apos;t listed any study rooms on StudyNook yet. Got a
            quiet space to share with the community?
          </p>

          {/* Call-to-Action Button */}
          <Button
            href="/add-room"
            className="h-10 sm:h-12 px-4 sm:px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 group"
          >
            Create Your First Listing
            <IoAddCircleOutline className="size-5 group-hover:scale-125 transition-all duration-300" />
          </Button>
        </div>
      )}
    </div>
  );
};

export default MyListingsPage;
