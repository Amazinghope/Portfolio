import React from "react";

const Testimonials = () => {
  const testimonials = [
    { name: "John Doe", message: "AmazingHope is an excellent developer!" },
    { name: "Jane Smith", message: "Delivered my project on time with amazing quality." },
  ];

  return (
    <section id="testimonials" className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-700 mb-8">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 bg-amber-50 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-gray-700 italic">"{t.message}"</p>
              <p className="text-gray-900 font-semibold mt-4">- {t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
