"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import MiLogo from "src/components/logo";
import Boton from "src/components/boton";

const MiPantalla = () => {
  const [nombre, setNombre] = useState('');
  const [rut, setRut] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos al servidor o hacer alguna otra acción
    // Por ejemplo, puedes hacer una validación antes de enviar los datos

    if (nombre && rut && correo) {
      if (validateEmail(correo)) {
        console.log('Datos enviados:', { nombre, rut, correo, mensaje });
        router.push('/');
      } else {
        document.getElementById('correo').focus();
        setError();
      }  

    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }

    const data_solicitud = {
      nombre: nombre,
      rut: rut,
      correo: correo,
      mensaje: mensaje,
    };

  };

  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const isButtonDisabled = () => {
    return !username ||!password};

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Debe completar todos los campos");
      return;
    }

    const data = {
      name: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        if (result.token) {
          localStorage.setItem('token', result.token);
          localStorage.setItem('user', JSON.stringify(result.User));
          router.push('/inicio');
        } else {
          setError('Credenciales inválidas');
        }
      } else {
        throw new Error('Error en la solicitud');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Ocurrió un error en el servidor');
    }
  };

    const handleForgotPassword = () => {
      router.push("/olvidar_contrasena");
    };

    const handleRequestAccess = () => {
      router.push("/solicitar_acceso");
    };

    const validateEmail = (email) => {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
      return emailRegex.test(email);
    };
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

  return (
    <div>
      <>
        <MiLogo />
      </> 
      <div className="flex items-center justify-center h-screen">
        <div className="w-1/2 max-w-md mx-52 flex items-center justify-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Solicitud de Acceso a la Plataforma</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nombre" className="block mb-1 font-bold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  className={`w-full p-2 border rounded ${
                    !nombre ? 'border-red-300' : ''
                  }`}
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="rut" className="block mb-1 font-bold">
                  RUT
                </label>
                <input
                  type="text"
                  id="rut"
                  className={`w-full p-2 border rounded ${
                    !rut ? 'border-red-300' : ''
                  }`}
                  value={rut}
                  onChange={(e) => setRut(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="correo" className="block mb-1 font-bold">
                  Correo
                </label>
                <input
                  type="email"
                  id="correo"
                  className={`w-full p-2 border rounded ${
                    error || !correo ? 'border-red-300' : ''
                  }`}
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="mensaje" className="block mb-1 font-bold">
                  Mensaje (Opcional)
                </label>
                <textarea
                  id="mensaje"
                  className="w-full p-2 border rounded resize-none"
                  maxLength={200}
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
                <p className="text-sm text-gray-500 mt-1">Máximo 200 caracteres</p>
              </div>

              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleSubmit}
              >
                Enviar
              </button>
            </form>
          </div>    
        </div>

        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
        </div>

        <div className="absolute h-full border-r-2 border-gray-300"></div> 


        <div className="w-1/2 max-w-md mx-52 flex flex-col items-center justify-center">
          <div>
            <form
              onSubmit={handleSubmitLogin}
              className="bg-gray-300 px-12 py-16 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-semibold mt-1 mb-8">
                Plataforma de Reportes
              </h2>
              <p className="text-lg font-semibold mt-1 mb-4">
                Bienvenido, ingrese sus datos.
              </p>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Correo
                </label>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full border-2 border-gray-400 hover:border-gray-600 rounded-xl p-3 mt-1 focus:outline-none"
                  placeholder="Ingrese su Email"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-1"
                >
                  Contraseña
                </label>
                <div className='flex items-center'>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border-2 border-gray-400 hover:border-gray-600 rounded-xl p-3 mt-1 focus:outline-none"
                    placeholder="Ingrese su contraseña"
                  />
                  <button
                    className="bg-gray-300 rounded-xl px-3 ml-2 mt-4 focus:outline-none"
                    onClick={toggleShowPassword}
                  >
                    {showPassword ? <Boton ruta = {"ojo-abierto"}></Boton> : <Boton ruta = {"cerrar-ojo"}></Boton>}
                  </button>
                </div>
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-900  text-white px-8 py-2 rounded font-semibold"
                  onClick={handleSubmitLogin}
                  disabled={isButtonDisabled()}
                >
                  Enviar
                </button>
                <div>
                  <button 
                    className="text-blue-600 hover:text-blue-800 text-base font-medium mt-1"
                    onClick={handleForgotPassword}
                  >
                    Olvidé mi contraseña
                  </button>
                </div>
              </div>
              <div className="mt-6 flex justify-center items-center">
                <p className="font-medium text-base">
                  ¿No tiene una cuenta?
                </p>
                <button
                  className="text-blue-600 hover:text-blue-800 text-base font-medium ml-4"
                  onClick={handleRequestAccess}
                >
                  Solicitar acceso
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default MiPantalla;


