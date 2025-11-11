import React from "react";

const Experiences = () => {
  const experiences = [
    { title: "Frontend Developer", company: "Itskills Center", year: "2025" },
    { title: "Fullstack Intern", company: "Itskills Center", year: "2025" },
  ];

  return (
    <section id="experiences" className="bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-700 mb-8">Experiences</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold">{exp.title}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <p className="text-gray-500">{exp.year}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;
