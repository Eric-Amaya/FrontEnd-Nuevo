import React, { useEffect, useState } from "react";

const Table = ({ data }) => {
  return (
    <div className="mt-40 overflow-x-auto">
      <div className="w-full">
        <table className="w-full divide-y divide-gray-200">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Fecha
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Carguio
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Camión
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Flota
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Material
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Fase
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Destino
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Tonelaje
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Ciclos
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300">
                Rajo
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-1 py-4 whitespace-nowrap truncate">{row.fecha}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.carguio}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.camion}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.flota}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.material}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.fase}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.destino}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.tonelaje}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.ciclos}</td>
                <td className="px-1 py-4 whitespace-nowrap">{row.rajo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
