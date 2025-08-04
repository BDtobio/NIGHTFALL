"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-foreground text-black-500 
    text-white py-8 px-6 w-full fixed top-0 left-0 shadow-lg z-50 flex items-center">
      {/* Título a la izquierda */}
      <h1 className="font-Hamston text-3xl font-hestrial text-white">
        NIGHTFALL
      </h1>

      {/* Contenedor de enlaces e icono */}
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
        
        {/* Enlaces centrados (ocultar en pantallas pequeñas, mostrar solo en pantallas medianas y grandes) */}
        <ul className={`hidden md:flex space-x-8 text-xl justify-center flex-1`}>
          <li><a href="/home" className="hover:text-purple-500 transition-all">Inicio</a></li>
          <li><a href="/aboutUs" className="hover:text-purple-500 transition-all">Club</a></li>
          
          <li><a href="/photos" className=" fonthover:text-purple-500 transition-all">Fotos</a></li>
          
          <li><a href="/contact" className="hover:text-purple-500 transition-all">Contacto</a></li>
          <li><a href="/tickets" className="bg-purple-500 py-2 px-4 rounded-s-2xl hover:text-white transition-all">Tickets</a></li>
        </ul>

        {/* Icono de hamburguesa a la derecha (solo visible en pantallas pequeñas) */}
        <button className="flex md:hidden ml-auto text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil (se muestra solo cuando el menú hamburguesa está abierto) */}
      {menuOpen && (
        <ul className="md:hidden bg-black text-white absolute top-0 left-0 w-full flex flex-col items-center space-y-4 py-6 z-50 mt-16">
          <li><a href="/home" className="hover:text-purple-500 transition-all">Inicio</a></li>
          <li><a href="/events" className="hover:text-purple-500 transition-all">Eventos</a></li>
          <li><a href="/contact" className="hover:text-purple-500
          transition-all">Contacto</a></li>
          <li><a href="/photos" className="hover:text-purple-500 transition-all">Fotos</a></li>
          <li><a href="/aboutUs" className="hover:text-purple-500 transition-all">Nosotros</a></li>
          <li><a href="/tickets" className="hover:text-purple-500
          transition-all">Tickets</a></li>
        </ul>
      )}
    </nav>
  );
}
