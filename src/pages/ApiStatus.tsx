
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ServiceStatus {
  name: string;
  status: 'operational' | 'degraded' | 'outage';
  lastUpdated: string;
  description?: string;
}

const API_SERVICES: ServiceStatus[] = [
  {
    name: 'Content Registration API',
    status: 'operational',
    lastUpdated: '1 minute ago',
  },
  {
    name: 'Content Scanning API',
    status: 'operational',
    lastUpdated: '2 minutes ago',
  },
  {
    name: 'Takedown Request API',
    status: 'operational',
    lastUpdated: '3 minutes ago',
  },
  {
    name: 'Analytics API',
    status: 'operational',
    lastUpdated: '1 minute ago',
  },
  {
    name: 'User Authentication',
    status: 'operational',
    lastUpdated: '5 minutes ago',
  },
  {
    name: 'Reporting System',
    status: 'degraded',
    lastUpdated: '10 minutes ago',
    description: 'We are experiencing minor delays in report generation. Our team is working to resolve this issue.'
  },
];

const ApiStatus: React.FC = () => {
  const getStatusIcon = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'degraded':
        return <Clock className="h-5 w-5 text-amber-500" />;
      case 'outage':
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'Operational';
      case 'degraded':
        return 'Performance Degraded';
      case 'outage':
        return 'Service Outage';
      default:
        return '';
    }
  };

  const getStatusColor = (status: ServiceStatus['status']) => {
    switch (status) {
      case 'operational':
        return 'text-green-500';
      case 'degraded':
        return 'text-amber-500';
      case 'outage':
        return 'text-red-500';
      default:
        return '';
    }
  };

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="font-bold mb-4 text-foreground">
              API Status
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Check the current operational status of all PiracyGuard API services.
            </p>
          </div>

          <div className="bg-card shadow-sm rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-foreground">System Status</h2>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium">All Systems Operational</span>
              </div>
            </div>
            <p className="text-foreground/80">
              Last updated: {new Date().toLocaleString()}
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {API_SERVICES.map((service, index) => (
              <Card key={index} className="shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="flex justify-between items-center text-base font-medium">
                    <span>{service.name}</span>
                    <div className="flex items-center gap-2">
                      {getStatusIcon(service.status)}
                      <span className={getStatusColor(service.status)}>
                        {getStatusText(service.status)}
                      </span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-sm text-foreground/70">
                    <p>Last updated: {service.lastUpdated}</p>
                    {service.description && (
                      <p className="mt-2 text-amber-600 dark:text-amber-400">{service.description}</p>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card shadow-sm rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-foreground">Need Help?</h2>
            <p className="text-foreground/80 mb-4">
              If you're experiencing issues with our API that aren't reflected here, please get in touch with our support team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/documentation">View API Documentation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ApiStatus;
