
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Shield, Globe, Zap } from "lucide-react";
import { cn } from '@/lib/utils';
import { useInView } from '../utils/animations';
import { Link } from 'react-router-dom';

const EnterpriseSolutions: React.FC = () => {
  const { ref, isInView } = useInView();

  const plans = [
    {
      name: "Basic Protection",
      price: "Custom",
      description: "Essential protection for smaller content libraries",
      icon: <Shield className="h-6 w-6 text-purple-400" />,
      features: [
        "Real-time monitoring",
        "Up to 10,000 assets",
        "24/7 support"
      ],
      cta: "Get Started",
      ctaLink: "/contact",
      popular: false
    },
    {
      name: "Advanced Protection",
      price: "Custom",
      description: "AI-powered protection for extensive content",
      icon: <Zap className="h-6 w-6 text-purple-400" />,
      features: [
        "AI-powered detection",
        "Unlimited assets",
        "Priority support",
        "Custom AI training"
      ],
      cta: "Get Started",
      ctaLink: "/contact",
      popular: true
    },
    {
      name: "Global Protection",
      price: "Custom",
      description: "Comprehensive worldwide content protection",
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      features: [
        "Global coverage",
        "Predictive analytics",
        "Dedicated team",
        "Custom integration"
      ],
      cta: "Contact Sales",
      ctaLink: "/contact",
      popular: false
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black to-purple-950/40" id="enterprise">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center px-3 py-1 rounded-full bg-purple-900/50 text-purple-300 text-sm font-medium mb-4 transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            <span>Enterprise Solutions</span>
          </div>
          
          <h2 
            className={cn(
              "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100 text-white",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
          >
            Customized protection plans for Disney's diverse content portfolio
          </h2>
        </div>

        <div 
          className={cn(
            "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000",
            isInView ? "opacity-100" : "opacity-0 translate-y-8"
          )}
        >
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-purple-900/20",
                plan.popular && "border-purple-500/50 shadow-lg shadow-purple-900/20"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-purple-600 text-xs font-semibold text-white px-3 py-1 rounded-bl-lg">
                    Recommended
                  </div>
                </div>
              )}
              <CardHeader>
                <div className="mb-3 flex items-center justify-center rounded-full w-12 h-12 bg-purple-950/50">
                  {plan.icon}
                </div>
                <CardTitle className="text-2xl font-bold text-white">{plan.name}</CardTitle>
                <CardDescription className="text-purple-300/80">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold text-white">
                  {plan.price}
                </div>
                <ul className="space-y-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-white/80">
                      <Check className="mr-2 h-5 w-5 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={cn(
                    "w-full", 
                    plan.popular 
                      ? "bg-purple-600 hover:bg-purple-700 text-white" 
                      : "bg-purple-900/50 hover:bg-purple-800 text-white border border-purple-600/30"
                  )}
                  asChild
                >
                  <Link to={plan.ctaLink}>{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseSolutions;
