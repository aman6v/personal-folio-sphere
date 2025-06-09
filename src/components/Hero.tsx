
import { Button } from "@/components/ui/button";
import { Download, Github, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Profile Image */}
        <div className="mb-8">
          <img
            src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover ring-4 ring-muted"
          />
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 text-balance">
          John Doe
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed text-balance">
          Software Developer & Designer crafting beautiful digital experiences with clean code and thoughtful design.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium rounded-full bg-primary hover:bg-primary/90 transition-all duration-200 hover:scale-105"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base font-medium rounded-full border-2 hover:bg-accent transition-all duration-200 hover:scale-105"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-6 text-base font-medium rounded-full border-2 hover:bg-accent transition-all duration-200 hover:scale-105"
              onClick={() => window.open('mailto:john@example.com', '_blank')}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
