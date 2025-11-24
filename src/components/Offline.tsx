import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, TestTube, Pill, FileText, Clock, HeartPulse } from "lucide-react";

import offline1 from "@/assets/hero-healthcare.jpg";
import offline2 from "@/assets/hero-healthcare.jpg";
import offline3 from "@/assets/hero-healthcare.jpg";

const Offline = () => {
  // NEW OFFLINE FEATURES (MAIN CARDS)
  const offline = [
  // const OfflineServices = [
    {
      icon: <FileText className="h-12 w-12 text-primary" />,
      image: offline1,
      title: "Offline Health Library",
      description:
        "Access basic information about diseases, symptoms, and medicines even without internet.",
      features: ["Disease Guide", "Medicine Info", "Emergency Steps"],
    },
    {
      icon: <Pill className="h-12 w-12 text-secondary" />,
      image: offline2,
      title: "Offline First Aid Help",
      description:
        "Read important first-aid steps for emergencies like cuts, burns, fever, and more.",
      features: ["Instant Steps", "Emergency Guide", "Works Completely Offline"],
    },
    {
      icon: <MapPin className="h-12 w-12 text-primary" />,
      image: offline3,
      title: "Last Known Location",
      description:
        "When offline, the app shows your last saved location to find nearby hospitals or pharmacies.",
      features: ["Saved Location", "Offline Maps", "Quick Access"],
    },
  ];

  // EXTRA SMALL FEATURES
  const additionalFeatures = [
    {
      icon: <HeartPulse className="h-8 w-8 text-primary" />,
      title: "Offline Health Tips",
      description: "Daily health tips stored locally for offline use.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-secondary" />,
      title: "Saved Doctor Contacts",
      description: "Access your saved doctors and emergency numbers offline.",
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Offline Report Viewer",
      description: "Open downloaded medical reports anytime.",
    },
  ];

  return (
    <section id="Offline" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Offline</span> Features
          </h2>
          <p className="text-lg text-muted-foreground">
            Smart healthcare tools that work even without internet
          </p>
        </div>

        {/* Main Offline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offline.map((service, index) => (
            <Card
              key={index}
              className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-primary-light rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {service.description}
                </p>
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-4 bg-gradient-primary hover:opacity-90 transition-opacity">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {additionalFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-light-bg rounded-xl"
            >
              <div className="mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-foreground mb-2">
                {feature.title}
              </h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offline;
