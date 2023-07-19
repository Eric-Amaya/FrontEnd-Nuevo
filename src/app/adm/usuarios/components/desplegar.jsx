import React, { useState } from 'react';

const Desplegar = () => {
  // Datos de ejemplo para la tabla
  const [data, setData] = useState([
    { id: 1, nombre: 'Juan Pérez', rut: '12345678-9', correo: 'juan@example.com' },
    { id: 2, nombre: 'María Gómez', rut: '98765432-1', correo: 'maria@example.com' },
    { id: 3, nombre: 'Pedro Martínez', rut: '45678901-2', correo: 'pedro@example.com' },
  ]);

  // Estado para controlar si se está editando alguna fila
  const [editingId, setEditingId] = useState(null);

  // Función para editar los datos de una fila
  const handleEdit = (id) => {
    setEditingId(id);
  };

  // Función para guardar los cambios de una fila editada
  const handleSaveChanges = (id, editedData) => {
    setData((prevData) =>
      prevData.map((item) => (item.id === id ? { ...item, ...editedData } : item))
    );
    setEditingId(null);
  };

  // Función para cancelar la edición de una fila
  const handleCancelEdit = () => {
    setEditingId(null);
  };

  // Función para eliminar una fila
  const handleDelete = (id) => {
    setData((prevData) => prevData.filter((item) => item.id !== id));
  };

  return (
    <div className='mt-40'>
      <table className="border-collapse border border-gray-300 w-full">
        <thead className="bg-gray-300">
          <tr>
            <th className="px-4 py-2">Nombre</th>
            <th className="px-4 py-2">RUT</th>
            <th className="px-4 py-2">Correo Electrónico</th>
            <th className="px-4 py-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="border border-gray-300 px-4 py-2">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.nombre}
                    onChange={(e) => handleSaveChanges(item.id, { nombre: e.target.value })}
                  />
                ) : (
                  item.nombre
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.rut}
                    onChange={(e) => handleSaveChanges(item.id, { rut: e.target.value })}
                  />
                ) : (
                  item.rut
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {editingId === item.id ? (
                  <input
                    type="text"
                    value={item.correo}
                    onChange={(e) => handleSaveChanges(item.id, { correo: e.target.value })}
                  />
                ) : (
                  item.correo
                )}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex justify-center">
                {editingId === item.id ? (
                  <>
                    <button className="bg-green-500 hover:bg-green-400 text-white rounded px-2 py-1 mr-12" onClick={() => handleSaveChanges(item.id)}>
                      Guardar
                    </button>
                    <button className="bg-red-500 hover:bg-red-400 text-white rounded px-2 py-1" onClick={handleCancelEdit}>
                      Cancelar
                    </button>
                  </>
                ) : (
                  <>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white rounded px-2 py-1 mr-12" onClick={() => handleEdit(item.id)}>
                      Editar
                    </button>
                    <button className="bg-red-500 hover:bg-red-400 text-white rounded px-2 py-1" onClick={() => handleDelete(item.id)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Desplegar;
