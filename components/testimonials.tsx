"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";
import TestimonialImg05 from "@/public/images/testimonial-05.jpg";
import TestimonialImg06 from "@/public/images/testimonial-06.jpg";

const testimonials = [
  {
    img: TestimonialImg01,
    name: "Techie Tom",
    subscribers: "1.2k",
    content:
      "Using this agency transformed my videos! The editing quality is superb, and I finally have time to focus on creating more content!",
    categories: [1], // 1-5k range
  },
  {
    img: TestimonialImg02,
    name: "Cooking with Cara",
    subscribers: "2.7k",
    content:
      "With the editing support I get here, my channel’s growth has been amazing. Plus, they nailed the style I wanted!",
    categories: [1], // 1-5k range
  },
  {
    img: TestimonialImg03,
    name: "GameTime Guru",
    subscribers: "5.6k",
    content:
      "Fantastic service! The video enhancements gave my channel a new look. Viewers are loving the improvements!",
    categories: [2], // 5-10k range
  },
  {
    img: TestimonialImg04,
    name: "Fitness Focus",
    subscribers: "8.4k",
    content:
      "Editing and thumbnails have been spot-on, making my channel stand out in a crowded market. Couldn't be happier!",
    categories: [2], // 5-10k range
  },
  {
    img: TestimonialImg05,
    name: "DIY Darlene",
    subscribers: "12.3k",
    content:
      "Getting the right editing support here has been a game-changer. It’s helped me reach over 10k subs!",
    categories: [3], // 10k+ range
  },
  {
    img: TestimonialImg06,
    name: "Beauty by Bianca",
    subscribers: "15.4k",
    content:
      "They helped me improve my video quality and even suggested some amazing thumbnail designs. My subscriber count has been growing steadily!",
    categories: [3], // 10k+ range
  },
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number | null>(null); // null means no filter, show all reviews

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Section header */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            What Our YouTubers Say
          </h2>
          <p className="text-lg text-indigo-200/65">
            We empower creators from all subscriber levels to achieve their vision with professional editing and creative support.
          </p>
        </div>

        {/* Subscriber Range Buttons */}
        <div className="flex justify-center pb-12 max-md:hidden md:pb-16">
          <div className="relative inline-flex flex-wrap justify-center rounded-[1.25rem] bg-gray-800/40 p-1">
            {/* Subscriber range buttons */}
            {["1-5k Subscribers", "5-10k Subscribers", "10k+ Subscribers"].map((range, index) => (
              <button
                key={index}
                className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                  category === index + 1
                    ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900"
                    : "opacity-65 transition-opacity hover:opacity-90"
                }`}
                aria-pressed={category === index + 1}
                onClick={() => setCategory(index + 1)}
              >
                <span>{range}</span>
              </button>
            ))}
            {/* Button to clear selection */}
            <button
              className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-full px-3 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-200 ${
                category === null
                  ? "relative bg-gradient-to-b from-gray-900 via-gray-800/60 to-gray-900"
                  : "opacity-65 transition-opacity hover:opacity-90"
              }`}
              aria-pressed={category === null}
              onClick={() => setCategory(null)} // Clear selection
            >
              <span>Show All</span>
            </button>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div
          className="mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          ref={masonryContainer}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <Testimonial
                testimonial={testimonial}
                category={category}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Testimonial({
  testimonial,
  category,
}: {
  testimonial: {
    img: StaticImageData;
    name: string;
    subscribers: string;
    content: string;
    categories: number[];
  };
  category: number | null; // null means show all
}) {
  return (
    <article
      className={`relative rounded-2xl bg-gradient-to-br from-gray-900/50 via-gray-800/25 to-gray-900/50 p-5 backdrop-blur-sm transition-opacity duration-300 ${
        category !== null && !testimonial.categories.includes(category)
          ? "opacity-30" // Reduce opacity for non-selected categories
          : "opacity-100"
      }`}
    >
      <div className="flex flex-col gap-4">
        <p className="text-indigo-200/65 before:content-['“'] after:content-['”']">
          {testimonial.content}
        </p>
        <div className="flex items-center gap-3">
          <Image
            className="inline-flex shrink-0 rounded-full"
            src={testimonial.img}
            width={36}
            height={36}
            alt={testimonial.name}
          />
          <div className="text-sm font-medium text-gray-200">
            <span>{testimonial.name}</span>
            <span className="text-gray-700"> - </span>
            <span className="text-indigo-200/65">{testimonial.subscribers} subscribers</span>
          </div>
        </div>
      </div>
    </article>
  );
}
