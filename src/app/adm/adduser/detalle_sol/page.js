"use client";
import Navbar from '@/app/adm/components/Navbar_adm';
import React, { useState } from "react";
import DetalleSolicitud from './components/detalle';

export default function inicio() {  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <title>Detalle de solicitud N° 12345 - Minerales Raros S.A.</title>
    <Navbar></Navbar>
    <DetalleSolicitud
    solicitudNumero={12345}
    nombre="John Doe"
    correo="john.doe@example.com"
    rut="12.345.678-9"
    mensaje="Este es un mensaje de ejemplo."
    />
    </>
  );
}