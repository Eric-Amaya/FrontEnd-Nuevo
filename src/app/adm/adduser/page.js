"use client";
import Navbar from '@/app/adm/components/Navbar_adm';
import React, { useState } from "react";
import Agregar from "./components/agregar";
import Tabla from "./components/Tabla";

export default function inicio() {  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
    <title>Agregar usuario - Minerales Raros S.A.</title>
    <Navbar></Navbar>
        <div className="flex justify-center">
            <div className="w-1/2 max-w-md mx-52 flex items-center justify-center mt-20">
                <div>
                    <Agregar></Agregar>
                </div>
            </div>
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
            </div>
            <div className="absolute h-full border-r-2 border-gray-300"></div> 

            <div className='w-1/2 max-w-md mr-40 ml-52 flex flex-col items-center justify-center mt-10'>
                <Tabla rows={20} columns={2} />
            </div>
        </div>
    </>
  );
}