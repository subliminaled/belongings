import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Filmmakers from "@/components/home/Filmmakers";
import SubmitStory from "@/components/home/SubmitStory";
import Stories from "@/components/home/Stories";
import Contact from "@/components/home/Contact";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <SubmitStory />
      <Stories />
      <Filmmakers />      
      <Contact />
    </main>
  );
}