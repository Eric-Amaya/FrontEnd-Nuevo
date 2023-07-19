"use client";
import Navbar from '@/app/adm/components/Navbar_adm';
import Desplegar from './components/desplegar';
import Header from './components/header';

const Usuarios = () => {
    return (
        <>
        <title>Usuarios - Minerales Raros S.A.</title>
        <Navbar></Navbar>
        <header className='fixed w-full left-0 top-24 z-20'>
            <Header></Header>
        </header>
        <Desplegar></Desplegar>
        </>
    );

}   

export default Usuarios;