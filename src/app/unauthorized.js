import React from "react";
import { useRouter } from "next/router";

const UnauthorizedPage = () => {
  const router = useRouter();
  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div>
      <h1>Acceso no autorizado</h1>
      <p>No tienes permiso para acceder a esta página.</p>
      <button onClick={handleBackToHome}>Volver a Inicio</button>
    </div>
  );
};

export default UnauthorizedPage;