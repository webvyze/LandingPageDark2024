export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
// import ExploreServices from "@/components/explore-services"; // New component
import Services from "@/components/services";
import Features from "@/components/features";
// import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
// import Services from "@/components/services";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      {/* <ExploreServices /> New "Explore Our Services" section */}
      <Services />
      <Features />
      {/* <Testimonials /> */}
      <Cta />
    </>
  );
}
