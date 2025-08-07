import { Card } from "@/components/ui/card";
import { Play, Calendar, Clock } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  year: string;
  duration?: string;
  image: string;
  description: string;
  awards?: string[];
}

const ProjectCard = ({ title, category, year, duration, image, description, awards }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden bg-card border-0 hover:shadow-cinematic transition-all duration-500 hover-scale">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-warm-black via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="bg-golden-hour/90 rounded-full p-4 backdrop-blur-sm hover:bg-golden-hour transition-colors">
            <Play className="h-8 w-8 text-warm-black ml-1" />
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-golden-hour/90 text-warm-black px-3 py-1 rounded-full text-xs font-montserrat font-medium tracking-wider backdrop-blur-sm">
            {category}
          </span>
        </div>

        {/* Awards */}
        {awards && awards.length > 0 && (
          <div className="absolute top-4 right-4">
            <span className="bg-cinematic-blue/90 text-white px-3 py-1 rounded-full text-xs font-montserrat font-medium backdrop-blur-sm">
              {awards.length} Award{awards.length > 1 ? 's' : ''}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-playfair font-semibold text-card-foreground mb-2 group-hover:text-golden-hour transition-colors">
          {title}
        </h3>
        
        <p className="text-film-grain text-sm mb-4 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-film-grain font-montserrat">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{year}</span>
            </div>
            {duration && (
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>

        {/* Awards List */}
        {awards && awards.length > 0 && (
          <div className="mt-3 pt-3 border-t border-golden-hour/20">
            <div className="flex flex-wrap gap-1">
              {awards.map((award, index) => (
                <span key={index} className="text-xs text-golden-hour bg-golden-hour/10 px-2 py-1 rounded">
                  {award}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ProjectCard;