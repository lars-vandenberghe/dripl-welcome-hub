import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import GettingStartedSection from "@/components/GettingStartedSection";
import ProductSection from "@/components/ProductSection";
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
      <ProductSection />
      <OrderingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
