import RoomsCard from "@/components/home/RoomsCard";
import RefineSidebar from "@/components/rooms/RefineSidebar";
import { MdOutlineOtherHouses } from "react-icons/md";

const RoomsPage = async ({ searchParams }) => {
  const getSearchParams = await searchParams;
  const searchInput = getSearchParams?.search || "";
  const amenities = getSearchParams?.amenities || "";
  const minPrice = getSearchParams?.minPrice || "";
  const maxPrice = getSearchParams?.maxPrice || "";
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?search=${searchInput}&amenities=${amenities}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
    { cache: "no-store" },
  );
  const rooms = await res.json();
  return (
    <div className="flex flex-col sm:flex-row gap-12 max-w-7xl mx-auto py-10 sm:py-16 px-3">
      <div className="sm:w-[40%] lg:w-[30%] w-full">
        <RefineSidebar />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full sm:w-[60%] lg:w-[70%]">
        {rooms.length > 0 ? (
          rooms.map((room) => <RoomsCard key={room._id} room={room} />)
        ) : (
          <div className="text-center space-y-4 border-2 border-dashed border-purple-300 dark:border-purple-100/50 flex flex-col justify-center items-center py-16 px-6 rounded-lg col-span-1 lg:col-span-2 bg-white shadow-lg dark:bg-gray-800">
            <MdOutlineOtherHouses size={70} className="text-purple-800 dark:text-purple-400" />
            <h1 className="text-2xl sm:text-3xl font-bold">No Available Rooms Found</h1>
            <p className="text-gray-600 dark:text-gray-400 w-full sm:max-w-[90%] lg:max-w-[70%]">
              We couldn&apos;t find any rooms matching your selected filters.
              Try resetting the criteria or choosing different amenities!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RoomsPage;
