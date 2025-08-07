import { Button } from "@/components/ui/button";
import { Play, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-filmmaker.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cinematic filmmaker workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6 leading-tight text-shadow-cinematic">
          Crafting Stories
          <span className="block text-golden-hour">Through Cinema</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-silver-highlight mb-8 max-w-2xl mx-auto leading-relaxed font-inter">
          Award-winning filmmaker creating compelling narratives that resonate with audiences worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="cinematic" size="cinematic" className="group">
            <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Watch Showreel
          </Button>
          <Button variant="hero" size="cinematic">
            View Portfolio
          </Button>
        </div>

        {/* Featured Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 opacity-80">
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-golden-hour">15+</div>
            <div className="text-sm font-montserrat tracking-wider text-silver-highlight">Awards Won</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-golden-hour">50+</div>
            <div className="text-sm font-montserrat tracking-wider text-silver-highlight">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-playfair font-bold text-golden-hour">8</div>
            <div className="text-sm font-montserrat tracking-wider text-silver-highlight">Years Experience</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-golden-hour" />
      </div>
    </section>
  );
};

export default Hero;