
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { MessageSquare, FileQuestion, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Help: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Help Center
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-8">
              Find answers to common questions and learn how to get the most out of PiracyGuard's protection services.
            </p>
            
            <div className="relative max-w-xl mx-auto mb-12">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <input 
                type="text" 
                placeholder="Search for help articles..." 
                className="w-full py-3 pl-10 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-piracy-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-piracy-500" />
                  Getting Started
                </CardTitle>
                <CardDescription>Basic guides for new users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li><Link to="#" className="hover:text-piracy-500 transition-colors">Account setup</Link></li>
                  <li><Link to="#" className="hover:text-piracy-500 transition-colors">Quick start guide</Link></li>
                  <li><Link to="#" className="hover:text-piracy-500 transition-colors">First scan walkthrough</Link></li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileQuestion className="h-5 w-5 text-piracy-500" />
                  Technical Support
                </CardTitle>
                <CardDescription>Advanced help for technical issues</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li><Link to="#" className="hover:text-piracy-500 transition-colors">API integration</Link></li>
                  <li><Link to="#" className="hover:text-piracy-500 transition-colors">Scan troubleshooting</Link></li>
                  <li><Link to="#" className="hover:text-piracy-500 transition-colors">Security settings</Link></li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-piracy-500" />
                  Contact Support
                </CardTitle>
                <CardDescription>Get help from our team</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80 mb-4">Need personalized help? Our support team is ready to assist you.</p>
                <Button asChild className="w-full">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card shadow-sm rounded-lg p-6 mb-12">
            <h2 className="text-xl font-semibold mb-6 text-foreground">Frequently Asked Questions</h2>
            
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-left font-medium">
                  How does PiracyGuard protect my content?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  PiracyGuard uses advanced digital fingerprinting technology to scan the web and identify unauthorized copies of your content. Once detected, our automated system issues takedown notices and monitors compliance to ensure your intellectual property remains protected.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-left font-medium">
                  What types of content can be protected?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  PiracyGuard works with digital content of all kinds, including videos, movies, TV shows, music, e-books, software, and games. Our specialized algorithms are optimized for Disney content but work effectively across all digital media.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-left font-medium">
                  How do I add content to be protected?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  After creating an account, you can upload files directly through our dashboard or connect to your content management system via our API. Our system will create digital fingerprints of your content and begin monitoring for unauthorized usage.
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-left font-medium">
                  How quickly are piracy incidents addressed?
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80">
                  Our system works 24/7 to detect violations. Once identified, takedown notices are sent automatically within minutes. Our follow-up protocols ensure continuous monitoring, with most infringing content removed within 24-48 hours of detection.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Help;
