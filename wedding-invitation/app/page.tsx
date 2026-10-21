import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import PetalRain from "@/components/ui/PetalRain";
import AudioPlayer from "@/components/ui/AudioPlayer";
import ScrollObserver from "@/components/ui/ScrollObserver";
import Preloader from "@/components/ui/Preloader";
import { FloralSideBorder } from "@/components/ui/FloralBorders";
import Hero from "@/components/sections/Hero";
import LoveStory from "@/components/sections/LoveStory";
import InvitationMessage from "@/components/sections/InvationMessage";
import WeddingDetails from "@/components/sections/WeddingDetails";
import DressCode from "@/components/sections/DressCode";
import Entourage from "@/components/sections/Entourage";
import Gallery from "@/components/sections/Gallery";
import Rsvp from "@/components/sections/Rsvp";

export default function Home() {
  return (
    <>
      {/* Short Animation Loader with Groom & Bride names */}
      <Preloader />

      {/* Decorative Floral Side Garlands for Wide Viewports */}
      <FloralSideBorder side="left" />
      <FloralSideBorder side="right" />

      {/* Ambient Falling Petals & Romantic Melody */}
      <PetalRain />
      <AudioPlayer />

      {/* Scroll Trigger Observer */}
      <ScrollObserver />

      <Navbar />

      <main className="relative">
        <Hero />
        <LoveStory />
        <InvitationMessage />
        <WeddingDetails />
        <DressCode />
        <Entourage />
        <Gallery />
        <Rsvp />
      </main>

      <Footer />
    </>
  );
}
