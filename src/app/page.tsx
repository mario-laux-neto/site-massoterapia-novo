import { Header } from "../components/Header";
import { Hero } from "../components/sections/Hero";
import { About } from "../components/sections/About";
import { Services } from "../components/sections/Services";
import { Partnership } from "../components/sections/Partnership"; // Novo
import { Location } from "../components/sections/Location";       // Novo
import { Footer } from "../components/Footer";                   // 
import { SpaceGallery } from "../components/sections/SpaceGallery";

export default function Home() {
  return (
    <main className="bg-[#F9F7F2] min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Partnership />
      <Location />
      <SpaceGallery />
      <Footer />
    </main>
  );
}