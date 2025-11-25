import { Linkedin, Mail } from "lucide-react";
import teamMember1 from "@/assets/Dr Muhammad.jpeg";
import teamMember2 from "@/assets/dr fazal manan.jpg";
import teamMember3 from "@/assets/doctor imran.jpeg";
import teamMember4 from "@/assets/dr firoz.jpg";
import teamMember5 from "@/assets/dr sana.jpg";

const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Muhammad",
      role: "Chief Medical Officer",
      image: teamMember1,
      email: "muhammad@smarthealth.com",
      linkedin: "#"
    },
    {
      name: "Dr. fazal manan",
      role: "Operations Director",
      image: teamMember2,
      email: "manan@smarthealth.com",
      linkedin: "#"
    },
    {
      name: "Dr Imran",
      role: "Technology Lead",
      image: teamMember3,
      email: "imran@smarthealth.com",
      linkedin: "#"
    },
    {
      name: "Dr. firoz",
      role: "Clinical Coordinator",
      image: teamMember4,
      email: "firoz@smarthealth.com",
      linkedin: "#"
    },
    {
      name: "Dr sana",
      role: "Business Development",
      image: teamMember5,
      email: "sana@smarthealth.com",
      linkedin: "#"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet With Famous Doctors
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Dedicated professionals working together to revolutionize healthcare accessibility
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
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
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="bg-background p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label={`LinkedIn profile of ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
