import { Search, Calendar, CheckCircle } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12" />,
      title: "Search & Find",
      description: "Search for doctors, pharmacies, or labs near you. Filter by specialty, location, and availability.",
      step: "01",
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      title: "Book Online",
      description: "Select your preferred time slot and book appointments instantly. Get confirmation immediately.",
      step: "02",
    },
    {
      icon: <CheckCircle className="h-12 w-12" />,
      title: "Get Care",
      description: "Attend your appointment, get lab reports online, or pick up medicines. Simple and hassle-free.",
      step: "03",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How <span className="text-primary">Smart Health</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Getting healthcare has never been easier. Just three simple steps to better health.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-primary opacity-20" style={{ top: "4rem" }} />
          
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Card */}
              <div className="bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="flex items-center justify-center w-20 h-20 mx-auto bg-gradient-primary rounded-xl mb-6 text-white">
                  {step.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-foreground text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to experience better healthcare?
          </p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
