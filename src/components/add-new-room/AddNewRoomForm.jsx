"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { IoRefreshOutline, IoRocketOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const AddNewRoomForm = () => {
  const router = useRouter();
  const { data } = authClient.useSession();
  const userId = data?.user?.id;
  const userName = data?.user?.name;
  const userImage = data?.user?.image;
  const userEmail = data?.user?.email;
  const formattedDate = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectedAmenities = formData.getAll("amenities");
    const restData = Object.fromEntries(formData.entries());
    const finalRoomData = {
      name: restData.name,
      description: restData.description,
      image: restData.image,
      floor: Number(restData.floor),
      capacity: Number(restData.capacity),
      hourlyRate: Number(restData.hourlyRate),
      amenities: selectedAmenities,
      ownerId: userId,
      ownerName: userName,
      ownerImage: userImage,
      ownerEmail: userEmail,
      listedDate: formattedDate,
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalRoomData),
    });
    const data = await res.json();
    if (data.insertedId) {
      toast.success("Room created successfully!", {
        position: "top-center",
      });
      router.push("/my-listings");
    } else{
      toast.error("Failed to create room. Please try again.", {
        position: "top-center",
      });
    }
  };
  return (
    <Form
      onSubmit={onSubmit}
      className="w-full max-w-160 shadow-lg border-2 border-dashed p-8 rounded-lg"
    >
      <Fieldset>
        <FieldGroup className="space-y-6">
          <TextField
            isRequired
            name="name"
            validate={(value) => {
              if (value.length < 5) {
                return "Name must be at least 5 characters";
              }

              return null;
            }}
          >
            <Label>Room Name</Label>
            <Input placeholder="Enter your room name" className="h-12" />
            <FieldError />
          </TextField>
          {/* Description Field */}
          <TextField
            isRequired
            name="description"
            validate={(value) => {
              if (value.length < 30) {
                return "Description must be at least 30 characters";
              }

              return null;
            }}
          >
            <Label>Description</Label>
            <TextArea
              placeholder="Enter a description for your room..."
              className="h-28"
            />
            <Description>Minimum 30 characters</Description>
            <FieldError />
          </TextField>
          {/* Image URL Field */}
          <TextField
            isRequired
            name="image"
            validate={(value) => {
              if (!value) return "Image URL is required";
              const isImage = /\.(jpeg|jpg|gif|png|webp)$/i.test(value);
              if (!isImage) {
                return "Please enter a valid image URL ending with .jpg, .jpeg, .png, or .webp";
              }
              return null;
            }}
          >
            <Label>Image URL</Label>
            <Input
              type="url"
              placeholder="Enter an image URL for your room"
              className="h-12"
            />
            <FieldError />
          </TextField>
          {/* Floor */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <TextField isRequired name="floor">
              <Label>Floor</Label>
              <Input
                type="number"
                placeholder="Enter floor number"
                className="h-12"
              />
              <FieldError />
            </TextField>
            <TextField isRequired name="capacity">
              <Label>Capacity</Label>
              <Input
                type="number"
                placeholder="Enter capacity"
                className="h-12"
              />
              <FieldError />
            </TextField>
            <TextField isRequired name="hourlyRate">
              <Label>Hourly Rate</Label>
              <Input
                type="number"
                placeholder="Enter hourly rate"
                className="h-12"
              />
              <FieldError />
            </TextField>
          </div>
          {/* Amenities */}
          <div>
            <h1>Amenities</h1>
            <CheckboxGroup
              name="amenities"
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              {/* 1 */}
              <Checkbox value="Whiteboard" className="">
                <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-base font-semibold">Whiteboard</Label>
                </Checkbox.Content>
              </Checkbox>
              {/* 2 */}
              <Checkbox value="Projector" className="">
                <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-base font-semibold">Projector</Label>
                </Checkbox.Content>
              </Checkbox>
              {/* 3 */}
              <Checkbox value="Wi-Fi" className="">
                <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-base font-semibold">Wi-Fi</Label>
                </Checkbox.Content>
              </Checkbox>
              {/* 4 */}
              <Checkbox value="Power Outlets" className="">
                <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-base font-semibold">
                    Power Outlets
                  </Label>
                </Checkbox.Content>
              </Checkbox>
              {/* 5 */}
              <Checkbox value="Quiet Zone" className="">
                <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-base font-semibold">Quiet Zone</Label>
                </Checkbox.Content>
              </Checkbox>
              {/* 6 */}
              <Checkbox value="Air Conditioning" className="">
                <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                  <Checkbox.Indicator />
                </Checkbox.Control>
                <Checkbox.Content>
                  <Label className="text-base font-semibold">
                    Air Conditioning
                  </Label>
                </Checkbox.Content>
              </Checkbox>
            </CheckboxGroup>
          </div>
        </FieldGroup>
        <Fieldset.Actions>
          <Button
            type="submit"
            className="h-12 px-6 flex items-center gap-2 text-sm font-semibold text-white bg-linear-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-purple-400 hover:from-indigo-500 hover:to-pink-500 shadow-md shadow-indigo-600/20 rounded-xl transition-all duration-200 active:scale-95 cursor-pointer group"
          >
            Publish Room
            <IoRocketOutline className="size-5 group-hover:-translate-y-1 transition-transform duration-200" />
          </Button>
          <Button
            type="reset"
            variant="danger-soft"
            className="rounded-xl h-12 px-12 group dark:text-orange-400"
          >
            <IoRefreshOutline className="group-hover:rotate-180 transition-transform duration-400" />
            Reset
          </Button>
        </Fieldset.Actions>
      </Fieldset>
    </Form>
  );
};

export default AddNewRoomForm;
