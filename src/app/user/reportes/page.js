"use client";
import Navbar from '@/app/user/components/Navbar_users';
import { useState } from 'react';
import Table from './components/Tabla';

export default function Reportes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    // Lógica de búsqueda según searchQuery
    console.log(`Búsqueda: ${searchQuery}`);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <>
    <title>Reportes - Minerales Raros S.A.</title>
    <Navbar></Navbar>
    <header className='fixed w-full top-24 z-20'>
      <div className="bg-gray-400 p-4">
        <div className="flex justify-start mx-2 ">
          <input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-1 border border-gray-300 rounded mr-2"
          />
          <button onClick={handleSearch} className="bg-white hover:bg-gray-300 text-gray-900 px-4 py-2 rounded ml-2">
            Buscar
          </button>
          <div className="relative inline-block">
            <button onClick={handleFilterToggle} className="bg-white hover:bg-gray-300 text-gray-800 px-4 py-2 rounded ml-24">
              Filtrar por
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow-lg">
                <button onClick={() => handleFilterByFase('Fase')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full h-full">
                  Fase
                </button>
                <button onClick={() => handleFilterByRajo('Rajo')} className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full h-full">
                  Rajo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>  
    <Table rows={20} columns={2} />
    </>
  );
}
