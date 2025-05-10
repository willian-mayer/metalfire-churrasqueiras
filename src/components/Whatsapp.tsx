"use client";

import Image from "next/image";
import Footer from "./Footer";

type WhatsappProps = {
  title: string;
  description: string;
  buttonText: string;
  whatsappImage: string;
  companyName: string;
  email: string;
  phoneNumber: string;
};

export default function Whatsapp({
  title,
  description,
  buttonText,
  whatsappImage,
  companyName,
  email,
  phoneNumber,
}: WhatsappProps) {
  return (
    <div className="bg-green-50 text-black">
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <div className="max-w-4xl w-full space-y-6">
          <h2 className="text-4xl font-bold">{title}</h2>
          <p className="text-lg">{description}</p>
          <Image
            src={whatsappImage}
            alt="WhatsApp"
            width={80}
            height={80}
            className="mx-auto"
            priority
          />
          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            {buttonText}
          </button>
        </div>
      </section>

      {/* Footer importado aquí */}
      <Footer
        companyName={companyName}
        email={email}
        phoneNumber={phoneNumber}
      />
    </div>
  );
}
