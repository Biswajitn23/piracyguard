
import React from 'react';
import { Shield, Users, Award, Heart } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">About PiracyGuard</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Protecting digital content creators and businesses from piracy since 2018.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At PiracyGuard, we believe that content creators deserve to be protected. Our mission is to provide powerful, 
              accessible tools that help creators and businesses safeguard their intellectual property in an increasingly 
              digital world.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We're committed to staying ahead of piracy trends and technologies, ensuring that our clients always have the 
              most effective protection available. Through innovation, dedication, and expertise, we aim to create a fairer 
              digital ecosystem where creators can thrive.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <Shield className="h-56 w-56 text-piracy-600 dark:text-piracy-400" />
          </div>
        </div>

        <Separator className="my-16" />

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900 dark:text-white">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-piracy-600 dark:text-piracy-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our team consists of cybersecurity experts, legal professionals, and technology innovators working together to protect your content.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-piracy-600 dark:text-piracy-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Industry Leading</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Recognized as an industry leader with multiple awards for our innovative anti-piracy solutions.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-piracy-600 dark:text-piracy-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Client Focused</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize our clients' needs with dedicated support and customized protection strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Join Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
            Ready to protect your content and take control of your digital assets? Join thousands of creators and businesses who trust PiracyGuard.
          </p>
          <button className="bg-piracy-600 hover:bg-piracy-700 text-white font-bold py-3 px-6 rounded-md transition-colors">
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
