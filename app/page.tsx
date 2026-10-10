import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import {
  About,
  BrandStrip,
  Education,
  Experience,
  Expertise,
  Impact,
  Testimonials,
} from "@/components/site/sections";
import { Contact, Footer } from "@/components/site/contact";

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-[var(--background)] text-[var(--foreground)]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BrandStrip />
        <About />
        <Expertise />
        <Impact />
        <Experience />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
