import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import Advantages from "@/components/sections/Advantages";
import Contact from "@/components/sections/Contact";
import Features from "@/components/sections/Features";
import Hero from "@/components/sections/Hero";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
          <Hero/>
          <Advantages/>
          <Features/>
          <Testimonials />
          <Contact />
      </main>
      <Footer />
    </>
  )
}
