"use client";
import Navbar from '@/app/adm/components/Navbar_adm';
import React, { useState } from "react";
import Perfil_formato from './components/perfil'

export default function Perfil() {

  return (
    <>
      <title>Perfil - Minerales Raros S.A.</title>
      <Navbar></Navbar>
      <Perfil_formato
        admEmail="usuario@example.com"
        admPassword="bruuuh"
        admName="Nombre del Usuario"
        admRut="123456789-0"
      />
    </>
  );
}
