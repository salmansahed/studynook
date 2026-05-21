import CancelBtn from "@/components/my-bookings/CancelBtn";
import { auth } from "@/lib/auth";
import { Button, Chip, Table } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { BsPatchCheck } from "react-icons/bs";
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
    <div className="container mx-auto py-16">
      <div className="mb-8 space-y-2">
        <h1 className="text-4xl font-bold">My Bookings</h1>
        <p className="text-gray-600">
          Manage your upcoming and past room reservations.
        </p>
      </div>
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
                      <h2>{booking.roomName}</h2>
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
    </div>
  );
};

export default MyBookingsPage;
