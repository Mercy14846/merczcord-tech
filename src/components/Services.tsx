
import React from "react";
import FadeIn from "./animations/FadeIn";
import GlassCard from "./ui/GlassCard";
import { Building2, Route, Waves, Navigation, Leaf, Map } from "lucide-react";

const serviceItems = [
  {
    title: "Urban Planning",
    description: "Comprehensive planning services that guide the development and growth of urban areas.",
    icon: <Building2 className="text-mercz-orange" size={28} />,
  },
  {
    title: "Road Transportation Planning",
    description: "Designing and optimizing transportation networks for efficient and sustainable mobility.",
    icon: <Route className="text-mercz-orange" size={28} />,
  },
  {
    title: "Disaster and Flooding Management",
    description: "Solutions to predict, prevent, and respond to natural disasters and flooding risks.",
    icon: <Waves className="text-mercz-orange" size={28} />,
  },
  {
    title: "Navigation Systems",
    description: "Advanced navigation solutions for various applications, from personal use to logistics.",
    icon: <Navigation className="text-mercz-orange" size={28} />,
  },
  {
    title: "Environmental Impact Assessments",
    description: "Evaluating environmental consequences of proposed developments, ensuring compliance.",
    icon: <Leaf className="text-mercz-orange" size={28} />,
  },
  {
    title: "Mapping Services",
    description: "High-quality mapping solutions for diverse needs, including land use and infrastructure.",
    icon: <Map className="text-mercz-orange" size={28} />,
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="section-padding bg-white relative">
      <div className="absolute inset-0 bg-mercz-teal/5 z-0"></div>
      <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="container relative z-20">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-mercz-text mb-4">
              Our Specialized Services
            </h2>
            <p className="text-mercz-text-light">
              We deliver expert consulting, strategic planning, and innovative solutions tailored to the unique needs of each client.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceItems.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <GlassCard className="h-full flex flex-col">
                <div className="flex items-start mb-4">
                  <div className="p-3 rounded-md bg-mercz-orange/10 mr-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-display font-semibold text-mercz-text">
                    {service.title}
                  </h3>
                </div>
                <p className="text-mercz-text-light mt-2">
                  {service.description}
                </p>
              </GlassCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
