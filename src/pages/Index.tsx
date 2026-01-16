import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { UserJourney } from '@/components/landing/UserJourney';
import { Pricing } from '@/components/landing/Pricing';
import { Demo } from '@/components/landing/Demo';
import { About } from '@/components/landing/About';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <UserJourney />
        <Pricing />
        <Demo />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
