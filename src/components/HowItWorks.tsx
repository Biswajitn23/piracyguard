
import React from 'react';
import { useInView } from '../utils/animations';
import { cn } from '@/lib/utils';

const HowItWorks: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-20 bg-black" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 text-sm font-medium mb-4 transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <span>Product Demonstration</span>
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100 text-white",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            See PiracyGuard in Action
          </h2>
          
          <p 
            className={cn(
              "text-lg text-gray-300 transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            Watch our demo video to see how PiracyGuard works to protect your content
          </p>
        </div>

        <div 
          className={cn(
            "relative overflow-hidden rounded-xl shadow-xl transition-all duration-700 max-w-4xl mx-auto aspect-video",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/nqXluES6TGU?si=KenjeLVDsiOaD9iw" 
            title="PiracyGuard Demo Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
