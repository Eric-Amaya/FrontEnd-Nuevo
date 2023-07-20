"use client";
import Navbar from '@/app/user/components/Navbar_users';
import { useState, useRef, useEffect} from 'react';
import Table from './components/Tabla';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { startOfDay } from 'date-fns';

export default function Produccion() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));
  const [selectedFase, setSelectedFase] = useState(null);
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [data, setData] = useState([]);

  const filterMenuRef = useRef(null);

  // Manejo del evento click fuera del filtro para cerrarlo
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        filterMenuRef.current &&
        !filterMenuRef.current.contains(event.target)
      ) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    // Realizar la solicitud HTTP a la API para obtener los datos
    fetch(
      `http://localhost:3001/csv/filtro-produccion-fecha?filter_parameter=${startOfDay(
        new Date()
      )}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Actualizar el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  }, []);

  const handleSearch = () => {
    fetch(
      `http://localhost:3001/csv/busqueda-produccion?filter_parameter=${searchQuery}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Actualizar el estado con los datos filtrados
      })
      .catch((error) => {
        console.error("Error al realizar la solicitud:", error);
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    fetch(
      `http://localhost:3001/csv/filtro-produccion-fecha?filter_parameter=${selectedDate}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("La solicitud no fue exitosa.");
        }
        return response.json();
      })
      .then((data) => {
        setData(data); // Actualizar el estado con los datos obtenidos
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };

  const handleFaseChange = (event) => {
    setSelectedFase(event.target.value);
  };

  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  const handleImportClick = () => {
    document.querySelector("input[type=file]").click();
  };
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <>
      <title>Producción - Minerales Raros S.A.</title>
      <Navbar></Navbar>
      <header className="fixed w-full top-24 z-20">
        <div className="bg-gray-400 p-4">
          <div className="flex justify-start mx-2">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-1 border border-gray-300 rounded mr-2"
            />
            <button
              onClick={handleSearch}
              className="bg-white hover:bg-gray-300 text-gray-900 px-4 py-2 rounded ml-2"
            >
              Buscar
            </button>
            <div ref={filterMenuRef} className="relative inline-block">
            </div>
          </div>
        </div>
      </header>
      <Table data={data} />
    </>
  );
}