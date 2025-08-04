"use client";
import { useState } from "react";

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-black text-white py-16 px-6 md:px-12 mt-24">
      <div className="max-w-4xl mx-auto">
        {/* Sección de Formulario */}
        <form className="bg-gray-900 p-8 rounded-lg shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-center">Contáctanos</h2>

          <label className="block text-lg mb-2">Nombre:</label>
          <input 
            type="text" 
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
            placeholder="Tu nombre"
          />

          <label className="block text-lg mb-2">Correo:</label>
          <input 
            type="email" 
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
            placeholder="Tu correo electrónico"
          />

          <label className="block text-lg mb-2">Mensaje:</label>
          <textarea 
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded bg-gray-800 text-white focus:ring-2 focus:ring-red-500 outline-none transition"
            rows={4}
            placeholder="Tu mensaje"
          ></textarea>

          <button 
            type="submit" 
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded transition duration-300 transform hover:scale-105"
          >
            Enviar
          </button>
        </form>

        {/* Sección del Mapa */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold text-center mb-4">Ubicación</h2>
          <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.0375209266076!2d2.152456776251428!3d41.39476849235479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f3b3b4a5e1%3A0x8f06a3d469b4f017!2sPla%C3%A7a%20de%20Catalunya%2C%20Barcelona%2C%20Espa%C3%B1a!5e0!3m2!1ses!2ses!4v1708389305863!5m2!1ses!2ses"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
