import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Wrench, Globe } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Core",
      icon: <Code className="h-6 w-6" />,
      skills: [
        "Python",
        "JavaScript", 
        "HTML & CSS",
        "MySQL",
        "Data Structures & Algorithms",
        "Machine Learning"
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        "Flask",
        "Streamlit", 
        "Git",
        "Scikit-Learn",
        "SQLite",
        "VS Code"
      ]
    },
    {
      title: "Languages",
      icon: <Globe className="h-6 w-6" />,
      skills: [
        "English (Fluent)",
        "Hindi (Native)",
        "Kannada (Native)"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building AI-powered solutions and web applications
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="hover-lift hover-glow border-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full w-fit">
                    <div className="text-primary">
                      {category.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl text-primary">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.skills.map((skill) => (
                      <div 
                        key={skill}
                        className="skill-badge block text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Technical Proficiency Bars */}
          <div className="mt-16">
            <Card className="hover-glow border-primary/10">
              <CardHeader>
                <CardTitle className="text-center text-primary text-2xl">
                  Technical Proficiency
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { skill: "Python", level: 90 },
                    { skill: "Machine Learning", level: 85 },
                    { skill: "Flask/Web Development", level: 80 },
                    { skill: "Data Structures & Algorithms", level: 75 },
                    { skill: "JavaScript", level: 70 },
                    { skill: "MySQL/Database", level: 80 }
                  ].map((item, index) => (
                    <div 
                      key={item.skill} 
                      className="animate-slide-up"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-foreground">{item.skill}</span>
                        <span className="text-sm text-primary font-semibold">{item.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${item.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;