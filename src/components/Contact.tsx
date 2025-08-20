import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "ankithverma.04@gmail.com",
      href: "mailto:ankithverma.04@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone", 
      value: "+91 8310891242",
      href: "tel:+918310891242"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Karnataka, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ankith-kumar-verma"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub", 
      href: "https://github.com/ankithverma04"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send a message.",
        variant: "destructive"
      });
      return;
    }

    // Create mailto link with form data
    const subject = `Portfolio Contact from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:ankithverma.04@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    // Show success message
    toast({
      title: "Message prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss opportunities, collaborate on projects, or just have a chat about AI/ML? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up">
              <Card className="hover-glow border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Get In Touch</CardTitle>
                  <p className="text-muted-foreground">
                    Feel free to reach out through any of these channels
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.label} className="flex items-center space-x-4 group">
                      <div className="p-3 bg-gradient-to-br from-primary/10 to-accent/20 rounded-full group-hover:scale-110 transition-transform">
                        <div className="text-primary">
                          {info.icon}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <a 
                          href={info.href}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="hover-glow border-primary/10">
                <CardHeader>
                  <CardTitle className="text-xl text-primary">Social Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <Button
                        key={social.label}
                        variant="outline"
                        size="lg"
                        className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover-lift"
                        onClick={() => window.open(social.href, '_blank')}
                      >
                        {social.icon}
                        <span className="ml-2">{social.label}</span>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Note */}
              <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20 hover-glow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-3">
                    <div className="p-2 bg-primary/20 rounded-full mt-1">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-foreground/80">
                        <span className="font-semibold text-primary">Quick Response:</span> I typically respond to emails within 24-48 hours. 
                        For urgent matters, feel free to reach out via phone or LinkedIn.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Card className="hover-glow border-primary/10">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Drop me a line and I'll get back to you soon
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary"
                        required
                      />
                    </div>
                    
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary min-h-[120px]"
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-dark hover-lift"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;