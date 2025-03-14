
import React from 'react';
import { useInView } from '../utils/animations';
import { cn } from '@/lib/utils';
import { Search, Cpu, Mail, Flag } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const { ref, isInView } = useInView();

  const steps = [
    {
      id: "01",
      icon: <Search className="h-6 w-6 text-piracy-600" />,
      title: "Scan & Detect",
      description: "Our web scrapers continuously scan websites, forums, streaming platforms, and file sharing services to find unauthorized Disney content.",
      delay: "delay-100"
    },
    {
      id: "02",
      icon: <Cpu className="h-6 w-6 text-piracy-600" />,
      title: "Verify & Analyze",
      description: "Advanced AI image recognition verifies detected content, analyzing visual signatures to confirm Disney intellectual property.",
      delay: "delay-200" 
    },
    {
      id: "03",
      icon: <Flag className="h-6 w-6 text-piracy-600" />,
      title: "Document & Store",
      description: "All verified piracy cases are documented with screenshots, timestamps, and URLs, creating an auditable record in our secure database.",
      delay: "delay-300"
    },
    {
      id: "04",
      icon: <Mail className="h-6 w-6 text-piracy-600" />,
      title: "Takedown & Report",
      description: "Automated DMCA notices are generated and sent to hosting providers, with all actions tracked in the comprehensive dashboard.",
      delay: "delay-400"
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gray-50" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full bg-piracy-50 text-piracy-700 text-sm font-medium mb-4 transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <span>Simple Process</span>
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            How PiracyGuard Works
          </h2>
          
          <p 
            className={cn(
              "text-lg text-gray-600 transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            Our end-to-end protection process automatically detects and removes pirated content across the web
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white rounded-xl p-6 border border-gray-200 shadow-sm transition-all duration-700 translate-hover",
                isInView ? "opacity-100" : "opacity-0 translate-y-4",
                step.delay
              )}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4 text-3xl font-bold text-gray-200">{step.id}</div>
                <div className="rounded-full bg-piracy-50 p-2">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
