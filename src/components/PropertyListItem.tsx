import React from 'react';
import { Property } from '../models/property.model';
import { formatPrice, formatPropertyDetails, formatAddress } from '../utils';

interface PropertyListItemProps {
  property: Property;
  onClick: () => void;
}

export default function PropertyListItem({ property, onClick }: PropertyListItemProps) {
  return (
    <div 
      className="flex space-x-4 p-4 bg-white rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      onClick={onClick}
    >
      <img 
        src={property.images[0]} 
        alt={property.title}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex flex-col">
        <h3 className="font-bold text-lg">{property.title}</h3>
        <p className="text-green-600">{formatPrice(property.price)}</p>
        <p className="text-gray-500">{formatPropertyDetails(property.bedrooms, property.bathrooms)}</p>
        <p className="text-gray-500">{formatAddress(property.address.city, property.address.state)}</p>
      </div>
    </div>
  );
}