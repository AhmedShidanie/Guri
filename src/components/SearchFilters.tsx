import React from 'react';
import { FaFilter, FaBed, FaHome, FaEllipsisH } from 'react-icons/fa';

interface SearchFiltersProps {
  onPriceFilter: () => void;
  onRoomsFilter: () => void;
  onTypeFilter: () => void;
  onMoreFilters: () => void;
}

export default function SearchFilters({
  onPriceFilter,
  onRoomsFilter,
  onTypeFilter,
  onMoreFilters
}: SearchFiltersProps) {
  return (
    <div className="p-4 bg-white border-b border-gray-200">
      <div className="flex space-x-2 overflow-x-auto">
        <button
          onClick={onPriceFilter}
          className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-50"
        >
          <FaFilter className="mr-2" />
          Price
        </button>
        <button
          onClick={onRoomsFilter}
          className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-50"
        >
          <FaBed className="mr-2" />
          Beds & Baths
        </button>
        <button
          onClick={onTypeFilter}
          className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-50"
        >
          <FaHome className="mr-2" />
          Property Type
        </button>
        <button
          onClick={onMoreFilters}
          className="flex items-center px-4 py-2 border rounded-full hover:bg-gray-50"
        >
          <FaEllipsisH className="mr-2" />
          More Filters
        </button>
      </div>
    </div>
  );
}