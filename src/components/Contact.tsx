
import React, { useState } from "react";
import FadeIn from "./animations/FadeIn";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MailCheck, MapPin, Phone, Globe } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto px-6 lg:px-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mercz-text mb-4">
              Get in Touch
            </h2>
            <p className="text-mercz-text-light">
              Have a question or want to discuss a project? Reach out to us and our team will get back to you soon.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div>
              <h3 className="text-2xl font-display font-semibold text-mercz-text mb-6">
                Send Us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-mercz-text mb-1">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Mercy Akintola"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-mercz-text mb-1">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="mercy@merczcord.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-mercz-text mb-1">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mercz-text mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full sm:w-auto bg-mercz-blue hover:bg-mercz-blue-dark" 
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">⏳</span> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <MailCheck className="ml-2" size={16} />
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={300}>
            <div className="h-full flex flex-col">
              <h3 className="text-2xl font-display font-semibold text-mercz-text mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <div className="bg-mercz-blue/10 p-3 rounded-md mr-4">
                    <MapPin className="text-mercz-blue" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mercz-text">Address</h4>
                    <p className="text-mercz-text-light">
                      16, Olaiya Street, Ire-Akari Estate<br />
                      Sango-ota, Ogun State, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mercz-blue/10 p-3 rounded-md mr-4">
                    <Phone className="text-mercz-blue" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mercz-text">Phone</h4>
                    <p className="text-mercz-text-light">
                      +234 (806)396-3056<br />
                      +234 (908)517-3296
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mercz-blue/10 p-3 rounded-md mr-4">
                    <MailCheck className="text-mercz-blue" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mercz-text">Email</h4>
                    <p className="text-mercz-text-light">
                      info@merczcord.com<br />
                      support@merczcord.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-mercz-blue/10 p-3 rounded-md mr-4">
                    <Globe className="text-mercz-blue" size={22} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-mercz-text">Hours</h4>
                    <p className="text-mercz-text-light">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 2:00 PM
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-auto">
                <h4 className="text-lg font-medium text-mercz-text mb-3">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 bg-mercz-blue/10 rounded-full hover:bg-mercz-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mercz-blue">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-mercz-blue/10 rounded-full hover:bg-mercz-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mercz-blue">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-mercz-blue/10 rounded-full hover:bg-mercz-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mercz-blue">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a href="#" className="p-3 bg-mercz-blue/10 rounded-full hover:bg-mercz-blue/20 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mercz-blue">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;
