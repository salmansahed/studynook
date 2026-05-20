"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { MdDeleteOutline } from "react-icons/md";

const DeleteBtn = ({ room }) => {
  const router = useRouter();
  const deleteRoom = async (roomId) => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${roomId}`,
      {
        method: "DELETE",
      },
    );
    const data = await res.json();
    if (data.deletedCount > 0) {
      router.push("/rooms");
    }
  };
  return (
    <div>
      <AlertDialog>
        <Button variant="danger-soft" className="rounded-lg w-full">
          <MdDeleteOutline />
          Delete
        </Button>
        <AlertDialog.Backdrop>
          <AlertDialog.Container>
            <AlertDialog.Dialog className="sm:max-w-100">
              <AlertDialog.CloseTrigger />
              <AlertDialog.Header>
                <AlertDialog.Icon status="danger" />
                <AlertDialog.Heading>
                  Delete room permanently?
                </AlertDialog.Heading>
              </AlertDialog.Header>
              <AlertDialog.Body>
                <p>
                  This will permanently delete <strong>{room.name}</strong> and
                  all of its data. This action cannot be undone.
                </p>
              </AlertDialog.Body>
              <AlertDialog.Footer>
                <Button slot="close" variant="tertiary">
                  Cancel
                </Button>
                <Button
                  onClick={() => deleteRoom(room._id)}
                  slot="close"
                  variant="danger"
                >
                  Delete
                </Button>
              </AlertDialog.Footer>
            </AlertDialog.Dialog>
          </AlertDialog.Container>
        </AlertDialog.Backdrop>
      </AlertDialog>
    </div>
  );
};

export default DeleteBtn;
