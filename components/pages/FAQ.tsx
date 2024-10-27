import { useState, useEffect } from "react";

interface FAQProps {
  onClose: () => void;
}

export default function FAQ({ onClose }: FAQProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const faqData = [
    {
      question: "What kind of services do you offer?",
      answer:
        "We offer a wide range of digital services, including video editing, graphic design, social media management, content writing, and more. We connect you with the best freelancers to meet your needs.",
    },
    {
      question: "How does the pricing work?",
      answer:
        "Our pricing is flexible based on the service you require. We offer competitive rates, and you only pay for the services you use. You’ll receive a quote before starting any project.",
    },
    {
      question: "How do you ensure quality?",
      answer:
        "We work with experienced freelancers and conduct quality checks before delivering the final product. You can request revisions if the result does not meet your expectations.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Timelines vary based on the scope of the project. Simple tasks like video editing might take a few days, while more complex projects like branding can take a week or more. We’ll provide an estimated timeline for each project.",
    },
    {
      question: "Can I request revisions?",
      answer:
        "Yes, we offer revisions to ensure you’re satisfied with the final product. The number of revisions depends on the service package you choose.",
    },
  ];

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={() => setIsVisible(false)}
    >
      <div
        className={`bg-gray-900 text-gray-200 p-8 rounded-lg max-w-2xl mx-auto transition-transform duration-500 ease-in-out transform ${
          isVisible ? "scale-100" : "scale-90"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold mb-6 text-center text-indigo-400">
          Frequently Asked Questions
        </h3>
        <div
          className="space-y-6 max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 pr-2"
        >
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-700 pb-4 transition-opacity duration-300"
            >
              <h4 className="text-lg font-semibold text-indigo-500 mb-2">
                {faq.question}
              </h4>
              <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(onClose, 300); // Delay onClose to allow animation
          }}
          className="mt-6 px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-md text-white w-full transition-colors duration-200 ease-in-out"
        >
          Close
        </button>
      </div>
    </div>
  );
}
