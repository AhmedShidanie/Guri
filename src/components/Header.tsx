import React, { useState } from 'react';
import { FaSearch, FaFilter } from 'react-icons/fa';
import FilterDrawer from './filters/FilterDrawer';

interface HeaderProps {
  onSearch: (query: string) => void;
}

export default function Header({ onSearch }: HeaderProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 2000000,
    minArea: 0,
    maxArea: 10000,
    selectedTypes: []
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-white shadow-md p-4">
        <div className="flex items-center space-x-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search by location..."
              className="w-full pl-10 pr-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => onSearch(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <FaFilter className="w-6 h-6" />
          </button>
        </div>
      </div>

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
    </div>
  );
}