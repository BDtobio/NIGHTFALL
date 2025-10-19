"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5a46b9] text-white py-8 px-8 w-full fixed top-0 left-0 z-50 flex items-center justify-between shadow-[0_4px_15px_rgba(0,0,0,0.4)] transition-all duration-500">

      {/* Logo */}
      <h1 className="font-Hamston text-4xl tracking-widest font-bold">
        NIGHTFALL
      </h1>

      {/* Links desktop */}
      <ul className="hidden md:flex space-x-10 text-lg font-medium tracking-wide">
        <li>
          <Link href="/home" className="relative group">
            <span className="group-hover:text-gray-200 transition-colors">Inicio</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="/aboutUs" className="relative group">
            <span className="group-hover:text-gray-200 transition-colors">Club</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="relative group">
            <span className="group-hover:text-gray-200 transition-colors">Contacto</span>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
          </Link>
        </li>
        <li>
         <Link
  href="/tickets"
  className="border-2 border-white text-white py-2.5 px-7 rounded-full font-semibold
             hover:bg-white hover:text-[#5a46b9] transition-all duration-300"
>
  Tickets
</Link>

        </li>
      </ul>

      {/* Icono de menú móvil */}
      <button
        className="flex md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <ul className="md:hidden bg-[#5a46b9] text-white absolute top-full left-0 w-full flex flex-col items-center space-y-6 py-10 z-50 shadow-[0_4px_15px_rgba(0,0,0,0.4)] animate-fadeIn">
          {[
            { href: "/home", label: "Inicio" },
            { href: "/events", label: "Eventos" },
            { href: "/contact", label: "Contacto" },
            { href: "/aboutUs", label: "Nosotros" },
            { href: "/tickets", label: "Tickets" },
          ].map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-lg font-semibold hover:text-gray-200 transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
