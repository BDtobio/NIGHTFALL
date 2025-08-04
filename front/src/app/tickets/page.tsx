"use client";

import { useState } from "react";
import Image from 'next/image';
import { events } from "@/data/events";

type Event = {
  title: string;
  date: string;
  link: string;
};


export default function TicketsPage() {
 const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold text-purple-600 text-center mb-8">
        Compra tus Tickets
      </h1>
      <p className="text-lg text-center mb-6">
        Asegura tu entrada para los mejores eventos de la ciudad.
      </p>

      {/* Contenedor de tarjetas en columna */}
      <div className="max-w-4xl mx-auto space-y-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-center bg-purple-500 p-6 rounded-lg shadow-lg"
          >
           
           <Image
  src={event.image}
  alt={event.title}
  width={160} // Equivalente a w-40 (40 * 4 = 160px)
  height={160} // Equivalente a h-40
  className="object-cover rounded-md"
/>


            {/* Contenido al centro */}
            <div className="flex-grow px-4">
              <h2 className="text-xl font-semibold text-white">{event.title}</h2>
              <p className="text-white-800">{event.date} - {event.date}</p>
            </div>

            {/* Botón a la derecha */}
            <button
              className="ml-auto bg-white text-lg hover:bg-black
              text-purple-800 font-bold py-3 px-5 rounded-lg transition"
              onClick={() => setSelectedEvent(event)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl text-white font-semibold">{selectedEvent.title}</h2>
            <p className="text-gray-400 mt-2">{selectedEvent.date} - {selectedEvent.date}</p>
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
