
import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { 
  Flag, 
  CheckCircle, 
  XCircle,
  Clock,
  BarChart3,
  Search,
  Filter,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  AlertCircle,
  MoreHorizontal
} from 'lucide-react';
import { Button } from "@/components/ui/button";

const DashboardPage: React.FC = () => {
  const stats = [
    { label: "Total Detections", value: "1,872", change: "+12.5%", positive: true, icon: <Flag className="h-5 w-5 text-white" />, color: "bg-piracy-600" },
    { label: "Takedowns Sent", value: "1,628", change: "+8.3%", positive: true, icon: <Clock className="h-5 w-5 text-white" />, color: "bg-blue-600" },
    { label: "Successfully Removed", value: "1,543", change: "+15.2%", positive: true, icon: <CheckCircle className="h-5 w-5 text-white" />, color: "bg-green-600" },
    { label: "Review Required", value: "85", change: "-2.4%", positive: true, icon: <XCircle className="h-5 w-5 text-white" />, color: "bg-red-600" },
  ];

  const piracyCases = [
    { 
      id: "P-7825",
      title: "The Lion King (2019)",
      platform: "StreamFlix.to",
      date: "Oct 25, 2023",
      status: "Review Required",
      statusColor: "bg-red-100 text-red-800"
    },
    { 
      id: "P-7824",
      title: "Mandalorian Season 3",
      platform: "PirateFilms.net",
      date: "Oct 25, 2023",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7823",
      title: "Moana",
      platform: "TorrentsNow.org",
      date: "Oct 24, 2023",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7822",
      title: "Avengers: Endgame",
      platform: "MovieDL.co",
      date: "Oct 24, 2023",
      status: "Takedown Sent",
      statusColor: "bg-blue-100 text-blue-800"
    },
    { 
      id: "P-7821",
      title: "Soul (2020)",
      platform: "StreamFree.io",
      date: "Oct 23, 2023",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7820",
      title: "Frozen 2",
      platform: "Stream4Free.com",
      date: "Oct 23, 2023",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7819",
      title: "Marvel Show S02E01-E10",
      platform: "PirateFilms.net",
      date: "Oct 22, 2023",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
    { 
      id: "P-7818",
      title: "Toy Story Complete Collection",
      platform: "MegaDownload.io",
      date: "Oct 21, 2023",
      status: "Removed",
      statusColor: "bg-green-100 text-green-800"
    },
  ];

  return (
    <MainLayout>
      <div className="pt-16 pb-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 pt-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Piracy Protection Dashboard</h1>
            <p className="text-gray-600">Monitor and manage content piracy detection and removal</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className={`px-6 py-4 ${stat.color}`}>
                  <div className="flex justify-between items-center">
                    <div className="bg-white/20 rounded-full p-2">
                      {stat.icon}
                    </div>
                    <div className="flex items-center">
                      <span className={`text-xs font-medium flex items-center ${stat.positive ? 'text-green-100' : 'text-red-100'}`}>
                        {stat.positive ? <ArrowUp className="h-3 w-3 mr-1" /> : <ArrowDown className="h-3 w-3 mr-1" />}
                        {stat.change}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden mb-8">
            <div className="border-b border-gray-200 px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <h2 className="text-lg font-semibold text-gray-900">Recent Piracy Detections</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <input
                    type="search"
                    className="pl-10 pr-4 py-2 h-9 border border-gray-300 rounded-md text-sm focus:ring-piracy-500 focus:border-piracy-500 w-full sm:w-64"
                    placeholder="Search detections..."
                  />
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-9 px-3 text-gray-700 border-gray-300"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Content Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Platform</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Detected</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {piracyCases.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.platform}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs rounded-full ${item.statusColor}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm text-gray-700">
                  Showing <span className="font-medium">1</span> to <span className="font-medium">8</span> of <span className="font-medium">145</span> results
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0 bg-piracy-600 text-white border-piracy-600 hover:bg-piracy-700">
                  1
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  2
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  3
                </Button>
                <Button variant="outline" size="sm" className="h-8 w-8 p-0">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-md flex items-start mb-8">
            <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 mt-0.5" />
            <div>
              <p className="text-sm text-yellow-700 font-medium">System Notice</p>
              <p className="text-sm text-yellow-600">
                Our scanning system detected an unusual spike in piracy activity for "The Little Mermaid (2023)". 
                We recommend reviewing these cases and prioritizing takedowns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
