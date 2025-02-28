import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PopularCategories from "@/components/PopularCategories";
import Subscribe from "@/components/Subscribe";

export default function Home() {
  return (
    <div className="oxanium-500">
      <Navbar />
      <HeroSection />
      <PopularCategories />
      <Subscribe />
      <Footer />
    </div>
  );
}
