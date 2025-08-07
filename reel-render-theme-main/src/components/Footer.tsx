import { Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Work", href: "#work" },
    { name: "About", href: "#about" },
    { name: "Journal", href: "#journal" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-warm-black py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-3xl font-playfair font-bold text-golden-hour mb-4">
              CineCraft
            </div>
            <p className="text-silver-highlight leading-relaxed mb-6 max-w-md">
              Crafting compelling visual narratives that resonate with audiences worldwide. 
              Every frame tells a story, every story matters.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm text-film-grain">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-golden-hour" />
                <span>hello@cinecraft.studio</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-golden-hour" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-golden-hour" />
                <span>Los Angeles, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-film-grain hover:text-golden-hour transition-colors duration-300 story-link"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold text-white mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3 text-film-grain">
              <li>Cinematography</li>
              <li>Music Videos</li>
              <li>Documentaries</li>
              <li>Commercial Work</li>
              <li>Color Grading</li>
              <li>Post-Production</li>
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-golden-hour/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-film-grain hover:text-golden-hour transition-colors duration-300 hover:scale-110 transform"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          <div className="text-sm text-film-grain">
            <p>&copy; 2024 CineCraft. All rights reserved.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-gradient-golden/10 rounded-lg p-8">
          <h3 className="text-2xl font-playfair font-bold text-white mb-4">
            Ready to Create Something Amazing?
          </h3>
          <p className="text-silver-highlight mb-6 max-w-md mx-auto">
            Let's discuss your next project and bring your vision to life.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-12 px-8 py-3 text-base bg-golden-hour text-warm-black hover:bg-golden-hour/90 font-montserrat tracking-wide rounded-md transition-all duration-300 hover:shadow-glow"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;