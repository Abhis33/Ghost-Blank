import { useState } from "react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Fiction", "Documentary", "Commercial", "Music Video"];

  const projects = [
    {
      title: "The Last Frame",
      category: "Fiction",
      year: "2024",
      duration: "15 min",
      image: "https://images.unsplash.com/photo-1489599735188-3c8725ca9925?w=800&h=450&fit=crop",
      description: "A haunting short film about memory and loss, exploring the relationship between a photographer and his final subject.",
      awards: ["Sundance", "Cannes Short"]
    },
    {
      title: "Urban Rhythms",
      category: "Music Video",
      year: "2024",
      duration: "4 min",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=450&fit=crop",
      description: "A dynamic music video featuring innovative cinematography and street dance choreography in urban settings.",
      awards: ["MTV VMA"]
    },
    {
      title: "Silicon Dreams",
      category: "Documentary",
      year: "2023",
      duration: "45 min",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=450&fit=crop",
      description: "An investigative documentary exploring the human cost of technological advancement in Silicon Valley.",
      awards: ["Emmy Nominated"]
    },
    {
      title: "Eternal Timepiece",
      category: "Commercial",
      year: "2023",
      duration: "2 min",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&h=450&fit=crop",
      description: "Luxury watch commercial combining practical effects with stunning cinematography to showcase craftsmanship.",
      awards: ["Cannes Lions"]
    },
    {
      title: "Wilderness Within",
      category: "Fiction",
      year: "2022",
      duration: "22 min",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=450&fit=crop",
      description: "A contemplative piece about human connection with nature, shot entirely in natural light.",
      awards: ["SXSW", "Tribeca"]
    },
    {
      title: "Neon Nights",
      category: "Music Video",
      year: "2022",
      duration: "3 min",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&h=450&fit=crop",
      description: "Cyberpunk-inspired music video featuring neon aesthetics and futuristic choreography.",
      awards: []
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="work" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Featured <span className="text-golden-hour">Work</span>
          </h2>
          <p className="text-lg text-film-grain max-w-2xl mx-auto leading-relaxed">
            A curated selection of my most impactful projects, spanning fiction, documentary, and commercial work.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "cinematic" : "outline_cinematic"}
              size="sm"
              onClick={() => setActiveFilter(category)}
              className="font-montserrat tracking-wide"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button variant="hero" size="cinematic">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;