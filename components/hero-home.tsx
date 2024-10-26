"use client"; // Add this at the top to enable client-side behavior

import { useRef } from "react";
import VideoThumb from "@/public/images/videoThumb.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  const servicesRef = useRef<HTMLElement | null>(null);

  const handleScrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Hero Section */}
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Hero content */}
          <div className="py-12 md:py-20">
            {/* Section header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.green.400),theme(colors.gray.50),theme(colors.green.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Your Creative Partner for Growth
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-xl text-gray-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  We connect creators, influencers, and businesses with top-tier freelance talent. From YouTube videos to social media management, let us handle the tasks while you focus on your passion.
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                  <div data-aos="fade-up" data-aos-delay={400}>
                    <button
                      onClick={handleScrollToServices}
                      className="btn group mb-4 w-full bg-gradient-to-t from-green-600 to-green-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    >
                      <span className="relative inline-flex items-center">
                        Explore Our Services
                        <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                          -&gt;
                        </span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal video showcasing your services */}
            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={1104}
              thumbHeight={576}
              thumbAlt="Modal video thumbnail"
              video="videos/video.mp4"
              videoWidth={1920}
              videoHeight={1080}
            />
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section ref={servicesRef} id="services">
        {/* Your "Our Services" content goes here */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-center text-3xl font-semibold text-gray-200"></h2>
          {/* Add service content here */}
        </div>
      </section>
    </>
  );
}
