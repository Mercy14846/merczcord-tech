
import React from "react";
import FadeIn from "./animations/FadeIn";
import { CheckCircle2 } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

const Mission: React.FC = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden clipped-container bg-gradient-to-r from-mercz-teal/10 to-mercz-teal/5">
      <div className="container mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-mercz-text mb-6">
                Our Mission & Vision
              </h2>
              <p className="text-mercz-text-light mb-8">
                Our mission is to empower communities and organizations with precise geospatial solutions that enhance urban planning, optimize transportation networks, mitigate disaster risks, and promote environmental sustainability. We strive to be a catalyst for positive change, using technology to build resilient, sustainable, and well-planned urban environments.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle2 className="text-mercz-orange mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-mercz-text">
                    <span className="font-medium">Innovation</span> - Pioneering advanced geospatial technologies and methodologies
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-mercz-orange mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-mercz-text">
                    <span className="font-medium">Reliability</span> - Delivering accurate, actionable insights you can depend on
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="text-mercz-orange mt-1 mr-3 flex-shrink-0" size={20} />
                  <p className="text-mercz-text">
                    <span className="font-medium">Sustainability</span> - Prioritizing environmentally conscious solutions
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={300}>
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-mercz-teal/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-mercz-orange/10 rounded-full blur-3xl"></div>
              
              <div className="relative bg-white/60 backdrop-blur-md rounded-lg border border-white/20 shadow-elevation p-8 md:p-10">
                {/* Geospatial Image with AspectRatio */}
                <div className="mb-6">
                  <AspectRatio ratio={16/9} className="overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                      alt="Aerial view of landscape with river and mountains" 
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-display font-semibold text-mercz-text mb-2">
                      Our Approach
                    </h3>
                    <p className="text-mercz-text-light">
                      We combine cutting-edge technology with deep domain expertise to deliver solutions that address complex spatial challenges.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-semibold text-mercz-text mb-2">
                      Target Audience
                    </h3>
                    <p className="text-mercz-text-light">
                      We serve government agencies, urban planners, environmental consultants, transportation authorities, disaster management organizations, real estate developers, and businesses seeking to leverage geospatial data.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-semibold text-mercz-text mb-2">
                      Our Commitment
                    </h3>
                    <p className="text-mercz-text-light">
                      At Merczcord Technologies, we are committed to excellence, innovation, and client satisfaction in every project we undertake.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Mission;
