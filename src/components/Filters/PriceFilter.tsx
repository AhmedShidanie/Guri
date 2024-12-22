import React from 'react';
import { FaDollarSign } from 'react-icons/fa';

interface PriceFilterProps {
  minPrice: number;
  maxPrice: number;
  onMinPriceChange: (value: number) => void;
  onMaxPriceChange: (value: number) => void;
}

export default function PriceFilter({
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange
}: PriceFilterProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FaDollarSign className="mr-2" />
        Price Range
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Minimum Price</label>
          <input
            type="range"
            min="0"
            max="2000000"
            value={minPrice}
            onChange={(e) => onMinPriceChange(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">${minPrice.toLocaleString()}</span>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Maximum Price</label>
          <input
            type="range"
            min="0"
            max="2000000"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">${maxPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}