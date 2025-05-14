'use client';

type Contact = {
  name: string;
  title: string;
  email: string;
  number: string;
};

type ContactListProps = {
  contacts: Contact[];
};

export default function ContactList({ contacts }: ContactListProps) {
  return (
    <section id="contato" className="px-4 py-10 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Contatos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contacts.map((contact, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-xl font-bold text-gray-600">
              {contact.name.split(' ')[0][0]}
            </div>
            <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
            <p className="text-sm text-gray-500">{contact.title}</p>
            <p className="text-sm text-gray-600 mt-2">
              📧 <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">{contact.email}</a>
            </p>
            <p className="text-sm text-gray-600 mt-1">📞 {contact.number}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
