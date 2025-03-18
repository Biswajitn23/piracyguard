
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Copy, Check, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Documentation: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="font-bold mb-4 text-foreground">
              Documentation
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Comprehensive guides and API documentation to help you integrate and maximize PiracyGuard's protection services.
            </p>
          </div>

          <Tabs defaultValue="api" className="w-full mb-12">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="api">API Reference</TabsTrigger>
              <TabsTrigger value="guides">Implementation Guides</TabsTrigger>
              <TabsTrigger value="sdk">SDK Documentation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="api" className="space-y-6">
              <div className="bg-card shadow-sm rounded-lg p-6">
                <Heading level={2} className="text-xl font-semibold mb-4">Getting Started with the API</Heading>
                <p className="text-foreground/80 mb-4">
                  The PiracyGuard API allows you to integrate our content protection system directly into your workflow. 
                  Follow these steps to begin using our API:
                </p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h3 className="font-medium text-foreground mb-2">1. Authentication</h3>
                    <p className="text-foreground/80 mb-2">First, generate an API key from your dashboard:</p>
                    <div className="bg-muted p-4 rounded-md relative mb-4">
                      <code className="text-sm text-foreground/90 font-mono">
                        curl -X POST https://api.piracyguard.com/auth/token \<br />
                        &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                        &nbsp;&nbsp;-d '&#123;"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"&#125;'
                      </code>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-2 top-2"
                        onClick={() => copyToClipboard(`curl -X POST https://api.piracyguard.com/auth/token \
  -H "Content-Type: application/json" \
  -d '{"client_id": "YOUR_CLIENT_ID", "client_secret": "YOUR_CLIENT_SECRET"}'`)}
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-foreground mb-2">2. Register Content</h3>
                    <p className="text-foreground/80 mb-2">After authentication, register your content to protect:</p>
                    <div className="bg-muted p-4 rounded-md relative">
                      <code className="text-sm text-foreground/90 font-mono">
                        curl -X POST https://api.piracyguard.com/content/register \<br />
                        &nbsp;&nbsp;-H "Authorization: Bearer YOUR_ACCESS_TOKEN" \<br />
                        &nbsp;&nbsp;-H "Content-Type: application/json" \<br />
                        &nbsp;&nbsp;-d '&#123;"title": "Content Title", "type": "video", "url": "https://example.com/content"&#125;'
                      </code>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="absolute right-2 top-2"
                        onClick={() => copyToClipboard(`curl -X POST https://api.piracyguard.com/content/register \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"title": "Content Title", "type": "video", "url": "https://example.com/content"}'`)}
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                </div>
                
                <Link 
                  to="#" 
                  className="inline-flex items-center text-piracy-600 hover:text-piracy-700 font-medium"
                >
                  See full API documentation <ExternalLink className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </TabsContent>
            
            <TabsContent value="guides" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <Heading level={2} className="text-xl font-semibold mb-4">Implementation Guides</Heading>
                  <p className="text-foreground/80 mb-6">
                    Step-by-step guides to help you implement PiracyGuard in your environment.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="border border-border rounded-lg p-4 hover:border-piracy-500 transition-colors">
                      <h3 className="font-medium text-foreground mb-2">Basic Implementation</h3>
                      <p className="text-foreground/80 text-sm mb-3">
                        Learn how to implement basic content protection for your digital assets.
                      </p>
                      <Link 
                        to="#" 
                        className="text-sm text-piracy-600 hover:text-piracy-700 font-medium inline-flex items-center"
                      >
                        Read guide <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4 hover:border-piracy-500 transition-colors">
                      <h3 className="font-medium text-foreground mb-2">Enterprise Setup</h3>
                      <p className="text-foreground/80 text-sm mb-3">
                        Advanced implementation for large-scale content libraries.
                      </p>
                      <Link 
                        to="#" 
                        className="text-sm text-piracy-600 hover:text-piracy-700 font-medium inline-flex items-center"
                      >
                        Read guide <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4 hover:border-piracy-500 transition-colors">
                      <h3 className="font-medium text-foreground mb-2">Realtime Monitoring</h3>
                      <p className="text-foreground/80 text-sm mb-3">
                        Setting up alerts and realtime monitoring for content violations.
                      </p>
                      <Link 
                        to="#" 
                        className="text-sm text-piracy-600 hover:text-piracy-700 font-medium inline-flex items-center"
                      >
                        Read guide <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                    
                    <div className="border border-border rounded-lg p-4 hover:border-piracy-500 transition-colors">
                      <h3 className="font-medium text-foreground mb-2">Reporting System</h3>
                      <p className="text-foreground/80 text-sm mb-3">
                        Configuring comprehensive reports and analytics dashboards.
                      </p>
                      <Link 
                        to="#" 
                        className="text-sm text-piracy-600 hover:text-piracy-700 font-medium inline-flex items-center"
                      >
                        Read guide <ExternalLink className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="sdk" className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <Heading level={2} className="text-xl font-semibold mb-4">SDK Documentation</Heading>
                  <p className="text-foreground/80 mb-6">
                    Explore our SDK libraries for various programming languages.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="border border-border rounded-lg p-6">
                      <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                        <div className="h-6 w-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">J</div>
                        JavaScript SDK
                      </h3>
                      <p className="text-foreground/80 mb-4">
                        Our JavaScript SDK provides easy integration for web applications.
                      </p>
                      <div className="bg-muted p-4 rounded-md mb-4">
                        <code className="text-sm text-foreground/90 font-mono">
                          npm install piracyguard-js
                        </code>
                      </div>
                      <Link 
                        to="#" 
                        className="text-piracy-600 hover:text-piracy-700 font-medium inline-flex items-center"
                      >
                        JavaScript SDK Documentation <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                    
                    <div className="border border-border rounded-lg p-6">
                      <h3 className="font-medium text-foreground mb-4 flex items-center gap-2">
                        <div className="h-6 w-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">P</div>
                        Python SDK
                      </h3>
                      <p className="text-foreground/80 mb-4">
                        For backend integration and server-side applications.
                      </p>
                      <div className="bg-muted p-4 rounded-md mb-4">
                        <code className="text-sm text-foreground/90 font-mono">
                          pip install piracyguard-python
                        </code>
                      </div>
                      <Link 
                        to="#" 
                        className="text-piracy-600 hover:text-piracy-700 font-medium inline-flex items-center"
                      >
                        Python SDK Documentation <ExternalLink className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default Documentation;
