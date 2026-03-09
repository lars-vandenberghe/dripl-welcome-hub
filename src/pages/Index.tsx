import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import ActivationSection from "@/components/ActivationSection";
import ProductSection from "@/components/ProductSection";
import HealthSection from "@/components/HealthSection";
import OrderingSection from "@/components/OrderingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GettingStartedSection />
      <ActivationSection />
      <ProductSection />
      <OrderingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
