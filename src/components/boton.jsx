import Image from "next/image";
import React from 'react';

const Boton = ({ruta}) => {
    const src = "/assets/" + ruta +".png";

    return (
        <div>
            <Image src={src} width = {40} height={40}/>
        </div>
    )
};

export default Boton;