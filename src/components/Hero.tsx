
import React, { useEffect, useRef } from "react";
import FadeIn from "./animations/FadeIn";
import { ArrowDown, MapPin, Globe2 } from "lucide-react";

const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.clientWidth * window.devicePixelRatio;
    canvas.height = canvas.clientHeight * window.devicePixelRatio;

    const points: { x: number; y: number; vx: number; vy: number; size: number }[] = [];
    const numPoints = 150;
    const connectionDistance = canvas.width * 0.05;
    const pointBaseSize = canvas.width * 0.0015;

    // Generate random points
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: pointBaseSize * (Math.random() * 0.8 + 0.6),
      });
    }

    let animationFrameId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            // Updated to teal color
            ctx.strokeStyle = `rgba(13, 59, 69, ${
              (1 - distance / connectionDistance) * 0.2
            })`;
            ctx.lineWidth = (1 - distance / connectionDistance) * 1;
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update points
      points.forEach((point) => {
        // Draw the point with updated color
        ctx.beginPath();
        ctx.fillStyle = "rgba(13, 59, 69, 0.6)"; // Updated to teal color
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        point.x += point.vx;
        point.y += point.vy;

        // Bounce off edges
        if (point.x < 0 || point.x > canvas.width) {
          point.vx *= -1;
        }
        if (point.y < 0 || point.y > canvas.height) {
          point.vy *= -1;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 container mx-auto h-screen flex flex-col justify-center px-6 lg:px-10">
        <div className="max-w-3xl">
          <FadeIn duration="normal" delay={300}>
            <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-mercz-orange animate-pulse-slow mr-2"></span>
              <span className="text-mercz-text-light text-sm font-medium">
                Transforming Geospatial Planning
              </span>
            </div>
          </FadeIn>

          <FadeIn duration="normal" delay={500}>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-mercz-text leading-tight mb-6">
              Advanced Geospatial Solutions for{" "}
              <span className="text-mercz-teal">Sustainable Development</span>
            </h1>
          </FadeIn>

          <FadeIn duration="normal" delay={700}>
            <p className="text-lg text-mercz-text-light mb-8 max-w-2xl">
              Empowering communities and organizations with precise geospatial analytics to
              build resilient, sustainable, and meticulously planned urban environments.
            </p>
          </FadeIn>

          <FadeIn duration="normal" delay={900}>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#services"
                className="bg-mercz-teal text-white py-3 px-6 rounded-md hover:bg-mercz-teal-light transition-all duration-300 text-center flex-shrink-0 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Explore Our Services</span>
                <Globe2 size={18} />
              </a>
              <a
                href="#contact"
                className="bg-mercz-orange text-white py-3 px-6 rounded-md border border-mercz-orange hover:bg-mercz-orange-light transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
              >
                <span>Contact Us</span>
                <MapPin size={18} />
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-mercz-text-light text-sm mb-2 opacity-80">Scroll to explore</span>
          <ArrowDown className="text-mercz-teal animate-bounce" size={20} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
