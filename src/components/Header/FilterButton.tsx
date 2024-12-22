import React from 'react';
import { FaSliders } from 'react-icons/fa6';

interface FilterButtonProps {
  onClick: () => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-[2px] hover:bg-white/20 transition-colors"
    >
      <FaSliders className="w-4 h-4 text-white" />
    </button>
  );
}