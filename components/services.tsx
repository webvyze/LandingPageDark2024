"use client"
import { useState, MouseEvent } from "react";
import Image from "next/image";
import VideoEditingImg from "@/public/images/video-editing.png";
import type { StaticImageData } from "next/image";
import GraphicDesignImg from "@/public/images/graphic-design.png";
import SocialMediaImg from "@/public/images/social-media-mng.png";
import VoiceOverImg from "@/public/images/voice-over.png";
import PodcastEditingImg from "@/public/images/podcast-editing.png";
import CopywritingImg from "@/public/images/copywriting.png";
import DetailedServices from "@/components/pages/detailed-services";


// Define the type for a service
interface Service {
  title: string;
  image: StaticImageData;
  description: string;
  howWeWork: string;
  benefits: string[];
  video: string;
}

const serviceData: Service[] = [
  {
    title: "Video Editing",
    image: VideoEditingImg,
    description: "Professional video editing for YouTube, TikTok, Instagram, and more.",
    howWeWork: "Our video editors follow a structured process that includes storyboard reviews, color grading, and sound mixing to deliver high-quality videos tailored to your audience.",
    benefits: ["Time-efficient editing", "Enhanced video quality", "Consistent style and branding"],
    video: "/videos/video-editing.mp4", // Path to video file
  },
  {
    title: "Graphic Design",
    image: GraphicDesignImg,
    description: "Custom graphics for branding, websites, social media, and marketing.",
    howWeWork: "Our graphic designers craft unique visuals that align with your brand’s identity and appeal to your audience.",
    benefits: ["Unique, on-brand visuals", "High-quality designs for all platforms", "Collaborative revision process"],
    video: "/videos/graphic-design.mp4",
  },
  {
    title: "Social Media Management",
    image: SocialMediaImg,
    description: "Expert social media management for brand growth and engagement.",
    howWeWork: "Our team creates a strategic content plan, schedules posts, and interacts with your audience to increase brand awareness and engagement.",
    benefits: ["Increased brand presence", "Tailored content strategies", "Audience engagement and growth"],
    video: "/videos/social-media.mp4",
  },
  {
    title: "Voice Over Services",
    image: VoiceOverImg,
    description: "High-quality voiceovers for videos, podcasts, and commercials.",
    howWeWork: "We collaborate with experienced voice artists to match your brand's tone and style, delivering clear and impactful voiceovers.",
    benefits: ["Professional voice quality", "Diverse range of voice styles", "High-quality audio production"],
    video: "/videos/voice-over.mp4",
  },
  {
    title: "Podcast Editing",
    image: PodcastEditingImg,
    description: "Comprehensive podcast editing, including audio clean-up, mixing, and mastering.",
    howWeWork: "Our audio engineers enhance your podcast's sound quality through noise reduction, equalization, and mastering to deliver a professional listening experience.",
    benefits: ["Clean, crisp audio quality", "Consistent sound levels", "Enhanced listener experience"],
    video: "/videos/podcast-edit.mp4",
  },
  {
    title: "Copywriting",
    image: CopywritingImg,
    description: "SEO-optimized copy for blogs, websites, or social media. Perfect messaging for your brand.",
    howWeWork: "Our copywriters research keywords and craft engaging, optimized content that resonates with your audience and improves search engine ranking.",
    benefits: ["Increased SEO performance", "Engaging, brand-focused copy", "Clear and persuasive messaging"],
    video: "/videos/copywriting.mp4",
  },
  ];
  // Additional services...


export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveringCardIndex, setHoveringCardIndex] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, index: number) => {
    if (hoveringCardIndex !== index) {
      setHoveringCardIndex(index);
    }
    setMousePosition({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const handleCardClick = (service: Service) => {
    setSelectedService(service);
  };

  return (
    <section id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Our Services
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Explore Our Full Range of Services
            </h2>
            <p className="text-lg text-indigo-200/65">
              We provide a variety of services to help you scale your content and business. From video editing to voiceovers, we've got you covered.
            </p>
          </div>

          {/* Spotlight items */}
          <div className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
            {serviceData.map((service, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(service)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                onMouseEnter={() => setHoveringCardIndex(index)}
                onMouseLeave={() => setHoveringCardIndex(null)}
                className="relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px cursor-pointer transition-transform duration-300 hover:scale-105"
              >
                <div
                  className={`relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 transition-opacity ${
                    hoveringCardIndex === index ? "opacity-100" : "opacity-90"
                  }`}
                  style={{
                    "--mouse-x": `${mousePosition.x}px`,
                    "--mouse-y": `${mousePosition.y}px`,
                  }}
                >
                  {/* Spotlight effect for each card */}
                  {hoveringCardIndex === index && (
                    <div
                      className="absolute inset-0 rounded-[inherit] transition duration-300 ease-out pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(79, 70, 229, 0.3), transparent 70%)`,
                      }}
                    ></div>
                  )}

                  {/* Image */}
                  <Image
                    className="inline-flex"
                    src={service.image}
                    width={350}
                    height={288}
                    alt={service.title}
                  />
                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
                        <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                          {service.title}
                        </span>
                      </span>
                    </div>
                    <p className="text-indigo-200/65">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DetailedServices Modal with smooth open/close animation */}
      {selectedService && (
        <DetailedServices
          service={selectedService}
          onClose={() => setSelectedService(null)}
          transitionDuration={300} // Example duration for transition animation
        />
      )}
    </section>
  );
}



// import Image from "next/image";
// import VideoEditingImg from "@/public/images/video-editing.png";
// import GraphicDesignImg from "@/public/images/graphic-design.png";
// import SocialMediaImg from "@/public/images/social-media-mng.png";
// import VoiceOverImg from "@/public/images/voice-over.png";
// import PodcastEditingImg from "@/public/images/podcast-editing.png";
// import CopywritingImg from "@/public/images/copywriting.png";
// import Spotlight from "@/components/spotlight";

// export default function Services() {
//   return (
//     <section id="services">
//       <div className="mx-auto max-w-6xl px-4 sm:px-6">
//         <div className="pb-12 md:pb-20">
//           {/* Section header */}
//           <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
//             <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
//               <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                 Our Services
//               </span>
//             </div>
//             <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
//               Explore Our Full Range of Services
//             </h2>
//             <p className="text-lg text-indigo-200/65">
//               We provide a variety of services to help you scale your content and business. From video editing to voiceovers, we've got you covered.
//             </p>
//           </div>

//           {/* Spotlight items */}
//           <Spotlight className="group mx-auto grid max-w-sm items-start gap-6 lg:max-w-none lg:grid-cols-3">
//             {/* Card 1 - Video Editing */}
//             <a
//               className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
//               href="#0"
//             >
//               <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                 {/* Arrow */}
//                 <div
//                   className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={9}
//                     height={8}
//                     fill="none"
//                   >
//                     <path
//                       fill="#F4F4F5"
//                       d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                     />
//                   </svg>
//                 </div>
//                 {/* Image */}
//                 <Image
//                   className="inline-flex"
//                   src={VideoEditingImg}
//                   width={350}
//                   height={288}
//                   alt="Video Editing"
//                 />
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
//                       <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                         Video Editing
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-indigo-200/65">
//                     Professional video editing for YouTube, TikTok, Instagram, and more. Make your content stand out with expert editing.
//                   </p>
//                 </div>
//               </div>
//             </a>

//             {/* Card 2 - Graphic Design */}
//             <a
//               className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
//               href="#0"
//             >
//               <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                 {/* Arrow */}
//                 <div
//                   className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={9}
//                     height={8}
//                     fill="none"
//                   >
//                     <path
//                       fill="#F4F4F5"
//                       d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                     />
//                   </svg>
//                 </div>
//                 {/* Image */}
//                 <Image
//                   className="inline-flex"
//                   src={GraphicDesignImg}
//                   width={350}
//                   height={288}
//                   alt="Graphic Design"
//                 />
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
//                       <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                         Graphic Design
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-indigo-200/65">
//                     Custom graphics for your branding, website, social media, and marketing materials.
//                   </p>
//                 </div>
//               </div>
//             </a>

//             {/* Card 3 - Social Media Management */}
//             <a
//               className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
//               href="#0"
//             >
//               <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                 {/* Arrow */}
//                 <div
//                   className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={9}
//                     height={8}
//                     fill="none"
//                   >
//                     <path
//                       fill="#F4F4F5"
//                       d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                     />
//                   </svg>
//                 </div>
//                 {/* Image */}
//                 <Image
//                   className="inline-flex"
//                   src={SocialMediaImg}
//                   width={350}
//                   height={288}
//                   alt="Social Media Management"
//                 />
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
//                       <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                         Social Media Management
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-indigo-200/65">
//                     Let us manage your social media platforms and grow your presence with expert strategies.
//                   </p>
//                 </div>
//               </div>
//             </a>

//             {/* Card 4 - Voice Over Services */}
//             <a
//               className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
//               href="#0"
//             >
//               <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                 {/* Arrow */}
//                 <div
//                   className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={9}
//                     height={8}
//                     fill="none"
//                   >
//                     <path
//                       fill="#F4F4F5"
//                       d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                     />
//                   </svg>
//                 </div>
//                 {/* Image */}
//                 <Image
//                   className="inline-flex"
//                   src={VoiceOverImg}
//                   width={350}
//                   height={288}
//                   alt="Voice Over"
//                 />
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
//                       <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                         Voice Over Services
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-indigo-200/65">
//                     High-quality voiceovers for videos, podcasts, and commercials. Get professional voices for your projects.
//                   </p>
//                 </div>
//               </div>
//             </a>

//             {/* Card 5 - Podcast Editing */}
//             <a
//               className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
//               href="#0"
//             >
//               <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                 {/* Arrow */}
//                 <div
//                   className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={9}
//                     height={8}
//                     fill="none"
//                   >
//                     <path
//                       fill="#F4F4F5"
//                       d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                     />
//                   </svg>
//                 </div>
//                 {/* Image */}
//                 <Image
//                   className="inline-flex"
//                   src={PodcastEditingImg}
//                   width={350}
//                   height={288}
//                   alt="Podcast Editing"
//                 />
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
//                       <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                         Podcast Editing
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-indigo-200/65">
//                     Professional podcast editing services, including audio clean-up, mixing, and mastering.
//                   </p>
//                 </div>
//               </div>
//             </a>

//             {/* Card 6 - Copywriting */}
//             <a
//               className="group/card relative h-full overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 after:hover:opacity-20 before:group-hover:opacity-100"
//               href="#0"
//             >
//               <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:absolute after:inset-0 after:bg-gradient-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
//                 {/* Arrow */}
//                 <div
//                   className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/65 text-gray-200 opacity-0 transition-opacity group-hover/card:opacity-100"
//                   aria-hidden="true"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width={9}
//                     height={8}
//                     fill="none"
//                   >
//                     <path
//                       fill="#F4F4F5"
//                       d="m4.92 8-.787-.763 2.733-2.68H0V3.443h6.866L4.133.767 4.92 0 9 4 4.92 8Z"
//                     />
//                   </svg>
//                 </div>
//                 {/* Image */}
//                 <Image
//                   className="inline-flex"
//                   src={CopywritingImg}
//                   width={350}
//                   height={288}
//                   alt="Copywriting"
//                 />
//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3">
//                     <span className="btn-sm relative rounded-full bg-gray-800/40 px-2.5 py-0.5 text-xs font-normal">
//                       <span className="bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
//                         Copywriting
//                       </span>
//                     </span>
//                   </div>
//                   <p className="text-indigo-200/65">
//                     SEO-optimized copy for your blog, website, or social media. Let us craft the perfect message for your brand.
//                   </p>
//                 </div>
//               </div>
//             </a>
//           </Spotlight>
//         </div>
//       </div>
//     </section>
//   );
// }