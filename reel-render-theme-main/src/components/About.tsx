import { Button } from "@/components/ui/button";
import { Award, Camera, Users, Film } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: Award,
      number: "15+",
      label: "International Awards",
      description: "Including Sundance, Cannes, and Emmy recognition"
    },
    {
      icon: Film,
      number: "50+",
      label: "Projects Completed",
      description: "From intimate documentaries to large-scale commercials"
    },
    {
      icon: Users,
      number: "100+",
      label: "Happy Clients",
      description: "Fortune 500 companies to independent artists"
    },
    {
      icon: Camera,
      number: "8",
      label: "Years Experience",
      description: "Mastering the craft of visual storytelling"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-card-foreground mb-6">
              Creating Stories That <span className="text-golden-hour">Matter</span>
            </h2>
            
            <div className="space-y-6 text-film-grain leading-relaxed">
              <p className="text-lg">
                With over eight years in the industry, I've dedicated my career to crafting compelling narratives 
                that resonate deeply with audiences. My work spans from intimate character studies to 
                large-scale commercial productions.
              </p>
              
              <p>
                My approach combines technical precision with emotional authenticity, ensuring every frame 
                serves the story. I believe that great filmmaking happens when passion meets purpose, 
                and every project is an opportunity to push creative boundaries.
              </p>
              
              <p>
                Whether capturing the raw emotion of a documentary subject or the polished elegance of a 
                luxury brand campaign, my goal remains constant: to create visual experiences that move, 
                inspire, and endure.
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="cinematic" size="cinematic">
                Download Resume
              </Button>
              <Button variant="outline_cinematic" size="cinematic">
                View Equipment List
              </Button>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="text-center p-6 bg-background rounded-lg hover:bg-golden-hour/5 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <achievement.icon className="h-8 w-8 text-golden-hour mx-auto mb-4" />
                <div className="text-3xl font-playfair font-bold text-golden-hour mb-2">
                  {achievement.number}
                </div>
                <div className="font-montserrat font-semibold text-card-foreground mb-2 text-sm tracking-wide">
                  {achievement.label}
                </div>
                <p className="text-xs text-film-grain leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in">
          <h3 className="text-2xl font-playfair font-bold text-center text-card-foreground mb-12">
            Technical Expertise
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "Cinematography",
              "Directing",
              "Color Grading",
              "Post-Production",
              "Script Development",
              "Project Management",
              "Client Relations",
              "Equipment Operations"
            ].map((skill, index) => (
              <div
                key={skill}
                className="text-center p-4 bg-background/50 rounded-lg hover:bg-golden-hour/5 transition-colors duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <span className="font-montserrat text-sm tracking-wide text-card-foreground">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;