import React from 'react';
import Header from './components/Header';
import PropertySwiper from './components/PropertySwiper';
import { useProperties } from './hooks/useProperties';

export default function App() {
  const { properties, isLoading } = useProperties();

  const handleSearch = (query: string) => {
    console.log('Search:', query);
    // Implement search logic
  };

  const handleFilter = (filters: any) => {
    console.log('Filters:', filters);
    // Implement filter logic
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="animate-spin rounded-full h-8 w-8 border-2 border-white border-t-transparent" />
      </div>
    );
  }

  return (
    <main className="h-screen">
      <Header onSearch={handleSearch} onFilter={handleFilter} />
      <PropertySwiper properties={properties} />
    </main>
  );
}