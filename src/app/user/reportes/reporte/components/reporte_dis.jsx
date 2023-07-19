import React from 'react';
import Logo from './logo_mensual';
import Volver from './volver';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {useState} from 'react';

const PaginaReporte = () => {

    const Rajo = "X";
    const Fase = "Y";
    const [selectedDate, setSelectedDate] = useState('');

    const valor_diario = 0, valor_mensual = 0, valor_semanal_iso = 0,valor_semanal_movil = 0;
    const m_extraccion_mineral = 0, m_extraccion_lastre = 0, m_total_extraccion = 0,
    m_remanejo = 0, m_total = 0, m_mineral_chancado = 0;
    const handleDateChange = (date) => {
      setSelectedDate(date);
    };

  return (
    <div className='mt-24 ml-8'>
      <Volver></Volver>
      <div className="container mx-auto p-4 -mt-16">
        <div className="flex justify-start items-center font-semibold">
          <h1 className="text-4xl mr-4">Reporte</h1>
          <p className="text-4xl mr-4">Rajo {Rajo} </p>
          <p className="text-4xl">Fase {Fase} Fecha </p>
          <div className="text-4xl px-3 py-1" >
            <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            className="block text-gray-800 hover:bg-gray-100 cursor-pointer"
            placeholderText="Seleccionar fecha"
            dateFormat="dd/MM/yyyy"
          />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Diaria</h2>
              <div className='flex justify-between'>
                <p>Valor Real: {valor_diario}</p>
                  <Logo ruta = {"diario"}></Logo>
              </div>
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Semanal ISO</h2>             
              <div className='flex justify-between'>
                <p>Valor Real: {valor_semanal_iso}</p>
                <Logo ruta = {"semanal_iso"}></Logo>
              </div>
              <></>  
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Semanal Movil</h2>
              <div className='flex justify-between'>
                <p>Valor Real: {valor_semanal_movil}</p>
                <Logo ruta = {"semanal_movil"}></Logo>
              </div>  
          </div>
          <div className="bg-white p-4 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Mensual</h2>
              <div className='flex justify-between'>
                <p>Valor Real: {valor_mensual}</p>
                <Logo ruta = {"mensual"}></Logo>
              </div>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-3xl font-bold">Movimientos</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Extracción de mineral</h3>
              <p>Valor: {m_extraccion_mineral}</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Remanejo</h3>
              <p>Valor: {m_remanejo}</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Extracción de lastre</h3>
              <p>Valor: {m_extraccion_lastre}</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Movimiento total</h3>
              <p>Valor: {m_total}</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Total extracción</h3>
              <p>Valor: {m_total_extraccion}</p>
            </div>
            <div className="bg-white p-4 shadow-lg rounded-lg">
              <h3 className="text-xl font-bold mb-4">Mineral chancado</h3>
              <p>Valor: {m_mineral_chancado}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginaReporte;
