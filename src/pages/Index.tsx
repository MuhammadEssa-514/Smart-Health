import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Offline from "@/components/Offline";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Team from "@/components/Team";
import Providers from "@/components/Providers";
import CompanyTeam from "@/components/CompanyTeam";

import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Benefits />
      <Team />
      <Providers />   
      <Offline />
      <CompanyTeam />
      <Footer />
    </div>
  );
};

export default Index;
