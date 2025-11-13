import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, TestTube, Pill, FileText, Clock } from "lucide-react";
import doctorIcon from "@/assets/doctor-icon.jpg";
import pharmacyIcon from "@/assets/pharmacy-icon.jpg";
import labIcon from "@/assets/lab-icon.jpg";

const Services = () => {
  const services = [
    {
      icon: <Calendar className="h-12 w-12 text-primary" />,
      image: doctorIcon,
      title: "Book Doctor Appointments",
      description: "Find and book appointments with qualified doctors online or offline. Choose from various specialties and get instant confirmation.",
      features: ["Online & Offline Consultations", "Multiple Specialties", "Instant Booking"],
    },
    {
      icon: <Pill className="h-12 w-12 text-secondary" />,
      image: pharmacyIcon,
      title: "Find Nearest Pharmacy",
      description: "Locate pharmacies near you with real-time availability of medicines. Get directions and check operating hours instantly.",
      features: ["Real-time Medicine Search", "Location-based Results", "Operating Hours"],
    },
    {
      icon: <TestTube className="h-12 w-12 text-primary" />,
      image: labIcon,
      title: "Schedule Lab Tests",
      description: "Book lab tests online, get home sample collection, and receive reports digitally. Fast, convenient, and reliable.",
      features: ["Home Sample Collection", "Digital Reports", "Quick Results"],
    },
  ];

  const additionalFeatures = [
    {
      icon: <FileText className="h-8 w-8 text-primary" />,
      title: "Digital Health Records",
      description: "Access your medical history anytime, anywhere",
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for your needs",
    },
    {
      icon: <MapPin className="h-8 w-8 text-primary" />,
      title: "Location Services",
      description: "Find healthcare services near you instantly",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Healthcare</span> Services
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need for complete healthcare management in one platform
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-primary-light rounded-xl mb-4 group-hover:scale-110 transition-transform">
                  <img src={service.image} alt={service.title} className="w-16 h-16 rounded-lg object-cover" />
                </div>
                <h3 className="text-xl font-bold text-foreground text-center">{service.title}</h3>
                <p className="text-muted-foreground text-center">{service.description}</p>
                <ul className="space-y-2 pt-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
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
            <div key={index} className="flex flex-col items-center text-center p-6 bg-light-bg rounded-xl">
              <div className="mb-3">{feature.icon}</div>
              <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
