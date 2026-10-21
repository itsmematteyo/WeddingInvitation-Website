import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import Hero from "@/components/sections/Hero";
import InvitationMessage from "@/components/sections/InvationMessage";
import WeddingDetails from "@/components/sections/WeddingDetails";
import DressCode from "@/components/sections/DressCode";
import Entourage from "@/components/sections/Entourage";
import Rsvp from "@/components/sections/Rsvp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <InvitationMessage />
        <WeddingDetails />
        <DressCode />
        <Entourage />
        <Rsvp />
      </main>
      <Footer />
    </>
  );
}
