import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-secondary bg-clip-text text-transparent">
              Smart Health
            </h3>
            <p className="text-background/80 mb-4">
              Making healthcare simple, fast, and accessible for everyone.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/80 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-background/80 hover:text-background transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-background/80 hover:text-background transition-colors">How It Works</a></li>
              <li><a href="#benefits" className="text-background/80 hover:text-background transition-colors">Benefits</a></li>
              <li><a href="#providers" className="text-background/80 hover:text-background transition-colors">For Providers</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-background/80">Find Doctors</li>
              <li className="text-background/80">Book Appointments</li>
              <li className="text-background/80">Locate Pharmacies</li>
              <li className="text-background/80">Schedule Lab Tests</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2 text-background/80">
                <Mail className="h-4 w-4" />
                <span>muhammadessa1514@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <Phone className="h-4 w-4" />
                <span>+923194944514</span>
              </li>
              <li className="flex items-center space-x-2 text-background/80">
                <MapPin className="h-4 w-4" />
                <span>Smart Health ,Nagaral near Airport Road Gilgit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
      <div className="border-t border-background/20 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    
    <p className="text-background/80 text-sm text-center md:text-left">
      © 2024 Smart Health. All rights reserved.
    </p>

    <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
      <a href="#" className="text-background/80 hover:text-background transition-colors">Team Members</a>
      <a href="https://muhammadessa-514.github.io/My-Personal-Portfolio/" className="text-background/80 hover:text-background transition-colors">Muhammad Essa</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Masooma</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Nazia</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Ahmar</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Atif</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Privacy Policy</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Terms of Service</a>
      <a href="#" className="text-background/80 hover:text-background transition-colors">Cookie Policy</a>
    </div>

  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
