
import { Header } from "../components/Header";
import { WelcomeSection } from "../components/WelcomeSection";
import { LessonsSection } from "../components/LessonsSection";
import { CtaSection } from "../components/CtaSection";
import { Footer } from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-wine text-white font-poppins">
      <Header />
      <WelcomeSection />
      <LessonsSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Index;
