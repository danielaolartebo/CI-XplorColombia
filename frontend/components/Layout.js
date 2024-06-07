'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
      useEffect(() => {
        showDestinations();
    }, []);

    const [dataRole, setDataRole] = useState([]);

    async function showDestinations(){
        try {
          const token = localStorage.getItem('token');
          const response = await fetch('http://localhost:5433/user/role/get', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });
          const dataRole = await response.json(); 
          console.log("Role:", dataRole);
          console.log("Role:", dataRole.name);
          setDataRole(dataRole);
        } catch (error) {
          console.error('Error al procesar la solicitud:', error);
        }
    }

    function handleLogout() {
      localStorage.clear();
  }
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      <link rel="stylesheet" href="https://kit.fontawesome.com/a076d05399.js"></link>
      {/* HEADER BEGINS */}
      <header className="main-header">
        <div className="container">
          <div className="nav-header">
            <li><a href="/home" className="white-link">Inicio</a></li>
            <li><a href="/home#createTrip" className="white-link">Crea tu viaje</a></li>
            <li><a href="/home#deals" className="white-link">Nuestras Ofertas</a></li>
            <li><a href="/home#mostpopular" className="white-link">Destinos Populares</a></li>
            <li><a className="white-link">Opciones de Destinos</a>
              <ul className="submenu">
                <li><a href="/createDestination" className="white-link">Crea un destino</a></li>
                <li><a href="/editDestination" className="white-link">Edita un destino</a></li>
                <li><a href="/deleteDestination" className="white-link">Elimina un destino</a></li>
              </ul>
            </li>
            {dataRole.name === "ROLE_ADMIN" && (
              <li><a className="white-link">Opciones de Usuarios</a>
                <ul className="submenu">
                  <li><a href="/createUser" className="white-link">Crea un Usuario</a></li>
                  <li><a href="/seeUsers" className="white-link">Ver informacion de Usuarios</a></li>
                  <li><a href="/seeModifications" className="white-link">Ver modificaciones</a></li>
                </ul>
              </li>
            )}
            <Link href='/'><button className="btn_btn_login" onClick={handleLogout}> Salir </button></Link>
          </div>
        </div>
      </header>
      {/* HEADER ENDS */}
      <main>
        {children}
      </main>
    </>
  );
}
