
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Heading } from '@/components/ui/heading';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, Clock, ExternalLink, Filter } from 'lucide-react';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  locationType: 'Remote' | 'Hybrid' | 'In-Office';
  experience: string;
  description: string;
}

const JOB_LISTINGS: JobListing[] = [
  {
    id: 'eng-001',
    title: 'Senior Software Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    locationType: 'Hybrid',
    experience: '5+ years',
    description: 'We are seeking an experienced software engineer to join our team and help build our next-generation content protection platform.'
  },
  {
    id: 'eng-002',
    title: 'Frontend Developer',
    department: 'Engineering',
    location: 'Remote',
    locationType: 'Remote',
    experience: '3+ years',
    description: 'Join us in creating intuitive and responsive user interfaces for our content protection platform.'
  },
  {
    id: 'eng-003',
    title: 'Machine Learning Engineer',
    department: 'Engineering',
    location: 'New York, NY',
    locationType: 'In-Office',
    experience: '4+ years',
    description: 'Help us improve our content recognition algorithms and build new ML models for piracy detection.'
  },
  {
    id: 'prod-001',
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote',
    locationType: 'Remote',
    experience: '4+ years',
    description: 'Drive the vision and strategy for our products, working closely with engineering and design teams.'
  },
  {
    id: 'sales-001',
    title: 'Enterprise Sales Manager',
    department: 'Sales',
    location: 'Los Angeles, CA',
    locationType: 'Hybrid',
    experience: '5+ years',
    description: 'Build relationships with key clients and help them understand the value of our content protection services.'
  },
  {
    id: 'legal-001',
    title: 'Copyright Specialist',
    department: 'Legal',
    location: 'Washington D.C.',
    locationType: 'Hybrid',
    experience: '3+ years',
    description: 'Work with our legal team to manage takedown notices and copyright claims.'
  },
];

const Careers: React.FC = () => {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Heading level={1} className="font-bold mb-4 text-foreground">
              Careers at PiracyGuard
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Join our team of passionate professionals dedicated to protecting digital content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Innovate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Work on cutting-edge technology that stays ahead of digital piracy threats.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Grow</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Develop your skills in a supportive environment with continuous learning opportunities.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-foreground/80">
                  Make a difference by protecting the work of creators around the world.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-card shadow-sm rounded-lg p-6 mb-12">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-semibold text-foreground">Open Positions</h2>
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                <Filter className="h-4 w-4" /> Filter
              </Button>
            </div>

            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Departments</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="product">Product</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="legal">Legal</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-4">
                {JOB_LISTINGS.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>

              <TabsContent value="engineering" className="space-y-4">
                {JOB_LISTINGS.filter(job => job.department === 'Engineering').map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>

              <TabsContent value="product" className="space-y-4">
                {JOB_LISTINGS.filter(job => job.department === 'Product').map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>

              <TabsContent value="sales" className="space-y-4">
                {JOB_LISTINGS.filter(job => job.department === 'Sales').map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>

              <TabsContent value="legal" className="space-y-4">
                {JOB_LISTINGS.filter(job => job.department === 'Legal').map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </TabsContent>
            </Tabs>
          </div>

          <div className="text-center mt-12">
            <Heading level={2} className="text-2xl font-semibold mb-4 text-foreground">
              Don't see the right position?
            </Heading>
            <p className="text-foreground/80 max-w-2xl mx-auto mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep it on file for future opportunities.
            </p>
            <Button>Contact Our Recruiting Team</Button>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

interface JobCardProps {
  job: JobListing;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const getLocationTypeColor = (type: JobListing['locationType']) => {
    switch (type) {
      case 'Remote':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Hybrid':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'In-Office':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default:
        return '';
    }
  };

  return (
    <Card className="shadow-sm">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-1">
          <CardTitle className="text-lg">{job.title}</CardTitle>
          <span className={`text-xs px-2 py-1 rounded-full ${getLocationTypeColor(job.locationType)} inline-block`}>
            {job.locationType}
          </span>
        </div>
        <CardDescription className="flex flex-wrap gap-4 mt-2">
          <span className="flex items-center text-sm">
            <Briefcase className="h-4 w-4 mr-1" /> {job.department}
          </span>
          <span className="flex items-center text-sm">
            <MapPin className="h-4 w-4 mr-1" /> {job.location}
          </span>
          <span className="flex items-center text-sm">
            <Clock className="h-4 w-4 mr-1" /> {job.experience}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-foreground/80">{job.description}</p>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="outline" className="w-full sm:w-auto">
          <ExternalLink className="h-4 w-4 mr-2" /> View Job Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Careers;
