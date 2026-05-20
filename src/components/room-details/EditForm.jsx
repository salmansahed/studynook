"use client";

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
  Modal,
  Surface,
  TextArea,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { IoCreateOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const EditForm = ({ room }) => {
  const router = useRouter();
  const {
    image,
    name,
    description,
    hourlyRate,
    floor,
    capacity,
    amenities,
    _id,
  } = room;
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
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${_id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalRoomData),
      },
    );
    const data = await res.json();
    if (data.modifiedCount > 0) {
      toast.success("Room details updated successfully!", {
        position: "top-center",
      });
      router.refresh();
    } else {
      toast.error("Failed to update room details. Please try again.", {
        position: "top-center",
      });
    }
  };
  return (
    <div>
      <Modal>
        <Button variant="outline" className="rounded-lg w-full">
          <IoCreateOutline />
          Update
        </Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-2xl w-full">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <IoCreateOutline size={20} />
                </Modal.Icon>
                <Modal.Heading>Update Room Details</Modal.Heading>
                <p className="mt-1.5 text-sm leading-5 text-muted">
                  Please fill out the form below to update the room details.
                </p>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <Form onSubmit={onSubmit} className="w-full">
                    <Fieldset>
                      <FieldGroup className="space-y-6">
                        <TextField
                          defaultValue={name}
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
                          <Input
                            placeholder="Enter your room name"
                            className="h-12"
                          />
                          <FieldError />
                        </TextField>
                        {/* Description Field */}
                        <TextField
                          defaultValue={description}
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
                          defaultValue={image}
                          isRequired
                          name="image"
                          validate={(value) => {
                            if (!value) return "Image URL is required";
                            const isImage = /\.(jpeg|jpg|gif|png|webp)$/i.test(
                              value,
                            );
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
                          <TextField
                            isRequired
                            name="floor"
                            defaultValue={floor}
                          >
                            <Label>Floor</Label>
                            <Input
                              type="number"
                              placeholder="Enter floor number"
                              className="h-12"
                            />
                            <FieldError />
                          </TextField>
                          <TextField
                            isRequired
                            name="capacity"
                            defaultValue={capacity}
                          >
                            <Label>Capacity</Label>
                            <Input
                              type="number"
                              placeholder="Enter capacity"
                              className="h-12"
                            />
                            <FieldError />
                          </TextField>
                          <TextField
                            isRequired
                            name="hourlyRate"
                            defaultValue={hourlyRate}
                          >
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
                            defaultValue={amenities}
                            name="amenities"
                            className="grid grid-cols-1 sm:grid-cols-3 gap-3"
                          >
                            {/* 1 */}
                            <Checkbox value="Whiteboard" className="">
                              <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                                <Checkbox.Indicator />
                              </Checkbox.Control>
                              <Checkbox.Content>
                                <Label className="text-base font-semibold">
                                  Whiteboard
                                </Label>
                              </Checkbox.Content>
                            </Checkbox>
                            {/* 2 */}
                            <Checkbox value="Projector" className="">
                              <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                                <Checkbox.Indicator />
                              </Checkbox.Control>
                              <Checkbox.Content>
                                <Label className="text-base font-semibold">
                                  Projector
                                </Label>
                              </Checkbox.Content>
                            </Checkbox>
                            {/* 3 */}
                            <Checkbox value="Wi-Fi" className="">
                              <Checkbox.Control className="p-2.5 rounded-full dark:bg-gray-700">
                                <Checkbox.Indicator />
                              </Checkbox.Control>
                              <Checkbox.Content>
                                <Label className="text-base font-semibold">
                                  Wi-Fi
                                </Label>
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
                                <Label className="text-base font-semibold">
                                  Quiet Zone
                                </Label>
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
                      <Modal.Footer>
                        <Fieldset.Actions>
                          <Button
                            type="submit"
                            slot="close"
                            className="rounded-xl h-12 px-12 bg-indigo-600 dark:bg-indigo-500 dark:text-white"
                          >
                            Update
                          </Button>
                          <Button
                            slot="close"
                            variant="danger-soft"
                            className="rounded-xl h-12 px-12 group dark:text-orange-400"
                          >
                            Cancel
                          </Button>
                        </Fieldset.Actions>
                      </Modal.Footer>
                    </Fieldset>
                  </Form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditForm;
