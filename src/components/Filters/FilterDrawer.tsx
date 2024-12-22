import React from 'react';
import { FaTimes } from 'react-icons/fa';
import PriceFilter from './PriceFilter';
import AreaFilter from './AreaFilter';
import TypeFilter from './TypeFilter';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    minPrice: number;
    maxPrice: number;
    minArea: number;
    maxArea: number;
    selectedTypes: string[];
  };
  onFilterChange: (key: string, value: any) => void;
}

export default function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFilterChange
}: FilterDrawerProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <FaTimes />
          </button>
        </div>
      </div>

      <div className="overflow-y-auto h-full pb-20">
        <div className="space-y-6 p-4">
          <PriceFilter
            minPrice={filters.minPrice}
            maxPrice={filters.maxPrice}
            onMinPriceChange={(value) => onFilterChange('minPrice', value)}
            onMaxPriceChange={(value) => onFilterChange('maxPrice', value)}
          />

          <AreaFilter
            minArea={filters.minArea}
            maxArea={filters.maxArea}
            onMinAreaChange={(value) => onFilterChange('minArea', value)}
            onMaxAreaChange={(value) => onFilterChange('maxArea', value)}
          />

          <TypeFilter
            selectedTypes={filters.selectedTypes}
            onTypeChange={(type) => {
              const newTypes = filters.selectedTypes.includes(type)
                ? filters.selectedTypes.filter((t) => t !== type)
                : [...filters.selectedTypes, type];
              onFilterChange('selectedTypes', newTypes);
            }}
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}