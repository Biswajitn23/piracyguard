
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Shield, Lock, Database, Server, Users, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const SecurityPage: React.FC = () => {
  const securityFeatures = [
    {
      icon: <Server className="h-10 w-10 text-piracy-600" />,
      title: 'Secure Infrastructure',
      description: 'Our platform runs on industry-leading cloud infrastructure with multiple layers of security and redundancy.'
    },
    {
      icon: <Lock className="h-10 w-10 text-piracy-600" />,
      title: 'End-to-End Encryption',
      description: 'All data is encrypted in transit and at rest using military-grade encryption standards.'
    },
    {
      icon: <Database className="h-10 w-10 text-piracy-600" />,
      title: 'Data Protection',
      description: 'Your content and data are protected with multiple redundant backups and strict access controls.'
    },
    {
      icon: <Shield className="h-10 w-10 text-piracy-600" />,
      title: 'Threat Intelligence',
      description: 'Continuous monitoring of emerging threats and vulnerabilities to stay ahead of potential attacks.'
    },
    {
      icon: <Users className="h-10 w-10 text-piracy-600" />,
      title: 'Role-Based Access',
      description: 'Granular access controls allow you to manage exactly what each team member can see and do.'
    },
    {
      icon: <AlertCircle className="h-10 w-10 text-piracy-600" />,
      title: 'Incident Response',
      description: 'Dedicated security team with 24/7 monitoring and rapid response protocols for any security events.'
    }
  ];

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Heading level={1} className="mb-4 text-foreground">
            Enterprise-Grade Security
          </Heading>
          <p className="text-lg text-foreground/80 mb-6">
            PiracyGuard provides industry-leading security to protect your valuable content and data.
          </p>
          <Button size="lg" className="bg-piracy-600 hover:bg-piracy-700">
            Download Security Whitepaper
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="border border-gray-200 dark:border-gray-800">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-foreground/80">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card shadow rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Heading level={2} className="mb-4 text-foreground">
                Compliance & Certifications
              </Heading>
              <p className="text-foreground/80 mb-4">
                PiracyGuard maintains the highest standards of security and compliance to protect your data.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  ISO 27001 Certified
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  SOC 2 Type II Compliant
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  GDPR Compliant
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  CCPA Compliant
                </li>
              </ul>
            </div>
            <div>
              <Heading level={2} className="mb-4 text-foreground">
                Security Practices
              </Heading>
              <p className="text-foreground/80 mb-4">
                We implement industry best practices to ensure your content remains secure.
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  Regular security audits and penetration testing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  Secure development lifecycle
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  Employee security awareness training
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-piracy-600 rounded-full mr-2"></span>
                  Multi-factor authentication
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Heading level={2} className="mb-6 text-foreground">
            Have Security Questions?
          </Heading>
          <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
            Our security team is available to address any concerns about how we protect your content and data.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-piracy-600 hover:bg-piracy-700">
              Contact Security Team
            </Button>
            <Button variant="outline">
              View Security Documentation
            </Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SecurityPage;
