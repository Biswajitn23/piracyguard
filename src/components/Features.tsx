
import React from 'react';
import { useInView } from '../utils/animations';
import { cn } from '@/lib/utils';
import { Search, Mail, Database, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  const { ref, isInView } = useInView();

  const features = [
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: "Web Scraping for Piracy Detection",
      description: "Our advanced scraping technology constantly scans the web for unauthorized Disney content, indexing and flagging potential piracy cases for immediate action.",
      color: "bg-gradient-to-br from-blue-500 to-blue-600",
      delay: "delay-100"
    },
    {
      icon: <Cpu className="h-6 w-6 text-white" />,
      title: "AI-Based Image Recognition",
      description: "PiracyGuard uses machine learning to identify Disney characters, logos, and content in videos and images with exceptional accuracy, even when modified.",
      color: "bg-gradient-to-br from-indigo-500 to-indigo-600",
      delay: "delay-200"
    },
    {
      icon: <Mail className="h-6 w-6 text-white" />,
      title: "Automated DMCA Takedown",
      description: "Generate and send legally compliant DMCA takedown notices automatically when pirated content is detected, streamlining the removal process.",
      color: "bg-gradient-to-br from-piracy-500 to-piracy-600",
      delay: "delay-300"
    },
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: "Comprehensive Dashboard",
      description: "Monitor all detected piracy cases, track takedown status, and generate detailed reports from our intuitive, real-time monitoring dashboard.",
      color: "bg-gradient-to-br from-gray-700 to-gray-800",
      delay: "delay-400"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="features">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-4 transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <span>Advanced Protection</span>
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            Comprehensive Piracy Detection & Protection
          </h2>
          
          <p 
            className={cn(
              "text-lg text-gray-600 transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            PiracyGuard combines cutting-edge technologies to provide end-to-end protection for Disney's valuable intellectual property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-xl overflow-hidden shadow-lg transition-all duration-700 scale-hover border border-gray-100",
                isInView ? "opacity-100" : "opacity-0 translate-y-4",
                feature.delay
              )}
            >
              <div className="flex items-center p-6">
                <div className={`rounded-lg p-3 mr-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
