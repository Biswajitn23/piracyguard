
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
    <section ref={ref} className="py-20 bg-white" id="dashboard">
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
                "text-3xl md:text-4xl font-bold tracking-tight mb-4 transition-all duration-700 delay-100",
                isInView ? "opacity-100" : "opacity-0 translate-y-4"
              )}
            >
              Real-time Piracy Dashboard
            </h2>
            
            <p 
              className={cn(
                "text-lg text-gray-600 transition-all duration-700 delay-200",
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
            "bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden transition-all duration-700 delay-300",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <div className="border-b border-gray-200 bg-gray-50 px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="rounded-full bg-white p-2 mr-3 shadow-sm">
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="px-6 py-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Detections</h3>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Title</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-3 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {recentCases.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                      <td className="px-3 py-4 whitespace-nowrap text-sm text-gray-500">{item.platform}</td>
                      <td className="px-3 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Showing 4 of 128 detections</span>
              <Button variant="outline" size="sm" className="text-xs">
                View All Detections
                <ChevronRight className="ml-1 h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
