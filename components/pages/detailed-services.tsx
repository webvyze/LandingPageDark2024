import { useEffect, useState } from "react";
import Image from "next/image";

interface Service {
  image: string;
  title: string;
  description: string;
  howWeWork: string;
  benefits: string[];
  video?: string;
}

interface DetailedServiceModalProps {
  service: Service;
  onClose: () => void;
}

export default function DetailedServiceModal({ service, onClose }: DetailedServiceModalProps) {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      // Prevent scroll while modal is open
      document.body.style.overflow = "hidden";
      // Trigger animation
    setTimeout(() => setIsVisible(true), 50); // slight delay to start the transition
    return () => {
      document.body.style.overflow = "auto";
      setIsVisible(false);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-500 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`relative w-full max-w-3xl p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all duration-500 ease-out ${
          isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
        }`}
      >
        <div className="flex items-center gap-4 mb-4">
          <Image
            src={service.image}
            alt={service.title}
            width={80}
            height={80}
            className="rounded-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-indigo-100">{service.title}</h3>
            <p className="text-indigo-200/70">{service.description}</p>
          </div>
        </div>

        <div className="mt-4">
          <h4 className="text-xl font-semibold text-indigo-200">How We Work:</h4>
          <p className="text-indigo-200/65">{service.howWeWork}</p>
        </div>

        <div className="mt-4">
          <h4 className="text-xl font-semibold text-indigo-200">Benefits:</h4>
          <ul className="list-disc pl-5 text-indigo-200/70">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Video Section */}
        {service.video && (
          <div className="mt-4">
            <h4 className="text-xl font-semibold text-indigo-200">See it in Action:</h4>
            <video
              className="w-full mt-2 rounded-lg"
              controls
              src={service.video}
              
            />
          </div>
        )}

        {/* Close Button at the Bottom */}
        <button
          className="mt-6 w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition duration-200"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}

