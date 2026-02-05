import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import OffersSection from "@/components/OffersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/ServicesSection";
import RoomsSection from "@/components/RoomsSection";



const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroCarousel />
        <OffersSection />
        <ContactSection />
        <ServicesSection/>
        <RoomsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
