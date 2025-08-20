import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="text-center animate-slide-up">
              <div className="relative inline-block">
                <div className="w-80 h-80 mx-auto rounded-full overflow-hidden shadow-2xl hover-lift">
                  <img 
                    src={profilePlaceholder} 
                    alt="Ankith Kumar Verma - Professional Photo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-accent to-primary-light rounded-full opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>

            {/* Bio Content */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="hover-lift hover-glow border-primary/10">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                    I am an aspiring <span className="text-primary font-semibold">AI/ML Engineer</span> and B.E. student in Artificial Intelligence and Machine Learning at Ballari Institute of Technology and Management.
                  </p>
                  
                  <p className="text-lg leading-relaxed text-foreground/80 mb-6">
                    With <span className="text-primary font-semibold">strong problem-solving abilities</span> and a passion for impactful projects, I aim to contribute to innovative teams and gain industry experience.
                  </p>

                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                      <div className="text-2xl font-bold text-primary">8.28</div>
                      <div className="text-sm text-muted-foreground">Current CGPA</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                      <div className="text-2xl font-bold text-primary">2026</div>
                      <div className="text-sm text-muted-foreground">Graduation Year</div>
                    </div>
                  </div>

                  {/* Quick Facts */}
                  <div className="mt-8 space-y-3">
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span>🎯 Seeking AI/ML internships and opportunities</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span>🌐 Fluent in English, Hindi, and Kannada</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary-light rounded-full mr-3"></div>
                      <span>🚀 Passionate about innovative AI solutions</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;