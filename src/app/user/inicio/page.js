"use client";
import Navbar from '@/app/user/components/Navbar_users';
import React, { useState } from "react";
import Contenido from './components/contenido';

export default function inicio() {  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <title>Inicio - Minerales Raros S.A.</title>
      <Navbar/>
      <Contenido/>
    </>
  );
}
