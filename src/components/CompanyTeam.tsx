import { Linkedin, Mail } from "lucide-react";

// Import your company team images
import member1 from "@/assets/muhammadessa.jpg";
import member2 from "@/assets/muhammadessa.jpg";
import member3 from "@/assets/muhammadessa.jpg";
import member4 from "@/assets/muhammadessa.jpg";
import member5 from "@/assets/muhammadessa.jpg";

const CompanyTeam = () => {
  const companyMembers = [
    {
      name: "Muhammad Essa",
      role: "CEO",
      image: member1,
      email: "muhammadessa1514@gmail.com",
      linkedin: "https://muhammadessa-514.github.io/My-Personal-Portfolio/"
    },
    {
      name: "Masooma",
      role: "Financial Manager",
      image: member2,
      email: "masooma@company.com",
      linkedin: "#"
    },
    {
      name: "Nazia",
      role: "Digital Marketer and Seo Expert",
      image: member3,
      email: "nazia@company.com",
      linkedin: "#"
    },
    {
      name: "Ahmar",
      role: "Web Developer",
      image: member4,
      email: "ahmar@company.com",
      linkedin: "#"
    },
    {
      name: "Atif",
      role: "Manager",
      image: member5,
      email: "atif@company.com",
      linkedin: "#"
    }
  ];

  return (
    <section id="companyteam" className="py-20 px-4 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-primary">
            Meet Our Company Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The creative minds working behind Smart Health’s success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {companyMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyTeam;
