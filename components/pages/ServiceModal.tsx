import { Dispatch, SetStateAction } from "react";

type ServiceModalProps = {
  title: string;
  description: string;
  howWeWork: string;
  benefits: string[];
  onClose: Dispatch<SetStateAction<null>>;
};

export default function ServiceModal({ title, description, howWeWork, benefits, onClose }: ServiceModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="relative max-w-md p-6 bg-gray-800 rounded-lg shadow-lg">
        <button
          onClick={() => onClose(null)}
          className="absolute top-3 right-3 text-gray-400 hover:text-white"
        >
          ×
        </button>
        <h3 className="text-xl font-bold text-indigo-500">{title}</h3>
        <p className="mt-2 text-gray-300">{description}</p>
        <h4 className="mt-4 font-semibold text-indigo-400">How We Work</h4>
        <p className="text-gray-300">{howWeWork}</p>
        <h4 className="mt-4 font-semibold text-indigo-400">Benefits</h4>
        <ul className="list-disc list-inside text-gray-300">
          {benefits.map((benefit, idx) => (
            <li key={idx}>{benefit}</li>
          ))}
        </ul>
        <button
          onClick={() => onClose(null)}
          className="mt-4 w-full btn-sm bg-gradient-to-t from-indigo-600 to-indigo-500 text-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
