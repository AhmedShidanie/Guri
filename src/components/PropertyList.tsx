import React from 'react';
import { Property } from '../models/property.model';
import PropertyListItem from './PropertyListItem';

interface PropertyListProps {
  properties: Property[];
  isLoading: boolean;
  onPropertyTap: (property: Property) => void;
}

export default function PropertyList({ properties, isLoading, onPropertyTap }: PropertyListProps) {
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {properties.map((property) => (
        <PropertyListItem 
          key={property.id} 
          property={property} 
          onClick={() => onPropertyTap(property)} 
        />
      ))}
    </div>
  );
}