import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const RoomsCard = ({ room }) => {
  const {
    _id,
    image,
    name,
    description,
    pricePerHour,
    floor,
    capacity,
    bookings,
    amenities,
  } = room;
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 border border-[#e5e7eb] dark:border-gray-700 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300">
      {/* Room Image */}
      <div className="relative h-56 w-full overflow-hidden bg-gray-100">
        <Image
          src={image}
          alt={name}
          fill
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* Price Tag */}
        <span className="absolute top-4 right-4 bg-[#e0f2fe] text-[#0369a1] text-xs font-bold px-2.5 py-1 rounded-md border border-[#bae6fd]">
          ${pricePerHour}/hr
        </span>
      </div>

      {/* Card Content Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xl font-bold text-[#111827] dark:text-white line-clamp-1">
          {name}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm text-[#4b5563] dark:text-gray-400 line-clamp-2 min-h-10">
          {description}
        </p>

        {/* Info or Metadata Section (Floor, Capacity, Bookings) */}
        <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-600 flex items-center justify-between text-xs text-[#6b7280] dark:text-gray-200">
          <span className="flex items-center gap-1">🏢 {floor}</span>
          <span className="flex items-center gap-1">👥 {capacity} people</span>
          <span className="flex items-center gap-1">${bookings} bookings</span>
        </div>

        {/* Amenities (Tags) */}
        <div className="mt-4 flex flex-wrap gap-1.5 flex-1 content-start">
          {amenities?.slice(0, 3).map((amenity, idx) => (
            <span
              key={idx}
              className="bg-[#fff7ed] text-[#c2410c] text-[11px] font-semibold px-2.5 py-1 rounded-md border border-[#ffedd5]"
            >
              {amenity}
            </span>
          ))}
          {amenities?.length > 3 && (
            <span className="bg-gray-50 text-gray-600 text-[11px] font-semibold px-2.5 py-1 rounded-md border border-gray-200">
              +{amenities.length - 3} more
            </span>
          )}
        </div>

        {/* Action Button */}
        <Link href={_id}>
        <Button className="mt-6 w-full py-5 bg-[#fafafa] dark:bg-gray-100 hover:bg-[#f4f4f5] text-[#111827] font-semibold rounded-xl border border-[#e4e4e7] transition-colors duration-200">
          View Details
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default RoomsCard;
