import { FaChartBar, FaFileAlt, FaUsers} from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';


export default function Contenido() {
    return (
        <div>
            <main className="container mx-auto mt-16 p-4">
                <section className="text-center mb-12">
                <Image className="mx-auto" src="/assets/logo_minerales.png" width={140} height={140} />
                <h1 className="text-4xl font-bold mb-12 flex justify-center">                
                    Bienvenido a la Plataforma de Reportes
                </h1>
                <p className="text-lg mt-4 ">
                    En esta plataforma, podrás acceder a reportes y de forma general a información operacional de los procesos productivos.
                </p>
                </section>
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-12 mx-auto">
                    <Link href="/user/produccion">
                    <div className="p-6 bg-gray-200 hover:bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
                        <FaChartBar className="text-blue-600 text-4xl mb-4" />
                        <h2 className="text-lg font-semibold">Tablas de producción</h2>
                        <p className="mt-2">Acceder a la producción y revisarla con una búsqueda a través de filtros.</p>
                    </div>
                    </Link>
                    <Link href="/user/reportes">
                    <div className="p-6 bg-gray-200 hover:bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
                        <FaFileAlt className="text-blue-600 text-4xl mb-4" />
                        <h2 className="text-lg font-semibold">Reportes</h2>
                        <p className="mt-2">Obtén los reportes de forma detallada de la producción, además de los movimientos.</p>
                    </div>
                    </Link>
                </section>
            </main>
        </div>
    )
}