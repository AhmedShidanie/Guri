import React from 'react';
import { animated } from '@react-spring/web';
import { Property } from '../models/property.model';
import { formatPrice, formatPropertyDetails, formatAddress } from '../utils';
import { FaHeart, FaShare, FaInfoCircle } from 'react-icons/fa';
import PropertyMediaViewer from './PropertyMediaViewer';

interface PropertyCardProps {
  property: Property;
  style: any;
}

export default function PropertyCard({ property, style }: PropertyCardProps) {
  return (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
      className="touch-none"
    >
      <div className="relative w-full h-full bg-black">
        <PropertyMediaViewer media={property.media} />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-90" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
          <p className="text-xl text-green-400 font-semibold mb-2">
            {formatPrice(property.price)}
          </p>
          <p className="text-lg mb-1">
            {formatPropertyDetails(property.bedrooms, property.bathrooms)}
          </p>
          <p className="text-lg mb-4">
            {formatAddress(property.address.city, property.address.state)}
          </p>
        </div>

        {/* Right sidebar buttons */}
        <div className="absolute right-4 bottom-32 flex flex-col space-y-6">
          <button className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
            <FaHeart className="w-6 h-6 text-white" />
          </button>
          <button className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
            <FaShare className="w-6 h-6 text-white" />
          </button>
          <button className="p-3 rounded-full bg-gray-800/50 hover:bg-gray-700/50">
            <FaInfoCircle className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </animated.div>
  );
}