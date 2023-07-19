import { useState } from 'react';

const Header = () => {
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
        <div className='bg-gray-400 p-4 flex justify-start'>            
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
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full">
                    Nombre
                  </button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full">
                    RUT
                  </button>
                  <button className="block px-4 py-2 text-gray-800 hover:bg-gray-300 w-full h-full">
                    Correo
                  </button>
                </div>
              )}
            </div>
        </div>
    );
}

export default Header;