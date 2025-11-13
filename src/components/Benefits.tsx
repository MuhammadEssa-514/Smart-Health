import { Card, CardContent } from "@/components/ui/card";
import { Clock, DollarSign, Shield, Smartphone, Users, Zap } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Clock className="h-10 w-10 text-primary" />,
      title: "Save Time",
      description: "No more waiting in long queues. Book appointments and manage healthcare online.",
    },
    {
      icon: <DollarSign className="h-10 w-10 text-secondary" />,
      title: "Cost Effective",
      description: "Compare prices, find the best deals, and access affordable healthcare services.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure & Private",
      description: "Your medical data is encrypted and protected with industry-standard security.",
    },
    {
      icon: <Smartphone className="h-10 w-10 text-secondary" />,
      title: "Easy Access",
      description: "Access healthcare services anytime, anywhere from your phone or computer.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Verified Providers",
      description: "All doctors, pharmacies, and labs are verified and certified professionals.",
    },
    {
      icon: <Zap className="h-10 w-10 text-secondary" />,
      title: "Instant Results",
      description: "Get lab reports, prescriptions, and medical records instantly online.",
    },
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">Smart Health</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience healthcare that's designed around you - simple, fast, and reliable.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border hover:border-primary transition-all duration-300 hover:shadow-lg group">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-light-bg rounded-lg group-hover:bg-primary-light transition-colors">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-white/80">Happy Patients</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Expert Doctors</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100+</div>
              <div className="text-white/80">Pharmacies</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-white/80">Lab Partners</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
