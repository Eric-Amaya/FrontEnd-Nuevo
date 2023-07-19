import React, { useState } from "react";
import Icono from "./perfil_icono";

export default function Perfil_formato({ userEmail, userPassword, userName, userRut }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUserName, setEditedUserName] = useState(userName);
  const [editedUserRut, setEditedUserRut] = useState(userRut);
  const [editedUserEmail, setEditedUserEmail] = useState(userEmail);
  const [editedUserPassword, setEditedUserPassword] = useState(userPassword);

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleEditProfile = () => {
    setIsEditing(true);
  };

  const handleSaveChanges = () => {
    // Aquí puedes implementar la lógica para guardar los cambios en los campos
    setIsEditing(false);
    // También puedes enviar los valores editados a través de una función de guardar en la base de datos, etc.
  };

  return (
    <>
      <div className="max-w-md mx-auto px-4 py-8 mt-24">
        <div className="flex justify-bewteen items-center">
            <h1 className="text-3xl font-semibold mb-12 mr-16 mt-4">Perfil de Usuario</h1>
            <Icono></Icono>
        </div>
        <div className="bg-white shadow-md p-12">
          <div className="mb-4">
            <label htmlFor="nombre" className="block font-medium mb-1">
              Nombre
            </label>
            {isEditing ? (
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={editedUserName}
                onChange={(e) => setEditedUserName(e.target.value)}
              />
            ) : (
              <p className="border-b border-gray-300 py-1">{editedUserName}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="rut" className="block font-medium mb-1">
              RUT
            </label>
            {isEditing ? (
              <input
                type="text"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={editedUserRut}
                onChange={(e) => setEditedUserRut(e.target.value)}
              />
            ) : (
              <p className="border-b border-gray-300 py-1">{editedUserRut}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block font-medium mb-1">
              Correo Electrónico
            </label>
            {isEditing ? (
              <input
                type="email"
                className="border border-gray-300 rounded px-3 py-2 w-full"
                value={editedUserEmail}
                onChange={(e) => setEditedUserEmail(e.target.value)}
              />
            ) : (
              <p className="border-b border-gray-300 py-1">{editedUserEmail}</p>
            )}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-1">
              Contraseña
            </label>
            <div className="flex items-center">
              {isEditing ? (
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  className="border border-gray-300 rounded-l-lg px-3 py-2 flex-1"
                  value={editedUserPassword}
                  onChange={(e) => setEditedUserPassword(e.target.value)}
                />
              ) : (
                <p className="border-b border-gray-300 rounded-l-lg px-3 py-2 flex-1">{isPasswordVisible ? editedUserPassword : "********"}</p>
              )}
              <button
                className="bg-gray-700 hover:bg-gray-500 text-white rounded-r-lg px-4 py-2"
                onClick={handlePasswordToggle}
              >
                {isPasswordVisible ? "Ocultar" : "Ver"}
              </button>
            </div>
          </div>
          {isEditing ? (
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 rounded mr-2"
                onClick={handleSaveChanges}
              >
                Guardar Cambios
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-700 hover:bg-gray-500 text-white px-4 py-2 rounded"
              onClick={handleEditProfile}
            >
              Editar Perfil
            </button>
          )}
        </div>
      </div>
    </>
  );
}







