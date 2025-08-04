"use client";

import { useState } from "react";

const events = [
  {
    id: 1,
    name: "🎶 Fiesta Electrónica",
    date: "10 de Marzo",
    time: "22:00 hrs",
    image: "/images/img2.jpg",
  },
  {
    id: 2,
    name: "🔥 Reggaeton Night",
    date: "15 de Marzo",
    time: "23:00 hrs",
    image: "/images/img2.jpg",
  },
  {
    id: 3,
    name: "🎸 Rock Fest",
    date: "20 de Marzo",
    time: "20:00 hrs",
    image: "/images/img2.jpg",
  },
  {
    id: 4,
    name: "🎤 Hip-Hop Battle",
    date: "25 de Marzo",
    time: "21:00 hrs",
    image: "/images/img2.jpg",
  },
  {
    id: 5,
    name: "🎻 Concierto Clásico",
    date: "30 de Marzo",
    time: "19:00 hrs",
    image: "/images/img2.jpg",
  },
  {
    id: 6,
    name: "🎭 Teatro Experimental",
    date: "5 de Abril",
    time: "18:00 hrs",
    image: "/images/img2.jpg",
  },
];

export default function TicketsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);

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
            {/* Imagen a la izquierda */}
            <img
              src={event.image}
              alt={event.name}
              className="w-40 h-40 object-cover rounded-md"
            />

            {/* Contenido al centro */}
            <div className="flex-grow px-4">
              <h2 className="text-xl font-semibold text-white">{event.name}</h2>
              <p className="text-white-800">{event.date} - {event.time}</p>
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
            <h2 className="text-2xl text-white font-semibold">{selectedEvent.name}</h2>
            <p className="text-gray-400 mt-2">{selectedEvent.date} - {selectedEvent.time}</p>
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
