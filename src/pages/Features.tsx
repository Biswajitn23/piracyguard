
import React from 'react';
import { Shield, Lock, Bell, Zap, CheckCircle, Clock } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Monitor your content across the web in real-time, detecting unauthorized usage instantly.",
      icon: <Bell className="h-12 w-12 text-piracy-600 dark:text-piracy-400 mb-4" />
    },
    {
      title: "Automated Takedown Requests",
      description: "Automate DMCA takedown requests and track their progress from a single dashboard.",
      icon: <Zap className="h-12 w-12 text-piracy-600 dark:text-piracy-400 mb-4" />
    },
    {
      title: "Content Fingerprinting",
      description: "Create unique digital fingerprints for your content to easily identify unauthorized copies.",
      icon: <Lock className="h-12 w-12 text-piracy-600 dark:text-piracy-400 mb-4" />
    },
    {
      title: "Comprehensive Reports",
      description: "Receive detailed reports on content usage and piracy threats with actionable insights.",
      icon: <CheckCircle className="h-12 w-12 text-piracy-600 dark:text-piracy-400 mb-4" />
    },
    {
      title: "24/7 Protection",
      description: "Round-the-clock monitoring and protection for your digital assets across all platforms.",
      icon: <Clock className="h-12 w-12 text-piracy-600 dark:text-piracy-400 mb-4" />
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security to keep your content and intellectual property safe.",
      icon: <Shield className="h-12 w-12 text-piracy-600 dark:text-piracy-400 mb-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Features</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the powerful tools and features that make PiracyGuard the leading solution for content protection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
