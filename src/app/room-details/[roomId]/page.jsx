import RoomDetails from "@/components/room-details/RoomDetails";

const RoomDetailsPage = async ({ params }) => {
  const { roomId } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomId}`,
    {
      cache: "no-store",
    },
  );

  const room = await res.json();

  return (
    <div>
      <RoomDetails room={room} />
    </div>
  );
};

export default RoomDetailsPage;
