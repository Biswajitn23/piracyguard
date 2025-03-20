
import React from 'react';
import { useInView } from '../utils/animations';
import { cn } from '@/lib/utils';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { 
  ChevronRight, 
  Flag, 
  CheckCircle, 
  XCircle,
  Clock,
  BarChart3
} from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Dashboard: React.FC = () => {
  const { ref, isInView } = useInView();

  const stats = [
    { label: "Detected Today", value: "32", icon: <Flag className="h-5 w-5 text-orange-500" /> },
    { label: "Takedowns Sent", value: "28", icon: <Clock className="h-5 w-5 text-blue-500" /> },
    { label: "Successfully Removed", value: "24", icon: <CheckCircle className="h-5 w-5 text-green-500" /> },
    { label: "Review Required", value: "4", icon: <XCircle className="h-5 w-5 text-red-500" /> },
  ];

  const recentCases = [
    { 
      id: "P-7820",
      title: "Full Movie: Frozen 2",
      platform: "Stream4Free.com",
      status: "Takedown Sent",
      statusColor: "bg-blue-100 text-blue-800"
    },
    { 
      id: "P-7819",
      title: "Marvel Show S02E01-E10",
      platform: "PirateFilms.net",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7818",
      title: "Toy Story Complete Collection",
      platform: "MegaDownload.io",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7817",
      title: "Star Wars: Rise of Skywalker",
      platform: "TorrentGalaxy.to",
      status: "Review Required",
      statusColor: "bg-red-100 text-red-800"
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white dark:bg-black" id="dashboard">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-6 md:mb-0">
            <div 
              className={cn(
                "inline-flex items-center px-3 py-1 rounded-full bg-piracy-50 text-piracy-700 text-sm font-medium mb-4 transition-all duration-700",
                isInView ? "opacity-100" : "opacity-0 translate-y-4"
              )}
            >
              <span>Monitoring</span>
            </div>
            
            <h2 
              className={cn(
                "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100 dark:text-white",
                isInView ? "opacity-100" : "opacity-0 translate-y-4"
              )}
            >
              Real-time Piracy Dashboard
            </h2>
            
            <p 
              className={cn(
                "text-lg text-gray-600 dark:text-gray-300 transition-all duration-700 delay-200",
                isInView ? "opacity-100" : "opacity-0 translate-y-4"
              )}
            >
              Track and monitor all piracy detection and removal activities in one place
            </p>
          </div>
          
          <Button 
            className={cn(
              "bg-piracy-600 hover:bg-piracy-700 text-white transition-all duration-700 delay-300",
              isInView ? "opacity-100" : "opacity-0 translate-y-4"
            )}
            asChild
          >
            <Link to="/dashboard">
              View Full Dashboard
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div 
          className={cn(
            "bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg overflow-hidden transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="border-b border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="rounded-full bg-white dark:bg-gray-800 p-2 mr-3 shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="px-6 py-5 dark:bg-gray-900">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Detections</h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="dark:border-gray-800">
                    <TableHead className="dark:text-gray-400">ID</TableHead>
                    <TableHead className="dark:text-gray-400">Content Title</TableHead>
                    <TableHead className="dark:text-gray-400">Platform</TableHead>
                    <TableHead className="dark:text-gray-400">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentCases.map((item, index) => (
                    <TableRow key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors dark:border-gray-800">
                      <TableCell className="font-medium dark:text-white">{item.id}</TableCell>
                      <TableCell className="dark:text-gray-300">{item.title}</TableCell>
                      <TableCell className="dark:text-gray-300">{item.platform}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${item.statusColor} dark:bg-opacity-20`}>
                          {item.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
          
          <div className="border-t border-gray-200 dark:border-gray-800 px-6 py-4 bg-gray-50 dark:bg-gray-900">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 dark:text-gray-400">Showing 4 of 145 detections</span>
              <Button variant="outline" size="sm" className="text-xs dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800" asChild>
                <Link to="/dashboard">
                  View All Detections
                  <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
