import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, XCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
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

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formElement = e.target as HTMLFormElement;
      const response = await fetch(formElement.action, {
        method: 'POST',
        body: new FormData(formElement)
      });

      if (response.ok) {
        setSubmitStatus('success');
        toast({
          title: "Message sent successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form after delay
        setTimeout(() => {
          setFormData({ name: "", email: "", message: "" });
          setSubmitStatus('idle');
        }, 3000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast({
        title: "Something went wrong",
        description: "Please try again or reach out via email directly.",
        variant: "destructive"
      });
      
      // Reset error state after delay
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
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
                  <form 
                    onSubmit={handleSubmit} 
                    action="https://api.web3forms.com/submit"
                    method="POST"
                    className="space-y-6"
                  >
                    <input type="hidden" name="access_key" value="5007fe84-fc7c-49ce-8534-e8cc5fea74e9" />
                    
                    {/* Success/Error Messages */}
                    {submitStatus === 'success' && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-fade-in">
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="h-6 w-6 text-green-600 animate-scale-in" />
                          <div>
                            <p className="text-green-800 font-semibold">Your message has been sent successfully!</p>
                            <p className="text-green-600 text-sm">Thank you for reaching out. I'll get back to you soon.</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {submitStatus === 'error' && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-fade-in">
                        <div className="flex items-center space-x-3">
                          <XCircle className="h-6 w-6 text-red-600 animate-scale-in" />
                          <div>
                            <p className="text-red-800 font-semibold">Something went wrong. Please try again.</p>
                            <p className="text-red-600 text-sm">Or reach out via email directly.</p>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="border-primary/20 focus:border-primary"
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
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
                        disabled={isSubmitting}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary-dark hover-lift disabled:opacity-50"
                      disabled={isSubmitting || submitStatus === 'success'}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-foreground mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
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