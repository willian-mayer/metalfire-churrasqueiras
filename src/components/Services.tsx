"use client";

import Image from "next/image";

type GalleryItem = {
  title: string;
  image: string;
};

type GalleryProps = {
  title: string;
  description: string;
  items: GalleryItem[];
};

export default function Gallery({ title, description, items }: GalleryProps) {
  return (
    <section id="servicos" className="px-4 py-8 max-w-7xl mx-auto md:h-screen">
      {/* Título y descripción */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {title}
        </h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden rounded-lg shadow-md group bg-white"
          >
            {/* Imagen */}
            <div className="relative w-full h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Título debajo de la imagen */}
            <div className="bg-white text-center py-3 border-t border-gray-200">
              <h3 className="text-md font-semibold text-gray-800">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
