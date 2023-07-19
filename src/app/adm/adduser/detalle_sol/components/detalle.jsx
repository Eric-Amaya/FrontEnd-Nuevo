import React from 'react';

const DetalleSolicitud = ({ solicitudNumero, nombre, correo, rut, mensaje }) => {
  const handleAprobar = () => {
    // Lógica para aprobar la solicitud
    console.log('Solicitud aprobada');
  };

  const handleRechazar = () => {
    // Lógica para rechazar la solicitud
    console.log('Solicitud rechazada');
  };

  return (
    <div className="container mx-auto p-4 mt-24">
      <h1 className="text-2xl font-bold mb-4">Detalle de Solicitud N° {solicitudNumero}</h1>
      <div className="border rounded p-4 bg-white">
        <h2 className="text-lg font-bold mb-2">Nombre</h2>
        <p>{nombre}</p>
        <h2 className="text-lg font-bold mb-2">Correo</h2>
        <p>{correo}</p>
        <h2 className="text-lg font-bold mb-2">RUT</h2>
        <p>{rut}</p>
        {mensaje && (
          <>
            <h2 className="text-lg font-bold mb-2">Mensaje</h2>
            <p>{mensaje}</p>
          </>
        )}
      </div>
      <div className="mt-4">
        <button className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded mr-2" onClick={() => window.location.href = '/adm/adduser'}>
          Volver
        </button>
        <button className="bg-green-500 hover:bg-green-300 text-white px-4 py-2 rounded mr-2" onClick={handleAprobar}>
          Aprobar
        </button>
        <button className="bg-red-500 hover:bg-red-300 text-white px-4 py-2 rounded" onClick={handleRechazar}>
          Rechazar
        </button>
      </div>
    </div>
  );
};

export default DetalleSolicitud;
