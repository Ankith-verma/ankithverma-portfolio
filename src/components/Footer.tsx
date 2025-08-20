import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-sm">Made with</span>
            <Heart className="h-4 w-4 text-accent fill-current animate-pulse" />
            <span className="text-sm">by Ankith Kumar Verma</span>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mb-4 text-sm">
            <a 
              href="https://linkedin.com/in/ankith-kumar-verma" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="https://github.com/ankithverma04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              GitHub
            </a>
            <span className="text-primary-foreground/50">•</span>
            <a 
              href="mailto:ankithverma.04@gmail.com"
              className="hover:text-accent transition-colors"
            >
              Email
            </a>
          </div>
          
          <p className="text-xs text-primary-foreground/70">
            © {currentYear} Ankith Kumar Verma. All rights reserved.
          </p>
          
          <p className="text-xs text-primary-foreground/50 mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;