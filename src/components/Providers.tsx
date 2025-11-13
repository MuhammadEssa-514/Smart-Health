import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const Providers = () => {
  const providerBenefits = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Reach More Patients",
      description: "Connect with thousands of patients looking for healthcare services in your area.",
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-secondary" />,
      title: "Grow Your Practice",
      description: "Increase your visibility and attract new patients through our platform.",
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      title: "Manage Appointments",
      description: "Streamline your appointment scheduling and reduce no-shows.",
    },
    {
      icon: <Award className="h-10 w-10 text-secondary" />,
      title: "Premium Features",
      description: "Access advanced features to enhance your practice's digital presence.",
    },
  ];

  return (
    <section id="providers" className="py-16 md:py-24 bg-light-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              For <span className="text-primary">Healthcare Providers</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join Smart Health and transform your practice. Reach more patients, manage appointments efficiently, 
              and grow your healthcare business with our comprehensive platform.
            </p>

            {/* Provider Types */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-semibold">Doctors & Specialists</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-foreground font-semibold">Clinics & Hospitals</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-foreground font-semibold">Pharmacies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span className="text-foreground font-semibold">Diagnostic Labs</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                Register Your Practice
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View Premium Plans
              </Button>
            </div>
          </div>

          {/* Right Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {providerBenefits.map((benefit, index) => (
              <Card key={index} className="border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-light-bg rounded-lg">
                      {benefit.icon}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Business Model Info */}
        <div className="mt-16 bg-background rounded-2xl p-8 md:p-12 border-2 border-primary">
          <h3 className="text-2xl font-bold text-foreground text-center mb-6">
            Our Revenue Model
          </h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-primary font-semibold mb-2">Doctor Registration</div>
              <p className="text-sm text-muted-foreground">Professional listing fees</p>
            </div>
            <div>
              <div className="text-secondary font-semibold mb-2">Clinic Partnerships</div>
              <p className="text-sm text-muted-foreground">Premium memberships</p>
            </div>
            <div>
              <div className="text-primary font-semibold mb-2">Lab Services</div>
              <p className="text-sm text-muted-foreground">Commission on bookings</p>
            </div>
            <div>
              <div className="text-secondary font-semibold mb-2">Advertisements</div>
              <p className="text-sm text-muted-foreground">Targeted healthcare ads</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Providers;
