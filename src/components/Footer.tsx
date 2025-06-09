
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <div className="text-sm text-muted-foreground">
            © 2024 John Doe. All rights reserved.
          </div>

          {/* Contact Links */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent transition-colors duration-200"
              onClick={() => window.open('mailto:john@example.com', '_blank')}
            >
              <Mail className="h-4 w-4 mr-2" />
              john@example.com
            </Button>
            
            <Button
              variant="ghost"
              size="sm"
              className="hover:bg-accent transition-colors duration-200"
              onClick={() => window.open('https://github.com', '_blank')}
            >
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </div>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ↑
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
