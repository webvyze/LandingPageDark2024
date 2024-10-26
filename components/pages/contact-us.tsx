import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-800 p-6 rounded-lg w-full max-w-lg">
        <h3 className="text-2xl font-semibold text-gray-200 mb-4">Contact Us</h3>
        <form
          action="https://formspree.io/f/xovqvzke" // Replace with actual Formspree ID
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Name</label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Email</label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-200">Message</label>
            <textarea
              name="message"
              required
              className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none"
              rows={4}
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
            >
              Send Message
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
