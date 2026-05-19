"use client";

import {
  Label,
  SearchField,
  Checkbox,
  CheckboxGroup,
  Input,
} from "@heroui/react";
import { useRouter, useSearchParams } from "next/navigation";

const RefineSidebar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchValue = searchParams.get("search") || "";
  const selectedAmenities = searchParams.get("amenities")
    ? searchParams.get("amenities").split(",")
    : [];
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";

  const handleFilterChange = (
    updatedSearch,
    updatedAmenities,
    updatedMin,
    updatedMax,
  ) => {
    const params = new URLSearchParams();

    if (updatedSearch) params.set("search", updatedSearch);

    if (updatedAmenities && updatedAmenities.length > 0) {
      params.set("amenities", updatedAmenities.join(","));
    }

    if (updatedMin) params.set("minPrice", updatedMin);
    if (updatedMax) params.set("maxPrice", updatedMax);

    router.push(`/rooms?${params.toString()}`, { scroll: false });
  };

  const searchInput = (e) => {
    handleFilterChange(e.target.value, selectedAmenities, minPrice, maxPrice);
  };

  const handleAmenitiesChange = (values) => {
    handleFilterChange(searchValue, values, minPrice, maxPrice);
  };

  const handleMinPriceChange = (e) => {
    handleFilterChange(
      searchValue,
      selectedAmenities,
      e.target.value,
      maxPrice,
    );
  };

  const handleMaxPriceChange = (e) => {
    handleFilterChange(
      searchValue,
      selectedAmenities,
      minPrice,
      e.target.value,
    );
  };

  const handleReset = () => {
    router.push("/rooms", { scroll: false });
  };

  const AMENITIES_OPTIONS = [
    "Wi-Fi",
    "Quiet Zone",
    "Reading Lamps",
    "Projector",
    "Air Conditioning",
  ];

  return (
    <div className="w-full shadow px-4 py-8 rounded-lg border border-black/20 bg-white dark:bg-gray-600">
      {/* Title & Reset */}
      <div className="flex justify-between items-end">
        <h1 className="text-2xl font-semibold">Refine</h1>
        <h3
          onClick={handleReset}
          className="text-lg text-red-500 dark:text-white cursor-pointer hover:underline"
        >
          Reset
        </h3>
      </div>
      <hr className="my-6 border-black/10" />

      {/* Search */}
      <SearchField name="search">
        <Label className="uppercase text-xs font-bold text-black/60 dark:text-gray-100 tracking-wider">
          Search By Name
        </Label>
        <SearchField.Group className="h-12 border border-black/20 mt-2 rounded-lg">
          <SearchField.SearchIcon />
          <SearchField.Input
            value={searchValue}
            onChange={searchInput}
            placeholder="e.g. Quiet Pod"
          />
          <SearchField.ClearButton
            onClick={() =>
              handleFilterChange("", selectedAmenities, minPrice, maxPrice)
            }
          />
        </SearchField.Group>
      </SearchField>

      {/* Amenities Options */}
      <CheckboxGroup
        name="interests"
        className="my-8"
        value={selectedAmenities}
        onChange={handleAmenitiesChange}
      >
        <Label className="uppercase text-xs font-bold text-black/60 dark:text-gray-100 tracking-wider mb-2">
          Amenities
        </Label>
        <div className="flex flex-col gap-2">
          {AMENITIES_OPTIONS.map((option, ind) => (
            <Checkbox key={ind} value={option}>
              <Checkbox.Control className="border border-black/20 rounded-full p-2">
                <Checkbox.Indicator />
              </Checkbox.Control>
              <Checkbox.Content>
                <Label className="text-sm font-medium text-black/80 dark:text-gray-100 cursor-pointer">
                  {option}
                </Label>
              </Checkbox.Content>
            </Checkbox>
          ))}
        </div>
      </CheckboxGroup>

      {/* Price Range */}
      <h2 className="uppercase text-xs font-bold text-black/60 dark:text-gray-100 tracking-wider mb-2">
        Hourly Rate ($)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        <Input
          min={0}
          placeholder="Min"
          type="number"
          value={minPrice}
          onChange={handleMinPriceChange}
          className="border border-black/20 rounded-lg w-full"
        />
        <Input
          min={0}
          placeholder="Max"
          type="number"
          value={maxPrice}
          onChange={handleMaxPriceChange}
          className="border border-black/20 rounded-lg w-full"
        />
      </div>
    </div>
  );
};

export default RefineSidebar;
