import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (filters: any) => void;
}

export default function FilterModal({ isOpen, onClose, onApply }: FilterModalProps) {
  const [filters, setFilters] = useState({
    priceRange: [0, 1000000],
    propertyType: [],
    bedrooms: 'any',
    bathrooms: 'any'
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      <div className="relative w-full max-w-lg bg-white rounded-t-2xl sm:rounded-2xl p-4 sm:p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <FaTimes className="w-5 h-5" />
          </button>
        </div>

        {/* Filter options will be added here */}
        <div className="space-y-6">
          {/* Placeholder for filter options */}
        </div>

        <div className="mt-6 flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 border rounded-lg hover:bg-gray-50"
          >
            Clear
          </button>
          <button
            onClick={() => {
              onApply(filters);
              onClose();
            }}
            className="flex-1 py-2.5 bg-black text-white rounded-lg hover:bg-gray-900"
          >
            Show Results
          </button>
        </div>
      </div>
    </div>
  );
}