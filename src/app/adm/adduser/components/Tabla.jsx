import React from "react";
import { v4 as uuidv4 } from "uuid";

const Tabla = ({ rows, columns }) => {
  // Generar los datos de ejemplo para la tabla
  const data = [];
  for (let i = 1; i <= rows; i++) {
    const rowData = [];
    for (let j = 1; j <= columns; j++) {
      rowData.push(`Celda ${i}-${j}`);
    }
    data.push(rowData);
  }
  const handleRechazar = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/csv/eliminar-usuario?id=${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const respuesta = data.resultado;
        if (respuesta == true) {
          alert("solicitud enviada");
        } else {
          alert("solicitud no cargada");
        } // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  const handleSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    fetch(
      `http://localhost:3001/csv/agregar-usuario?id=${id}&nombre=${nombre}&correo=${correo}&contrasenha=${contrasenha}&rut=${rut}&role=user`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const respuesta = data.resultado;
        if (respuesta == true) {
          alert("solicitud enviada");
        } else {
          alert("solicitud no cargada");
        } // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };
  return (
    <div className="mt-20">
      <h1 className="text-2xl font-bold mb-4">Solicitudes({rows})</h1>
      <div style={{ maxHeight: "calc(100vh - 200px)", overflowY: "auto" }}>
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
              <tr
                key={rowIndex}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="px-6 py-4">
                  <div style={{ minWidth: "150px" }}>
                    Solicitud {rowIndex + 1}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div style={{ minWidth: "150px" }}>Nombre {rowIndex + 1}</div>
                </td>
                <td className="px-6 py-4">
                  <div style={{ minWidth: "150px" }}>
                    <a
                      className="hover:underline hover:text-gray-900 mr-2"
                      href="/adm/adduser/detalle_sol"
                    >
                      Detalle
                    </a>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="hover:underline hover:text-green-500 mr-2"
                    >
                      Admitir
                    </button>
                    <button
                      type="submit"
                      onClick={handleRechazar}
                      className="hover:underline hover:text-red-500"
                    >
                      Rechazar
                    </button>
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
