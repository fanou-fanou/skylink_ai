import Navbar from "@/components/layouts/Navbar";
import Advantages from "@/components/sections/Advantages";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <main>
          <Hero/>
          <Advantages/>
      </main>
    </>
  )
}
