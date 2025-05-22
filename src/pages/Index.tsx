import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import InteractiveMap from "@/components/InteractiveMap";
import DataVisualization from "@/components/DataVisualization";
import { motion } from "framer-motion";

const Index = () => {
  // Smooth scroll to anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href')?.substring(1);
        if (!targetId) return;
        
        const targetElement = document.getElementById(targetId);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Offset for fixed header
          behavior: 'smooth'
        });
      });
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function () {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      
      {/* Interactive Map Section */}
      <section className="py-16 bg-mercz-neutral dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mercz-text dark:text-white mb-4">Our Global Impact</h2>
            <p className="text-mercz-text-light dark:text-gray-300 max-w-3xl mx-auto">
              Explore our project locations and the impact we're making worldwide with our geospatial solutions.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <InteractiveMap height="500px" />
          </motion.div>
        </div>
      </section>
      
      {/* Data Visualization Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mercz-text dark:text-white mb-4">Data-Driven Insights</h2>
            <p className="text-mercz-text-light dark:text-gray-300 max-w-3xl mx-auto">
              Our advanced analytics provide meaningful insights from geospatial data to drive informed decision-making.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <DataVisualization />
          </motion.div>
        </div>
      </section>
      
      <Mission />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
