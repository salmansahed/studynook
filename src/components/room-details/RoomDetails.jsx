import { auth } from "@/lib/auth";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  IoArrowBack,
  IoLayersOutline,
  IoPeopleOutline,
  IoCalendarOutline,
  IoCheckmarkCircle,
} from "react-icons/io5";
import EditForm from "./EditForm";

const RoomDetails = async ({ room }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const {
    image,
    name,
    description,
    hourlyRate,
    floor,
    capacity,
    amenities,
    listedDate,
    totalBookings,
    ownerName,
    ownerImage,
    ownerEmail,
    ownerId,
  } = room;
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:py-14">
      {/* Back Button */}
      <Link href="/rooms">
        <Button variant="ghost">
          <IoArrowBack className="text-lg" />
          Back
        </Button>
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Room Image Container */}
          <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-300 shadow-xs">
            <Image
              src={image}
              alt={name}
              width={1000}
              height={700}
              className="w-full h-70 sm:h-125 object-cover"
            />
          </div>

          {/* Title + Booking Badge */}
          <div className="flex justify-between items-start sm:flex-row flex-col gap-4 sm:gap-6">
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {name}
              </h1>
              <p className="text-sm text-gray-500 font-medium">
                Listed {listedDate} 20 May 2024
              </p>
            </div>

            {/* Bookings Badge */}
            <div>
              <p className="flex items-center gap-2 border rounded-full px-3 py-1 bg-gray-300 text-pink-600">
                <IoCheckmarkCircle className="text-purple-600" />
                {totalBookings || 0} bookings
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm sm:text-base max-w-3xl">
            {description}
          </p>

          {/* Amenities Section */}
          <div className="pt-6 sm:pt-8 border-t border-[#d8d1c7]/60">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-5">
              Amenities
            </h2>

            {/* Amenities List */}
            <div className="flex flex-wrap gap-2.5">
              {amenities?.map((amenity, idx) => (
                <span
                  key={idx}
                  className="border px-4 rounded-full py-1.5 bg-gray-100"
                >
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Booking Card */}
        <div className="lg:sticky lg:top-10 space-y-6 w-full">
          {/* Booking Card Box */}
          <div className="bg-white border border-gray-300 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
            {/* Price Row */}
            <div className="flex items-end justify-between border-b border-gray-300 pb-4">
              <h2 className="text-4xl sm:text-5xl font-black text-indigo-600 tracking-tight">
                ${hourlyRate}
              </h2>
              <p className="text-gray-500 text-xl font-medium">per hour</p>
            </div>

            {/* Specifications Detail Info */}
            <div className="space-y-4 text-sm sm:text-base">
              <div className="flex items-center gap-3.5 text-[#18352f]/90 font-medium">
                <IoLayersOutline className="text-xl text-gray-400" />
                <span>{floor} Floor</span>
              </div>

              <div className="flex items-center gap-3.5 text-[#18352f]/90 font-medium">
                <IoPeopleOutline className="text-xl text-gray-400" />
                <span>Up to {capacity} people</span>
              </div>

              <div className="flex items-center gap-3.5 text-[#18352f]/90 font-medium">
                <IoCalendarOutline className="text-xl text-gray-400" />
                <span>{totalBookings || 0} total bookings</span>
              </div>
            </div>

            {/* Book Now Button */}
            <Button className="w-full bg-indigo-600 rounded-lg">
              <IoCalendarOutline className="text-lg" />
              Book Now
            </Button>
            {userId === ownerId && (
              <div className="flex justify-between items-center gap-4">
                <EditForm room={room} />
                <Button variant="danger-soft" className="rounded-lg w-full">
                  Delete
                </Button>
              </div>
            )}
          </div>

          {/* Listed By Card Box */}
          <div className="bg-white border border-gray-300 rounded-2xl p-5 sm:p-6 shadow-xs">
            <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-400 font-extrabold mb-4">
              Listed By
            </p>

            <div className="flex items-center gap-4">
              <Image
                src={ownerImage}
                alt={ownerName}
                width={60}
                height={60}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border border-[#f7f4ef] shadow-2xs"
              />

              <div className="min-w-0">
                <h3 className="font-bold text-base sm:text-lg text-[#18352f] truncate">
                  {ownerName}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm truncate">
                  {ownerEmail}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
