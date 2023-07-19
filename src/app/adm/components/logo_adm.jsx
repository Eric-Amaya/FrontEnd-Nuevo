import Image from 'next/image'
import React from 'react';


const MiLogo = () => {
    return (
        <div>
            <header className="bg-gray-900 text-white fixed w-full top-0 left-0 z-40">
                <button className="relative z-40 text-2xl font-bold py-2 px-6 flex items-start" onClick={() => window.location.href = "/adm/inicio"}>
                    <Image
                    src="/assets/logo_minerales.png"
                    width={80}
                    height={80}
                    alt="Picture of the author"
                    />
                    <h1 className="text-2xl font-bold mt-6">Minerales Raros S.A.</h1>
                </button>
            </header>        
        </div>    
    );
};


export default MiLogo;
