export const metadata = {
  title: "StudyNook - Add Room",
};

import AddNewRoomForm from "@/components/add-new-room/AddNewRoomForm";

const AddRoom = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 sm:py-16 px-3">
      <div className="text-center mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Add a{" "}
          <span className="bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
            New Room
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2 px-4 sm:px-0">
          Share your study room with others. You can edit or remove it any time
        </p>
      </div>
      <AddNewRoomForm />
    </div>
  );
};

export default AddRoom;
