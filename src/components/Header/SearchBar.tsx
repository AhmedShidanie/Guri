import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <div className="relative flex-1">
      <div className="relative flex items-center backdrop-blur-[2px] rounded-full h-12 px-4">
        <FaMapMarkerAlt className="text-white w-5 h-5 mr-3" />
        <input
          type="text"
          placeholder="City, neighborhood, or address"
          className="w-full bg-transparent text-white placeholder-white/70 text-base focus:outline-none"
          onChange={(e) => onSearch(e.target.value)}
        />
        <button className="ml-2 p-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors">
          <FaSearch className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}