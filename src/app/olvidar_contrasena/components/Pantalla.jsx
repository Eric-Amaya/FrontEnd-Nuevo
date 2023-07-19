import React, { useState } from 'react';
import MiLogo from "src/components/logo";

const RecuperarContraseña = () => {
  const [email, setEmail] = useState('');
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleEnviar = () => {
    if (!email || !validateEmail(email)) {
      setError('Por favor, ingrese su correo electrónico.');
      return;
    }

    const data = { email: email};


    // Implementar la lógica para enviar la clave provisional al correo
    // Solicitud al servidor o simular el envío en el cliente

    // Simulación de envío exitoso
    // Agregar logica para enviar la clave provisional al correo
    setEnviado(true);
  };

  return (
    <div>
        <>
            <MiLogo />
        </> 
        <div className="flex justify-center items-center h-screen">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-8">Recuperar contraseña</h1>
                {!enviado ? (
                <>
                    <p className="text-gray-600 mb-4">
                    Ingrese su correo electrónico para recibir una clave provisional.
                    </p>
                    <input
                    type="email"
                    className="w-full p-2 border rounded mb-4"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
                    {error && <p className="text-red-500 mb-2">{error}</p>}
                    <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={handleEnviar}
                    >
                    Enviar clave provisional
                    </button>
                </>
                ) : (
                <>
                    <p className="text-green-500 font-bold mb-4">
                    Se ha enviado una clave provisional al correo electrónico proporcionado.
                    </p>
                    <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => window.location.href = '/'}
                    >
                    Ir al inicio
                    </button>
                </>
                )}
            </div>
        </div>
    </div>
  );
};

export default RecuperarContraseña;