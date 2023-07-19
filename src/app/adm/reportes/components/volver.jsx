import Image from "next/image";
import React from 'react';

const Volver = () => {

    return (
        <div>
            <button onClick={() => window.location.href = '/adm/reportes'}>
                <Image src="/assets/atras.png" width = {45} height={45}/>
            </button>
        </div>
    )
};

export default Volver;