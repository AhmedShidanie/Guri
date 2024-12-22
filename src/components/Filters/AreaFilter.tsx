import React from 'react';
import { FaRuler } from 'react-icons/fa';

interface AreaFilterProps {
  minArea: number;
  maxArea: number;
  onMinAreaChange: (value: number) => void;
  onMaxAreaChange: (value: number) => void;
}

export default function AreaFilter({
  minArea,
  maxArea,
  onMinAreaChange,
  onMaxAreaChange
}: AreaFilterProps) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4 flex items-center">
        <FaRuler className="mr-2" />
        Square Footage
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1">Minimum Area</label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={minArea}
            onChange={(e) => onMinAreaChange(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{minArea} sq ft</span>
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Maximum Area</label>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={maxArea}
            onChange={(e) => onMaxAreaChange(Number(e.target.value))}
            className="w-full"
          />
          <span className="text-sm text-gray-600">{maxArea} sq ft</span>
        </div>
      </div>
    </div>
  );
}