"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { HiOutlineMinus } from "react-icons/hi";
import { toast } from "react-toastify";
const CancelBtn = ({ booking }) => {
  const router = useRouter();
  const handleCancel = async (bookingId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: "Cancelled" }),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Booking cancelled successfully!", {
        position: "top-center",
      });
      router.refresh("/my-bookings");
    }
  };
  return (
    <div>
      <AlertDialog>
        {booking.status === "Confirmed" ? (
          <Button variant="danger-soft">Cancel</Button>
        ) : (
          <HiOutlineMinus className="text-danger" />
        )}
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Are you sure you want to cancel this booking?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p className="text-sm text-gray-500">
                  This action will cancel your reservation for{" "}
                  <strong>{booking?.roomName}</strong> on {booking?.date}. This
                  cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  No, Keep it
                </Button>
                <Button
                  onClick={() => handleCancel(booking._id)}
                  slot="close"
                  variant="danger"
                >
                  Yes, Cancel Booking
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default CancelBtn;
