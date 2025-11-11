import React from "react";

const Contact = () => (
  <section id="contact" className="bg-gray-100 py-16 px-6">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-amber-700 mb-8">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
        />
        <textarea
          placeholder="Your Message"
          rows="5"
          className="p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-700"
        />
        <button
          type="submit"
          className="bg-amber-700 text-white py-3 rounded-full w-40 hover:bg-amber-800 transition mt-4"
        >
          Send
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
