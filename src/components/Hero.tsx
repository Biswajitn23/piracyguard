
import React from 'react';
import { Button } from "@/components/ui/button";
import { useInView } from '../utils/animations';
import { Shield, Lock, Eye, Database } from 'lucide-react';
import { cn } from '@/lib/utils';

const Hero: React.FC = () => {
  const { ref, isInView } = useInView();

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-transparent opacity-70"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-piracy-100 rounded-full blur-3xl opacity-70"></div>
        <div className="absolute top-60 -left-20 w-60 h-60 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div ref={ref} className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full bg-piracy-50 border border-piracy-200 text-piracy-700 text-sm font-medium mb-6 transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <Shield className="h-4 w-4 mr-2" />
            <span>Advanced Content Protection</span>
          </div>
          
          <h1 
            className={cn(
              "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 transition-all duration-700 delay-100",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            Protect Disney Content from{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-piracy-700 to-piracy-500">
              Digital Piracy
            </span>
          </h1>
          
          <p 
            className={cn(
              "text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            PiracyGuard uses advanced AI and web scraping technology to detect, verify, and remove 
            unauthorized Disney content across the internet, protecting your intellectual property 
            from cyberthreats.
          </p>
          
          <div 
            className={cn(
              "flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-700 delay-300",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <Button 
              size="lg" 
              className="bg-piracy-600 hover:bg-piracy-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Start Protection Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-gray-300 hover:bg-gray-100"
            >
              How It Works
            </Button>
          </div>
          
          {/* Stats */}
          <div 
            className={cn(
              "grid grid-cols-1 md:grid-cols-3 gap-8 w-full transition-all duration-700 delay-400",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            {[
              { 
                icon: <Eye className="h-6 w-6 text-piracy-600" />, 
                stat: "98%", 
                text: "Detection Accuracy" 
              },
              { 
                icon: <Database className="h-6 w-6 text-piracy-600" />, 
                stat: "10,000+", 
                text: "Piracy Cases Resolved" 
              },
              { 
                icon: <Lock className="h-6 w-6 text-piracy-600" />, 
                stat: "24/7", 
                text: "Continuous Monitoring" 
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glass-card rounded-xl p-6 flex flex-col items-center transition-all"
              >
                <div className="rounded-full bg-piracy-50 p-3 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-1">{item.stat}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
