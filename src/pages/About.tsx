
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Users, Target, Heart, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="font-bold mb-4 text-foreground">
              About PiracyGuard
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Leading the way in protecting digital content from piracy, enabling creators to securely distribute their work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div>
              <Heading level={2} className="text-2xl font-semibold mb-4 text-foreground">
                Our Mission
              </Heading>
              <p className="text-foreground/80 mb-4">
                At PiracyGuard, we're committed to protecting the intellectual property of content creators. 
                We believe that creators should be able to share their work without fear of piracy or unauthorized distribution.
              </p>
              <p className="text-foreground/80 mb-4">
                Founded in 2020, we've quickly become the leading provider of content protection services for Disney, 
                helping to safeguard their valuable content across digital platforms worldwide.
              </p>
              <div className="flex items-center space-x-4 mt-6">
                <Button asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="bg-card rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-piracy-600 mr-4" />
                <h3 className="text-lg font-semibold text-foreground">Why Choose PiracyGuard?</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Zap className="h-5 w-5 text-piracy-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    Cutting-edge technology for detection and protection
                  </span>
                </li>
                <li className="flex items-start">
                  <Globe className="h-5 w-5 text-piracy-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    Global coverage with 24/7 monitoring
                  </span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-piracy-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    Experienced team of copyright and anti-piracy experts
                  </span>
                </li>
                <li className="flex items-start">
                  <Target className="h-5 w-5 text-piracy-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    Precision targeting with minimal false positives
                  </span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-piracy-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/80">
                    Trusted by major content creators and distributors
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <Heading level={2} className="text-2xl font-semibold mb-6 text-center text-foreground">
            Our Values
          </Heading>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 bg-piracy-100 dark:bg-piracy-900 rounded-full flex items-center justify-center">
                    <Shield className="h-6 w-6 text-piracy-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-foreground">Protection</h3>
                <p className="text-foreground/80 text-center">
                  We're committed to safeguarding creative works and intellectual property.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 bg-piracy-100 dark:bg-piracy-900 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-piracy-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-foreground">Innovation</h3>
                <p className="text-foreground/80 text-center">
                  We continuously evolve our technology to stay ahead of piracy threats.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  <div className="h-12 w-12 bg-piracy-100 dark:bg-piracy-900 rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-piracy-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-center text-foreground">Community</h3>
                <p className="text-foreground/80 text-center">
                  We support the creative community and fight for fair compensation.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card rounded-lg shadow-sm p-8 text-center">
            <Heading level={2} className="text-2xl font-semibold mb-4 text-foreground">
              Join Our Team
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals who are passionate about protecting digital content.
              Check out our open positions and become part of our mission.
            </p>
            <Button asChild>
              <Link to="/careers">View Careers</Link>
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
