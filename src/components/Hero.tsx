import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary-light)))`,
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-accent-light/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Name & Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Ankith Kumar Verma
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary-foreground/90 mb-4">
            Aspiring AI/ML Engineer
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            "Passionate about building AI-powered solutions that bridge ideas and real-world impact."
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 hover-lift"
              onClick={() => window.open('https://drive.google.com/file/d/1Z8UukvZ-tGMgugSVmNlHg-F2bYhO2HcW/view?usp=drive_link', '_blank')}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-primary-foreground text-primary hover:bg-primary-foreground hover:text-primary hover-lift"
            >
              <Mail className="mr-2 h-5 w-5" />
              Let's Connect
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToAbout}
              className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              <ArrowDown className="h-6 w-6 mx-auto" />
              <p className="text-sm mt-2">Scroll to explore</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;