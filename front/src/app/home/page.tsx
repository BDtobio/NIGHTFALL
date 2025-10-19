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
  className="w-full h-full object-cover pointer-events-none translate-y-[-60px]"
  src="/videos/video.mp4"
  autoPlay
  loop
  muted
></video>
        {/* Capa oscura encima del video */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Contenido principal centrado */}
     <div className="relative z-10 flex flex-col justify-center items-center min-h-screen text-center p-6">

        <section className="max-w-6xl px-6 py-18">
          <h2 className="font-Hamston text-6xl md:text-[10rem] leading-none mb-8">
  NIGHTFALL
</h2>
          <p className="text-xl mb-6">LA NOCHE EMPIEZA AQUÍ, COMPRA TUS TICKETS</p>
          <Link href="/tickets">
            <button className="bg-[#5a46b9] text-white text-lg py-3 px-6 rounded-full font-bold hover:bg-[#8c39f8] transition-all shadow-[0px_0px_8px_2px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_6px_6px_rgba(255,255,255,6.8)]">
              COMPRA AHORA
            </button>
          </Link>
        </section>
      </div>
{/* Sección de Eventos */}
<section className="bg-gradient-to-b from-black via-[#5a34e0] to-black text-center px-10 py-16 w-full mt-auto">
  <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-white mb-10 tracking-wide">
    Próximos Eventos
  </h2>

  <div className="relative w-full overflow-hidden">
    {/* Swiper para el slider de eventos */}
    <Swiper
      ref={swiperRef}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1, spaceBetween: 10 },      // móvil
        640: { slidesPerView: 2, spaceBetween: 20 },    // tablet
        1024: { slidesPerView: 4, spaceBetween: 25 },   // desktop
      }}
      pagination={{ clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      className="swiper-container"
    >
      {[...events, ...events].map((event, index) => (
        <SwiperSlide key={index} className="flex justify-center items-center px-4">
          <div className="bg-gradient-to-b from-[#5a46b9] to-[#3e2e85] p-7 rounded-2xl shadow-lg w-full max-w-sm transform transition-all duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold text-white mb-3">{event.title}</h3>
            <p className="text-lg text-gray-300 mb-5">{event.date}</p>
            <Link
              href={event.link}
              className="bg-white text-[#5a46b9] font-semibold py-2 px-6 rounded-full transition-all duration-300 hover:bg-[#eceaff] hover:scale-105"
            >
              Tickets
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
</section>


      


  <section className="bg-[#101010] w-full px-12 py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {images.map((image, index) => (
      <div
        key={index}
        className="relative w-full h-96 bg-black flex items-center justify-center overflow-hidden cursor-pointer group"
        onClick={() => setSelectedImage(image.src)}
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={600}
          height={900}
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

