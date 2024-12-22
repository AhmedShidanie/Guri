import React, { useState } from 'react';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';
import FilterModal from '../Filters/FilterModal';

interface HeaderProps {
  onSearch: (query: string) => void;
  onFilter: (filters: any) => void;
}

export default function Header({ onSearch, onFilter }: HeaderProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center gap-3 px-4 py-3 mt-2">
          <SearchBar onSearch={onSearch} />
          <FilterButton onClick={() => setIsFilterOpen(true)} />
        </div>
      </header>

      <FilterModal 
        isOpen={isFilterOpen} 
        onClose={() => setIsFilterOpen(false)}
        onApply={onFilter}
      />
    </>
  );
}