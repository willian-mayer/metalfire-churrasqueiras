'use client';

import Footer from "./Footer";

type Contact = {
  name: string;
  title: string;
  email: string;
  number: string;
};

type ContactSectionProps = {
  contacts: Contact[];
};

export default function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* CENTRADO DEL CONTENIDO */}
      <main className="flex-grow flex items-center justify-center">
        <section className="w-full max-w-6xl px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Contact List */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Contatos</h2>
            <div className="space-y-6">
              {contacts.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-lg font-bold text-gray-600">
                      {contact.name.split(' ')[0][0]}
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-gray-800">{contact.name}</h3>
                      <p className="text-sm text-gray-500">{contact.title}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    📧 <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
                  </p>
                  <p className="text-sm text-gray-600 mt-1">📞 {contact.number}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center md:text-left">Envie uma Mensagem</h2>
            <form
              action="https://formsubmit.co/tu-correo@ejemplo.com"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://tusitio.com/obrigado" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative z-0 group">
                  <input type="text" name="first_name" id="first_name" required className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label htmlFor="first_name" className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Nome</label>
                </div>
                <div className="relative z-0 group">
                  <input type="text" name="last_name" id="last_name" required className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                  <label htmlFor="last_name" className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Sobrenome</label>
                </div>
              </div>

              <div className="relative z-0 group">
                <input type="email" name="email" id="email" required className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label htmlFor="email" className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Email</label>
              </div>

              <div className="relative z-0 group">
                <input type="tel" name="phone" id="phone" required className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label htmlFor="phone" className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Telefone</label>
              </div>

              <div className="relative z-0 group">
                <textarea name="message" id="message" rows={4} required className="peer block w-full border-0 border-b-2 border-gray-300 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                <label htmlFor="message" className="absolute top-3 -z-10 origin-[0] scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600">Mensagem</label>
              </div>

              <button type="submit" className="w-full rounded-lg bg-blue-700 px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer pegado abajo */}
      <Footer />
    </div>
  );
}
