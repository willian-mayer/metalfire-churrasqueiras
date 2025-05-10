"use client";

import Image from "next/image";

type AboutUsProps = {
  title: string;
  description: string;
  image1: string;
  image2: string;
  image3: string;
};

export default function AboutUs({
  title,
  description,
  image1,
  image2,
  image3,
}: AboutUsProps) {
  return (
    <section className="snap-start flex flex-col md:flex-row items-center justify-center min-h-screen px-6 py-16 bg-white text-black">
      <div className="flex flex-col md:flex-row items-center max-w-[1400px] w-full mx-auto gap-12">
        {/* Texto */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-lg md:text-xl">{description}</p>
        </div>

        {/* Imágenes */}
        <div className="md:w-1/2 relative w-[300px] h-[480px] sm:w-[360px] sm:h-[560px] md:w-[520px] md:h-[740px] lg:w-[600px] lg:h-[880px]">
          {/* Imagen 1 */}
          <div className="absolute top-0 left-0 w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[260px] md:h-[390px] lg:w-[320px] lg:h-[480px] shadow-xl rounded-xl overflow-hidden">
            <Image
              src={image1}
              alt="Imagen 1"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 200px"
              priority
            />
          </div>

          {/* Imagen 2 */}
          <div className="absolute bottom-0 right-0 w-[160px] h-[240px] sm:w-[200px] sm:h-[300px] md:w-[260px] md:h-[390px] lg:w-[320px] lg:h-[480px] shadow-xl rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Imagen 2"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 320px, (min-width: 768px) 260px, 200px"
              priority
            />
          </div>

          {/* Imagen 3 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 w-[120px] h-[180px] sm:w-[160px] sm:h-[240px] md:w-[200px] md:h-[300px] lg:w-[240px] lg:h-[360px] shadow-xl rounded-xl overflow-hidden">
            <Image
              src={image3}
              alt="Imagen 3"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 240px, (min-width: 768px) 200px, 160px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
