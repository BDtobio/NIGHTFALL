"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Para animaciones interactivas
import Image from "next/image"; // Importa el componente Image de Next.js

export default function AboutUs() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
  className="bg-center py-20 text-white relative  mt-20" 
  style={{ backgroundImage: 'url(/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgXSfu9Vjx8ldwQeWzxJXdwNPpG9G_Mz-lKw&s)' }}
>
  {/* Capa oscura para mejorar la visibilidad del texto */}
  <div className="absolute inset-0 bg-black opacity-50"></div>

  <div className="container mx-auto px-6 relative z-10 text-center">
    {/* Título */}
    <motion.h2
      className="text-5xl font-nickson text-purple-600 text-center mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
       Nightfall
    </motion.h2>

        
        <div className="max-w-3xl mx-auto space-y-12">
          {/* Párrafo 1 con imagen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Nightfall nació en 2015, con una visión clara: ofrecer una experiencia única en la vida nocturna. 
              Desde sus humildes comienzos en un pequeño local de la ciudad, nuestra discoteca se ha convertido en un ícono 
              de la cultura nocturna. Lo que comenzó como una fiesta clandestina con amigos y música electrónica, rápidamente 
              creció y se transformó en el lugar donde todos quieren estar cada fin de semana.
            </motion.p>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/img2.jpg" // Reemplaza esta URL con tu imagen
                alt="Imagen del club"
                width={600} // Ajusta el ancho según sea necesario
                height={400} // Ajusta la altura según sea necesario
                className="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            </motion.div>
          </div>

          {/* Párrafo 2 con imagen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/images.jpg" // Reemplaza esta URL con tu imagen
                alt="Imagen del club"
                width={600} // Ajusta el ancho según sea necesario
                height={400} // Ajusta la altura según sea necesario
                className="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            </motion.div>

            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              Hoy, Nightfall es conocido por su ambiente vibrante, su música en vivo de los mejores DJs y por ser el punto 
              de encuentro donde las personas disfrutan, se divierten y se olvidan del estrés de la semana. 
              La energía que se siente en cada rincón de nuestra discoteca es indescriptible. 
              ¡Nos hemos convertido en el lugar de referencia para los amantes de la música electrónica, el house y el techno!
            </motion.p>
          </div>

          {/* Párrafo 3 con imagen */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <motion.p
              className="text-xl mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              La historia de Nightfall está marcada por la pasión por la música y la cultura nocturna. Desde sus primeros días, 
              siempre hemos buscado innovar, ofreciendo una experiencia inolvidable a cada persona que cruza nuestra puerta. 
              Sin importar si eres un amante del techno o del house, en Nightfall siempre encuentras el espacio perfecto para disfrutar.
            </motion.p>

            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/img3.jpg" // Reemplaza esta URL con tu imagen
                alt="Imagen del club"
                width={600} // Ajusta el ancho según sea necesario
                height={400} // Ajusta la altura según sea necesario
                className="w-full h-72 object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-black opacity-30 rounded-xl"></div>
            </motion.div>
          </div>
        </div>

        {/* Botón para más detalles */}
        
      </div>
    </section>
  );
}
