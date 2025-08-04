
import React from "react";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="mt-4 text-2xl">¡Vaya! esta no es la fiesta que buscas.</p>
      <Link href="/" passHref>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-md">
          Regresar al Inicio
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
