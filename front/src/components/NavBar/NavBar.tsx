"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
   <nav className="bg-[#5a46b9] text-white py-8 px-6 w-full fixed top-0 left-0 z-50 flex items-center
                shadow-[0_5px_10px_rgba(255,255,255,0.3)]">

      <h1 className="font-Hamston text-3xl font-hestrial text-white">
        NIGHTFALL
      </h1>

      
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full ">
        
      
        <ul className={`hidden md:flex space-x-8 text-xl justify-center flex-1 mt-4`}>
          <li><a href="/home" className="hover:text-purple-500 transition-all">Inicio</a></li>
          <li><a href="/aboutUs" className="hover:text-purple-500 transition-all">Club</a></li>
          
          
          <li><a href="/contact" className="hover:text-purple-500 transition-all">Contacto</a></li>
          <li><a href="/tickets" className="bg-purple-500 py-2 px-4 rounded-s-2xl hover:text-white transition-all">Tickets</a></li>
        </ul>

        {/* Icono de hamburguesa a la derecha (solo visible en pantallas pequeñas) */}
        <button className="flex md:hidden ml-auto text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
{menuOpen && (
  <ul className="md:hidden bg-[#2f2851] text-white absolute top-full left-0 w-full flex flex-col items-center space-y-4 py-10 z-50">
    <li>
      <Link href="/home" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition-all">
        Inicio
      </Link>
    </li>
    <li>
      <Link href="/events" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition-all">
        Eventos
      </Link>
    </li>
    <li>
      <Link href="/contact" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition-all">
        Contacto
      </Link>
    </li>
    <li>
      <Link href="/aboutUs" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition-all">
        Nosotros
      </Link>
    </li>
    <li>
      <Link href="/tickets" onClick={() => setMenuOpen(false)} className="hover:text-purple-500 transition-all">
        Tickets
      </Link>
    </li>
  </ul>
)}
    </nav>
  );
}
