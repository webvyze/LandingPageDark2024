import { useState } from "react";
import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import FAQ from "../pages/FAQ"; // Import FAQ modal
import PrivacyPolicy from "../pages/PrivacyPolicy"; // Import Privacy Policy modal

export default function Footer() {
  const [faqOpen, setFaqOpen] = useState(false); // Manage FAQ modal state
  const [privacyOpen, setPrivacyOpen] = useState(false); // Manage Privacy Policy modal state

  return (
    <>
      <footer>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          {/* Footer illustration */}
          <div
            className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={FooterIllustration}
              width={1076}
              height={378}
              alt="Footer illustration"
            />
          </div>
          <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-4 lg:grid-rows-1 xl:gap-20">
            {/* 1st block: Social Links */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Connect with Us</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://x.com/webvyze"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    X.com
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="https://www.instagram.com/webvyze/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* 2nd block: Quick Links */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="#about"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="#services"
                  >
                    Our Services
                  </a>
                </li>
                {/* <li>
                  <button
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    onClick={() => setFaqOpen(true)} // Open FAQ modal
                  >
                    FAQs
                  </button>
                </li> */}
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="#contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* 3rd block: Support */}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-gray-200">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    onClick={() => setFaqOpen(true)} // Open FAQ modal
                  >
                    FAQs
                  </button>
                </li>
                <li>
                  <a
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    href="#support"
                  >
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>

            {/* 4th block: Branding */}
            <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
              <div className="mb-3">
                <Logo />
              </div>
              <div className="text-sm">
                <p className="mb-3 text-indigo-200/65">
                  © 2024 Webvyze
                  <span className="text-gray-700"> · </span>
                  <button
                    className="text-indigo-200/65 transition hover:text-indigo-500"
                    onClick={() => setPrivacyOpen(true)} // Open Privacy Policy modal
                  >
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Integrate FAQ Modal */}
      {faqOpen && <FAQ onClose={() => setFaqOpen(false)} />}

      {/* Integrate Privacy Policy Modal */}
      {privacyOpen && <PrivacyPolicy isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />}
    </>
  );
}
