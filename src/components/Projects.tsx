import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Smart Leave Attendance Tracker",
      description: "Built a comprehensive leave management system with admin approvals and automated fine calculation. Features automated leave history tracking and attendance-based fine reduction.",
      technologies: ["Flask", "HTML", "CSS", "JavaScript", "SQLite"],
      features: [
        "Admin approval workflow",
        "Automated fine calculation", 
        "Leave history tracking",
        "Attendance-based reductions"
      ],
      githubUrl: "https://github.com/ankithverma04",
      liveUrl: "#"
    },
    {
      title: "Athlete Sponsorship Management System", 
      description: "Comprehensive platform to streamline athlete sponsorship allocation and tracking. Includes sponsor progress monitoring and detailed performance analysis.",
      technologies: ["Python", "Streamlit"],
      features: [
        "Sponsorship allocation system",
        "Progress monitoring dashboard",
        "Performance analytics",
        "Real-time tracking"
      ],
      githubUrl: "https://github.com/ankithverma04",
      liveUrl: "#"
    },
    {
      title: "Air Quality Index (AQI) Prediction",
      description: "Developed a machine learning predictive model for AQI levels using environmental parameters. Evaluated with MAE and MSE metrics for high accuracy predictions.",
      technologies: ["Python", "Machine Learning", "Scikit-Learn"],
      features: [
        "Environmental parameter analysis",
        "ML-based predictions",
        "MAE & MSE evaluation",
        "Real-time AQI forecasting"
      ],
      githubUrl: "https://github.com/ankithverma04",
      liveUrl: "#"
    },
    {
      title: "Guess the State – Web Game",
      description: "Interactive game where users guess Indian states based on distance hints. Features an advanced version with intuitive map visualization and progressive difficulty.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Distance-based hint system",
        "Interactive map visualization", 
        "Progressive difficulty levels",
        "Responsive game design"
      ],
      githubUrl: "https://github.com/ankithverma04",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical projects ranging from web applications to machine learning solutions
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="hover-lift hover-glow border-primary/10 animate-slide-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-primary group-hover:text-primary-light transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm text-foreground/70">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-primary hover:bg-primary-dark"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="border-primary/30 text-primary hover:bg-primary/5"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground mb-4">
              Interested in seeing more of my work?
            </p>
            <Button 
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
              onClick={() => window.open('https://github.com/ankithverma04', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;