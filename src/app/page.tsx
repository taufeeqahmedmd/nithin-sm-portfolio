import Brands from "@/components/Brands";
import Contact from "@/components/Contact";
import Effects from "@/components/Effects";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import Nav from "@/components/Nav";
import Profile from "@/components/Profile";
import Spotlight from "@/components/Spotlight";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      <Effects />
      <Nav />
      <main className="relative z-[2]">
        <Hero />
        <Brands />
        <Profile />
        <Journey />
        <Work />
        <Spotlight />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
