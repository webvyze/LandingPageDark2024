import { useEffect, useState } from "react";

export default function PrivacyPolicy({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true); // Show modal with animation
    }
  }, [isOpen]);

  // Close the modal when the escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false); // Trigger fade-out animation
    setTimeout(onClose, 300); // Close modal after animation ends
  };

  if (!isOpen) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-gray-900 text-gray-200 p-8 rounded-lg max-w-3xl mx-auto overflow-y-auto max-h-full transition-transform transform duration-500 ${
          isVisible ? "scale-100" : "scale-90"
        }`}
      >
        <h3 className="text-2xl font-semibold mb-6">Privacy Policy</h3>
        <div className="space-y-6 text-gray-300 overflow-y-auto max-h-[75vh]">
          <h4 className="text-lg font-bold">1. Introduction</h4>
          <p>
            Your privacy is important to us at [Your Company Name]. This Privacy Policy explains how we collect, use,
            and share your personal information when you visit our website or use our services.
          </p>
          <h4 className="text-lg font-bold">2. Information We Collect</h4>
          <p>
            We collect information to provide better services to our users. This includes personal information such as
            your name, email, payment information, and service-related data.
          </p>
          <h4 className="text-lg font-bold">3. How We Use Your Information</h4>
          <p>
            We use your information to provide and improve our services, process payments, and communicate with you
            regarding projects or support requests.
          </p>
          <h4 className="text-lg font-bold">4. Sharing Your Information</h4>
          <p>
            We do not sell or rent your personal information to third parties. We only share it with service providers
            and freelancers involved in delivering your requested services.
          </p>
          <h4 className="text-lg font-bold">5. Data Security</h4>
          <p>
            We implement industry-standard security measures to protect your data, but no method of transmission over
            the internet is 100% secure.
          </p>
          <h4 className="text-lg font-bold">6. Your Rights</h4>
          <p>
            You have the right to access, update, or delete your personal information. You can also object to marketing
            communications and other data processing activities.
          </p>
          <h4 className="text-lg font-bold">7. Changes to this Policy</h4>
          <p>
            We may update this policy from time to time, so please check back regularly. Any significant changes will be
            communicated to you.
          </p>
        </div>
        <button
          onClick={handleClose}
          className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
