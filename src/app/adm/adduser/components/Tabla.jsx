import React from 'react';

const Tabla = ({ rows, columns}) => {
  // Generar los datos de ejemplo para la tabla
  const data = [];
  for (let i = 1; i <= rows; i++) {
    const rowData = [];
    for (let j = 1; j <= columns; j++) {
      rowData.push(`Celda ${i}-${j}`);
    }
    data.push(rowData);
  }

  return (
    <div className='mt-20'>
      <h1 className='text-2xl font-bold mb-4'>Solicitudes({rows})</h1>
      <div style={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
        <table className="border-collapse border border-gray-300">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-sans text-gray-700 uppercase tracking-wider bg-gray-300">
                Solicitud
              </th>
              <th className="px-6 py-3 text-left text-xs font-sans text-gray-700 uppercase tracking-wider bg-gray-300">
                Nombre
              </th>
              <th className="px-6 py-3 text-left text-xs font-sans text-gray-700 uppercase tracking-wider bg-gray-300">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Array.from(Array(rows), (_, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-6 py-4">
                  <div style={{ minWidth: '150px' }}>Solicitud {rowIndex + 1}</div>
                </td>
                <td className="px-6 py-4">
                  <div style={{ minWidth: '150px' }}>Nombre {rowIndex + 1}</div>
                </td>
                <td className="px-6 py-4">
                  <div style={{ minWidth: '150px' }}>
                    <a className="hover:underline hover:text-gray-900 mr-2" href="/adm/adduser/detalle_sol">Detalle</a>
                    <button className="hover:underline hover:text-green-500 mr-2">Admitir</button>
                    <button className='hover:underline hover:text-red-500'>Rechazar</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
  
  
};

export default Tabla;