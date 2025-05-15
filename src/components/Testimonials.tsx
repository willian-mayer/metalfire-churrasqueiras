'use client';

type Testimonial = {
  name: string;
  testimonial: string;
};

type TestimonialsProps = {
  testimonials: Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="px-4 py-12 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Depoimentos de Clientes</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border hover:shadow-lg transition duration-300"
          >
            {/* Estrellas */}
            <div className="flex mb-2 text-yellow-400">
              {Array(5).fill(null).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className="w-5 h-5"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.974a1 1 0 00-.363-1.118L2.604 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
                </svg>
              ))}
            </div>

            {/* Testimonio */}
            <p className="text-gray-700 italic mb-4">“{item.testimonial}”</p>
            <p className="text-sm font-semibold text-gray-900">— {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
