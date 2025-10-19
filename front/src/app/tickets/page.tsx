"use client";

import { useState } from "react";
import Image from 'next/image';
import { events } from "@/data/events";

type Event = {
  id: string | number;
  title: string;
  date: string;
  link: string;
  image: string;
};

export default function TicketsPage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
   <div className="min-h-screen bg-black text-white p-10 w-full">
      <h1 className="text-4xl font-bold text-purple-600 text-center mb-8">
        Compra tus Tickets
      </h1>
      <p className="text-lg text-center mb-10 mt-20">
        Asegura tu entrada para los mejores eventos de la ciudad.
      </p>

      {/* Contenedor de tarjetas */}
     <div className="max-w-4xl mx-auto space-y-8 px-4 md:px-0">
  {events.map((event) => (
    <div
      key={event.id}
      className="flex flex-col md:flex-row items-center bg-[#5a46b9]/95 p-6 md:p-8 rounded-2xl 
                 shadow-[0_4px_15px_rgba(90,70,185,0.4)] hover:shadow-[0_8px_25px_rgba(90,70,185,0.5)]


                 transition-all duration-300 transform hover:scale-[1.02]"
    >
      {/* Imagen */}
      <Image
        src={event.image}
        alt={event.title}
        width={160}
        height={160}
        className="object-cover rounded-xl w-full md:w-44 h-44 border-4 border-white/10"
      />

      {/* Contenido */}
      <div className="flex flex-col md:flex-grow px-0 md:px-6 mt-4 md:mt-0 text-center md:text-left">
        <h2 className="text-2xl font-semibold text-white tracking-wide">{event.title}</h2>
        <p className="text-gray-200 mt-2 text-base">{event.date}</p>
      </div>

      {/* Botón */}
      <button
        className="mt-4 md:mt-0 md:ml-auto bg-white text-[#5a46b9] font-bold py-3 px-6 rounded-full 
                   hover:bg-[#eee] hover:scale-105 active:scale-95 transition-all duration-300"
        onClick={() => setSelectedEvent(event)}
      >
        Comprar
      </button>
    </div>
  ))}
</div>


      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-full max-w-md">
            <h2 className="text-2xl text-white font-semibold">{selectedEvent.title}</h2>
            <p className="text-gray-400 mt-2">{selectedEvent.date}</p>
            <button
              className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg"
              onClick={() => setSelectedEvent(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
