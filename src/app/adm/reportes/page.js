"use client";
import React, { useState } from "react";
import Navbar from "@/app/adm/components/Navbar_adm";
import Logo from "./components/logo_mensual";

export default function Reportes() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [valor_diario, setValorDiario] = useState(0);
  const [valor_semanal_iso, setValorSemanalIso] = useState(0);
  const [valor_semanal_movil, setValorSemanalMovil] = useState(0);
  const [valor_mensual, setValorMensual] = useState(0);
  const [rajo, setRajo] = useState("");
  const [fase, setFase] = useState("");

  //`https://localhost:3001/csv/show-diario?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`;
  //`https://localhost:3001/csv/consultar-semanal-iso?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`;
  //`https://localhost:3001/csv/consultar-semanal-movil?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`;
  //`https://localhost:3001/csv/consultar-mensual?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`;

  const handleSearch = () => {
    // Aquí puedes realizar la búsqueda utilizando los valores de rajo, fase y selectedDate
    // y actualizar los valores correspondientes (valor_diario, valor_semanal_iso, etc.)
    fetch(
      `http://localhost:3001/csv/consultar-semanal-iso?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const valor_semanal_iso = data[0];
        setValorSemanalIso(valor_semanal_iso); // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    fetch(
      `http://localhost:3001/csv/show-diario?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const valorDiario = data[0];
        setValorDiario(valorDiario); // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    fetch(
      `http://localhost:3001/csv/consultar-semanal-movil?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const valor_semanal_movil = data[0];
        console.log("console log del fetch"+valor_semanal_movil)
        setValorSemanalMovil(valor_semanal_movil); // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
    fetch(
      `http://localhost:3001/csv/consultar-mensual?nombre_fase=${fase}&nombre_rajo=${rajo}&fecha=${selectedDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parsear la respuesta como JSON
      })
      .then((data) => {
        const valor_mensual =data[0];
        setValorMensual(valor_mensual); // Aquí puedes manejar la respuesta JSON recibida desde el servidor
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  return (
    <>
      <title>Reporte - Minerales Raros S.A.</title>
      <Navbar />
      <div className="mt-40 ml-8">
        <div className="container mx-auto p-4 -mt-16">
          <div className="flex justify-start items-center font-semibold">
            <h1 className="text-4xl mr-4">Reporte</h1>
            <p className="text-4xl mr-4">Rajo {rajo}</p>
            <p className="text-4xl">Fase {fase}</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Diaria</h2>
              <div className="flex justify-between">
                <p>Valor Real: {valor_diario.diario}</p>
                <Logo ruta="diario" />
              </div>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Semanal ISO</h2>
              <div className="flex justify-between">
                <p>Valor Real: {valor_semanal_iso.semanal}</p>
                <Logo ruta="semanal_iso" />
              </div>
              <></>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Semanal Movil</h2>
              <div className="flex justify-between">
                <p>Valor Real: {valor_semanal_movil.semanal_movil}</p>
                <Logo ruta="semanal_movil" />
              </div>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Mensual</h2>
              <div className="flex justify-between">
                <p>Valor Real: {valor_mensual.tonelaje_total}</p>
                <Logo ruta="mensual" />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-3xl font-bold">Buscar</h2>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block font-semibold mb-1">Rajo:</label>
                <input
                  type="text"
                  value={rajo}
                  onChange={(e) => setRajo(e.target.value)}
                  className="px-3 py-2 border rounded"
                />
              </div>
              <div>
                <label className="block font-semibold mb-1">Fase:</label>
                <input
                  type="text"
                  value={fase}
                  onChange={(e) => setFase(e.target.value)}
                  className="px-3 py-2 border rounded"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-semibold mb-1">Fecha:</label>
              <input
                type="text"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="px-3 py-2 border rounded"
              />
            </div>
            <div className="mt-4">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
