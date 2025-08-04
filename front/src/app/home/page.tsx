"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Estilo base
import "swiper/css/navigation"; // Estilos para la navegación
import "swiper/css/pagination"; // Estilos para la paginación
import { events } from "../../data/events";
import Image from "next/image";

export default function Home() {
const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: "/images/images.jpg", alt: "Random 1" },
    { src: "/images/images.jpg", alt: "Random 2" },
    { src: "/images/img3.jpg", alt: "Random 3" },
    { src: "/images/img2.jpg", alt: "Random 4" },
  ];

  const swiperRef = useRef(null); // Referencia a Swiper

  // No es necesario reiniciar el swiper, porque el loop se encargará de esto
  useEffect(() => {
    if (swiperRef.current) {
      // Elimina esta llamada, ya que no es necesaria si tenemos loop y autoplay correctamente configurados
    }
  }, []);

  return (
    <div className="relative w-full min-h-screen flex flex-col text-white">
      {/* Contenedor del video de fondo */}
      <div className="absolute inset-0 -z-10">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src="/videos/video.mp4"
          autoPlay
          loop
          muted
        ></video>
        {/* Capa oscura encima del video */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 flex flex-col justify-center items-center h-screen text-center p-6">
        <section className="max-w-6xl px-6 py-12">
          <h2 className="font-Hamston text-[10rem] leading-none mb-8">NIGHTFALL</h2>
          <p className="text-xl mb-6">LA NOCHE EMPIEZA AQUÍ, COMPRA TUS TICKETS</p>
          <Link href="/tickets">
            <button className="bg-purple-600 text-white text-lg py-3 px-6 rounded-full font-bold hover:bg-purple-900 transition-all shadow-[0px_0px_8px_2px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_12px_4px_rgba(255,255,255,0.2)]">
              COMPRA AHORA
            </button>
          </Link>
        </section>
      </div>

      {/* Sección de Eventos */}
      <section className="bg-gray-800 text-center py-9 w-full mt-auto">
        <h2 className="text-4xl font-bold text-white mb-6">Próximos Eventos</h2>
        <div className="w-full overflow-hidden">
          {/* Swiper para el slider de eventos */}
          <Swiper
            ref={swiperRef}
            slidesPerView={4} // Cuántos slides mostrar a la vez
            spaceBetween={20} // Espacio entre cada slide
            loop={true} // Hacer loop
            autoplay={{
              delay: 3000, // Desplazamiento automático cada 3 segundos
              disableOnInteraction: false, // No detiene el autoplay si el usuario interactúa
              pauseOnMouseEnter: true, // Pausa el autoplay cuando el ratón está sobre el slider
            }}
            pagination={{
              clickable: true, // Si quieres que la paginación sea clickeable
            }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            className="swiper-container"
          >
            {/* Mostrar los eventos clonados y originales */}
            {[...events, ...events].map((event, index) => (
              <SwiperSlide key={index} className="flex justify-center items-center px-2">
                <div className="bg-black p-6 rounded-lg shadow-lg w-full max-w-sm">
                  <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
                  <p className="text-lg text-gray-300 mb-4">{event.date}</p>
                  <Link href={event.link} className="bg-purple-600 text-white py-2 px-4 rounded-lg inline-block">
                    Tickets
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      


  
      <section className=" bg-black w-full px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative w-full h-64 bg-gray-300 flex items-center justify-center overflow-hidden cursor-pointer group"
            onClick={() => setSelectedImage(image.src)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-white p-2 rounded-full text-black text-xl"
            >
              ✖
            </button>
            <Image
              src={selectedImage}
              alt="Expanded View"
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
    </div>
  );
}

