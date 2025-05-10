"use client";

type FooterProps = {
  companyName: string;
  email: string;
  phoneNumber: string;
};

export default function Footer({
  companyName,
  email,
  phoneNumber,
}: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-lg font-semibold">{companyName}</p>
        <p className="text-sm">Correo: {email}</p>
        <p className="text-sm">Teléfono: {phoneNumber}</p>
      </div>
    </footer>
  );
}
