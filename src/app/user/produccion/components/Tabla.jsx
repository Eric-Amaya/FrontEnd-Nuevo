import React from 'react';
const Table = ({ rows, columns }) => {
  return (
    <div className="mt-40 overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-300">
          <tr>
            {Array.from(Array(columns), (_, colIndex) => (
              <th
                key={colIndex}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider bg-gray-300"
              >
                Columna {colIndex + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Array.from(Array(rows), (_, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-100 transition-colors duration-200">
              {Array.from(Array(columns), (_, colIndex) => (
                <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm text-gray-900">
                    Celda {rowIndex + 1}-{colIndex + 1}
                  </span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
