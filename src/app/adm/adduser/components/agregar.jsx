import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const AgregarUsuario = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [rut, setRut] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false); // Nuevo estado para el mensaje de confirmación

  const validateEmail = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    const id = uuidv4();
    e.preventDefault();
    if (nombre && correo && contraseña && rut && validateEmail(correo)) {
      setShowConfirmation(true);
      console.log("Datos enviados:", { nombre, correo, contraseña, rut });
    } else {
      alert("Por favor complete todos los campos antes de confirmar."); // Muestra un mensaje de alerta si algún campo está vacío
    }
    fetch(
      `http://localhost:3001/csv/agregar-usuario?id=${id}&nombre=${nombre}&correo=${correo}&contraseña=${contraseña}&rut=${rut}&role=user`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const respuesta = data;
        if (respuesta == true) {
          alert("usuario agregado");
        } else {
          alert("usuario no agregado");
        } // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-12">Agregar nuevo usuario</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="nombre" className="block font-semibold mb-1">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            style={{ paddingLeft: "0.75rem" }}
            className="border border-gray-300 rounded px-60 py-2"
            placeholder="Ingrese su nombre"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="correo" className="block font-semibold mb-1">
            Correo
          </label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            style={{ paddingLeft: "0.75rem" }}
            className="border border-gray-300 rounded px-60 py-2"
            placeholder="Ingrese su correo"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contraseña" className="block font-semibold mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
            style={{ paddingLeft: "0.75rem" }}
            className="border border-gray-300 rounded px-60 py-2"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rut" className="block font-semibold mb-1">
            RUT
          </label>
          <input
            type="text"
            id="rut"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            style={{ paddingLeft: "0.75rem" }}
            className="border border-gray-300 rounded px-16 py-2"
            placeholder="Ingrese su RUT"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded mr-2"
        >
          Confirmar
        </button>
      </form>
      {showConfirmation && (
        <p className="mt-4 text-green-600">¡Usuario agregado correctamente!</p>
      )}
    </div>
  );
};

export default AgregarUsuario;
