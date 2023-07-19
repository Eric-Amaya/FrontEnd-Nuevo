import React, { useState } from "react";
import Icono from "./perfil_icono";

export default function Perfil_formato({ admEmail, admPassword, admName, admRut }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedAdmName, setEditedUserName] = useState(admName);
  const [editedAdmRut, setEditedUserRut] = useState(admRut);
  const [editedAdmEmail, setEditedUserEmail] = useState(admEmail);
  const [editedAdmPassword, setEditedUserPassword] = useState(admPassword);

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
            <h1 className="text-3xl font-semibold mb-12 mr-4 mt-4">Perfil de Administrador</h1>
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
                value={editedAdmName}
                onChange={(e) => setEditedUserName(e.target.value)}
              />
            ) : (
              <p className="border-b border-gray-300 py-1">{editedAdmName}</p>
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
                value={editedAdmRut}
                onChange={(e) => setEditedUserRut(e.target.value)}
              />
            ) : (
              <p className="border-b border-gray-300 py-1">{editedAdmRut}</p>
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
                value={editedAdmEmail}
                onChange={(e) => setEditedUserEmail(e.target.value)}
              />
            ) : (
              <p className="border-b border-gray-300 py-1">{editedAdmEmail}</p>
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
                  value={editedAdmPassword}
                  onChange={(e) => setEditedUserPassword(e.target.value)}
                />
              ) : (
                <p className="border-b border-gray-300 rounded-l-lg px-3 py-2 flex-1">{isPasswordVisible ? editedAdmPassword : "********"}</p>
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
                className="bg-gray-700 hover:bg-gray-500 text-white  px-4 py-2 rounded"
                onClick={() => setIsEditing(false)}
              >
                Cancelar
              </button>
            </div>
          ) : (
            <button
              className="bg-gray-700 hover:bg-gray-500 text-white  px-4 py-2 rounded"
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







