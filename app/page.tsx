import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="bg-[#18181B]"> 
        <FloatingNav  navItems={navItems}/>
        <Hero />
        <About />
        <Projects  />
        <Contact />
        <Footer />
    </main>
  );
}
