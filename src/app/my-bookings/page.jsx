export const metadata = {
  title: "StudyNook - My Bookings",
};

import CancelBtn from "@/components/my-bookings/CancelBtn";
import { auth } from "@/lib/auth";
import { Button, Chip, Table } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import { BsPatchCheck } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";
import { IoCloseCircleOutline } from "react-icons/io5";

const MyBookingsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`);
  const bookings = await res.json();
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;
  const myBookings = bookings.filter((booking) => booking.userId === userId);

  return (
    <div className="container mx-auto py-10 sm:py-16 px-3">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">My Bookings</h1>
        <p className="text-gray-600 dark:text-gray-300">
          Your study journey starts here. View and manage your scheduled study
          rooms.
        </p>
      </div>
      {myBookings.length > 0 ? (
        <div>
          <Table>
            <Table.ScrollContainer>
              <Table.Content aria-label="Team members" className="min-w-150">
                <Table.Header>
                  <Table.Column isRowHeader className="uppercase">
                    Room
                  </Table.Column>
                  <Table.Column className="uppercase">Date</Table.Column>
                  <Table.Column className="uppercase">Time</Table.Column>
                  <Table.Column className="uppercase">Cost</Table.Column>
                  <Table.Column className="uppercase">Status</Table.Column>
                  <Table.Column className="uppercase">Action</Table.Column>
                </Table.Header>
                <Table.Body>
                  {myBookings.map((booking) => (
                    <Table.Row key={booking._id}>
                      <Table.Cell className="space-y-1">
                        <Image
                          src={booking.image}
                          alt={booking.roomName}
                          width={50}
                          height={50}
                          className="border rounded object-cover w-20 h-14"
                        />
                        <Link href={`/room-details/${booking.roomId}`} className="hover:text-blue-400">
                          {booking.roomName}
                        </Link>
                      </Table.Cell>
                      <Table.Cell className="text-base">
                        {booking.date}
                      </Table.Cell>
                      <Table.Cell className="text-base">
                        {booking.startTime} - {booking.endTime}
                      </Table.Cell>
                      <Table.Cell className="text-base">
                        ${booking.totalCost.toFixed(2)}
                      </Table.Cell>
                      <Table.Cell className="text-base">
                        {booking.status === "Confirmed" ? (
                          <Chip color="success" className="text-base">
                            <BsPatchCheck />
                            {booking.status}
                          </Chip>
                        ) : (
                          <Chip color="danger" className="text-base">
                            <IoCloseCircleOutline />
                            {booking.status}
                          </Chip>
                        )}
                      </Table.Cell>
                      <Table.Cell>
                        <CancelBtn booking={booking} />
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table.Content>
            </Table.ScrollContainer>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center border-2 border-dashed rounded-lg bg-white dark:bg-gray-700 shadow">
          <div className="bg-gray-100 dark:bg-gray-600 p-4 rounded-full mb-4">
            <CiCalendarDate className="text-4xl" />
          </div>

          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
            No bookings yet
          </h3>
          <p className="text-gray-500 dark:text-gray-300 mt-1 max-w-sm">
            Looks like you haven&apos;t made any reservations yet. Browse our
            rooms and book your perfect study space!
          </p>

          <Link href="/rooms">
            <Button className="rounded-lg bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 mt-4">
              Browse Rooms
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyBookingsPage;
