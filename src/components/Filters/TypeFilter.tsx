import React from 'react';
import { FaHome } from 'react-icons/fa';

interface TypeFilterProps {
  selectedTypes: string[];
  onTypeChange: (type: string) => void;
}

export default function TypeFilter({ selectedTypes, onTypeChange }: TypeFilterProps) {
  const propertyTypes = [
    { id: 'house', label: 'House' },
    { id: 'apartment', label: 'Apartment' },
    { id: 'condo', label: 'Condo' },
    { id: 'townhouse', label: 'Townhouse' },
    { id: 'land', label: 'Land' }
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FaHome className="mr-2" />
        Property Type
      </h3>
      <div className="space-y-2">
        {propertyTypes.map((type) => (
          <label key={type.id} className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selectedTypes.includes(type.id)}
              onChange={() => onTypeChange(type.id)}
              className="rounded text-blue-500"
            />
            <span>{type.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
}