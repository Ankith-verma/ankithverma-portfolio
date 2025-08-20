import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const educationData = [
    {
      degree: "B.E. in Artificial Intelligence and Machine Learning",
      institution: "Ballari Institute of Technology and Management",
      period: "2022 – 2026",
      grade: "CGPA: 8.28",
      description: "Comprehensive program covering AI/ML fundamentals, advanced algorithms, and practical applications."
    },
    {
      degree: "XII (Higher Secondary)",
      institution: "Basavarajeshwari Public School and College", 
      period: "2020 – 2022",
      grade: "87%",
      description: "Science stream with focus on Mathematics, Physics, and Computer Science."
    },
    {
      degree: "X (Secondary)",
      institution: "Satya High School",
      period: "2019 – 2020", 
      grade: "93%",
      description: "Strong foundation in core subjects with excellent academic performance."
    }
  ];

  const certifications = [
    {
      title: "Python Programming",
      organization: "EZ Training and Technologies",
      period: "Apr 2024 – May 2024",
      description: "Comprehensive Python programming course covering fundamentals to advanced concepts."
    },
    {
      title: "Data Structures",
      organization: "EZ Training and Technologies", 
      period: "Feb 2025 – Mar 2025",
      description: "In-depth study of data structures and algorithms for efficient problem-solving."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Experience Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="hover-glow border-primary/10 animate-slide-up">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full w-fit">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-2xl text-primary">
                Current Status
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
                Currently a <span className="text-primary font-semibold">fresher</span> with strong project-based experience. 
                Actively seeking <span className="text-primary font-semibold">internships and opportunities</span> to apply 
                AI/ML skills in real-world applications and contribute to innovative teams.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                  <div className="text-2xl font-bold text-primary">4+</div>
                  <div className="text-sm text-muted-foreground">Major Projects</div>
                </div>
                <div className="p-4 rounded-lg bg-accent/20 hover:bg-accent/30 transition-colors">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="p-4 rounded-lg bg-primary-light/10 hover:bg-primary-light/20 transition-colors">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-muted-foreground">Tech Stacks</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education Section */}
        <div id="education" className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <Card 
                key={edu.degree}
                className="hover-lift hover-glow border-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="p-2 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-primary">{edu.degree}</h3>
                        <p className="text-foreground/80">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <div className="text-sm text-muted-foreground">{edu.period}</div>
                      <div className="text-lg font-semibold text-accent">{edu.grade}</div>
                    </div>
                  </div>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.title}
                className="hover-lift hover-glow border-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg text-primary">{cert.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {cert.organization} • {cert.period}
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;