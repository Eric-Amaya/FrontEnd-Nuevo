"use client";
import Navbar from '@/app/user/components/Navbar_users';
import React, { useState } from "react";
import Perfil_formato from './components/perfil'

export default function Perfil() {

  return (
    <>
      <title>Perfil - Minerales Raros S.A.</title>
      <Navbar></Navbar>
      <Perfil_formato
        userEmail="usuario@example.com"
        userPassword="bruuu11h"
        userName="Nombre del Usuario"
        userRut="123456789-0"
      />
    </>
  );
}
