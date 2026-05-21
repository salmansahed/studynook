"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import {
  Button,
  Label,
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import { toast } from "react-toastify";
const BookNowBtn = ({ room }) => {
  const router = useRouter();
  const { name, hourlyRate, _id, image } = room;
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };
  const [date, setDate] = useState(getTodayDate());
  const [startTime, setStartTime] = useState("09:00");
  const [endTime, setEndTime] = useState("10:00");

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const calculateTotal = () => {
    const startHour = parseInt(startTime.split(":")[0]);
    const endHour = parseInt(endTime.split(":")[0]);
    const duration = endHour - startHour;
    return duration > 0 ? duration * hourlyRate : 0;
  };

  const dateObj = new Date(date);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  const { data: session } = authClient.useSession();
  const user = session?.user;
  const userId = session?.user?.id;
  const userName = session?.user?.name;
  const userImage = session?.user?.image;
  const userEmail = session?.user?.email;

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const restData = Object.fromEntries(formData.entries());
    const startHour = Number(startTime.split(":")[0]);
    const endHour = Number(endTime.split(":")[0]);
    const bookingData = {
      roomId: _id,
      roomName: name,
      date: formattedDate,
      startTime: startHour,
      endTime: endHour,
      userId: userId,
      userName: userName,
      userImage: userImage,
      userEmail: userEmail,
      notes: restData.notes,
      totalCost: calculateTotal(),
      status: "Confirmed",
      image: image,
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Room booked successfully!", {
        position: "top-center",
      });
      router.refresh("/my-bookings");
    }
    if (!res.ok) {
      toast.error(
        "This time slot is already booked. Please choose another time.",
        {
          position: "top-center",
        },
      );
    }
  };

  return (
    <div>
      {user ? (
        <Modal>
          <Button className="w-full bg-indigo-600 rounded-lg">
            <IoCalendarOutline className="text-lg" />
            Book Now
          </Button>
          <Modal.Backdrop>
            <Modal.Container placement="auto">
              <Modal.Dialog className="sm:max-w-md">
                <Modal.CloseTrigger />
                <Modal.Header>
                  <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                    <Envelope className="size-5 text-indigo-600" />
                  </Modal.Icon>
                  <Modal.Heading>
                    Book <span className="font-bold">{name}</span>
                  </Modal.Heading>
                  <p className="mt-1.5 text-sm leading-5 text-muted">
                    Pick a date and time slot. Bookings run on the hour.
                  </p>
                </Modal.Header>
                <Modal.Body className="p-6">
                  <Surface variant="default">
                    <form onSubmit={onSubmit} className="flex flex-col gap-4">
                      {/* Date */}
                      <TextField
                        className="w-full"
                        name="date"
                        variant="secondary"
                      >
                        <Label>Date</Label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full p-2 border rounded-md"
                        />
                      </TextField>
                      {/* Time Slots */}
                      <div className="flex gap-4">
                        {/* Start Time */}
                        <TextField
                          className="w-full"
                          name="startTime"
                          variant="secondary"
                        >
                          <Label>Start</Label>
                          <select
                            className="w-full p-2 border rounded-md"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                          >
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </TextField>
                        {/* End Time */}
                        <TextField
                          className="w-full"
                          name="endTime"
                          variant="secondary"
                        >
                          <Label>End</Label>
                          <select
                            className="w-full p-2 border rounded-md"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                          >
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </TextField>
                      </div>
                      {/* Notes */}
                      <TextField
                        className="w-full"
                        name="notes"
                        type="text"
                        variant="secondary"
                      >
                        <Label>Special note (optional)</Label>
                        <TextArea
                          placeholder="Enter any additional notes"
                          className="w-full p-2 h-26 border rounded-md"
                        />
                      </TextField>
                      <TextField>
                        <div className="flex justify-between items-end bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                          <p className="text-lg font-medium">Total Cost</p>
                          <h1 className="text-2xl font-bold">
                            ${calculateTotal()}
                          </h1>
                        </div>
                      </TextField>
                      <Modal.Footer>
                        <Button slot="close" variant="danger-soft">
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          slot="close"
                          className="bg-indigo-600"
                        >
                          Confirm Booking
                        </Button>
                      </Modal.Footer>
                    </form>
                  </Surface>
                </Modal.Body>
              </Modal.Dialog>
            </Modal.Container>
          </Modal.Backdrop>
        </Modal>
      ) : (
        <Link href="/login">
          <Button className="w-full bg-indigo-600 rounded-lg">
            <IoCalendarOutline className="text-lg" />
            Login to Book
          </Button>
        </Link>
      )}
    </div>
  );
};

export default BookNowBtn;
