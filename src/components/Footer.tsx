'use client';

import routes from '@/data/routes.json';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white rounded-lg shadow-sm mt-16 px-4">
      <div className="w-full max-w-screen-xl mx-auto py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          {/* LOGO + NOMBRE */}
          <Link href="/" passHref legacyBehavior>
            <a className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">Metalfire Churrasqueiras</span>
            </a>
          </Link>

          {/* RUTAS DINÁMICAS */}
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-400 sm:mb-0">
            {routes.map((route) => (
              <li key={route.path}>
                <a href={route.path} className="hover:underline me-4 md:me-6">
                  {route.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />

        {/* COPYRIGHT */}
        <span className="block text-sm text-gray-400 sm:text-center">
          © {currentYear} <Link href="/" className="hover:underline">Metalfire Churrasqueiras™</Link>. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
