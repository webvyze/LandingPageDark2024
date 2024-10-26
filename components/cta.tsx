"use client";

import { useState } from "react";
import Modal from "./pages/contact-us"; // Assuming this is in the same folder

export default function ContactUs() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <section className="relative overflow-hidden py-16 bg-gray-900">
      {/* Contact Us Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl font-bold text-transparent bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-clip-text animate-[gradient_6s_linear_infinite] md:text-5xl">
          Contact Us
        </h2>
        <p className="text-lg text-indigo-200/65 mt-6">
          We would love to hear from you! Please reach out with any questions or inquiries.
        </p>
        <div className="mt-8">
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <span className="block text-indigo-300 text-lg font-semibold">Email:</span>
              <a href="mailto:webvyze@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                webvyze@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Call to Action - Open Contact Us Form */}
        <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center mt-8">
          <button
            className="btn bg-gradient-to-t from-indigo-600 to-indigo-500 text-white shadow-md hover:shadow-lg hover:bg-indigo-400 hover:-translate-y-1 transform transition-all duration-300 ease-in-out"
            onClick={handleModalToggle}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={handleModalToggle} />
    </section>
  );
}
