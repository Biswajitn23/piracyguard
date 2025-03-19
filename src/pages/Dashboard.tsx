
import React, { useState } from 'react';
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
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

// Full piracy cases data (simulating a larger dataset)
const allPiracyCases = [
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
  // Adding more cases to reach 145 total (for demo purposes we'll add a subset)
  ...Array.from({ length: 137 }, (_, i) => ({
    id: `P-${7817 - i}`,
    title: `Movie Title ${i + 9}`,
    platform: ["StreamFlix.to", "PirateFilms.net", "TorrentsNow.org", "MovieDL.co", "StreamFree.io"][i % 5],
    date: `Oct ${20 - Math.floor(i / 7)}, 2023`,
    status: ["Removed", "Takedown Sent", "Review Required"][i % 3],
    statusColor: [
      "bg-green-100 text-green-800", 
      "bg-blue-100 text-blue-800", 
      "bg-red-100 text-red-800"
    ][i % 3]
  }))
];

const statusOptions = [
  { value: "all", label: "All Statuses" },
  { value: "Removed", label: "Removed" },
  { value: "Takedown Sent", label: "Takedown Sent" },
  { value: "Review Required", label: "Review Required" }
];

const platformOptions = [
  { value: "all", label: "All Platforms" },
  { value: "StreamFlix.to", label: "StreamFlix.to" },
  { value: "PirateFilms.net", label: "PirateFilms.net" },
  { value: "TorrentsNow.org", label: "TorrentsNow.org" },
  { value: "MovieDL.co", label: "MovieDL.co" },
  { value: "StreamFree.io", label: "StreamFree.io" },
  { value: "Stream4Free.com", label: "Stream4Free.com" },
  { value: "MegaDownload.io", label: "MegaDownload.io" }
];

const DashboardPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [platformFilter, setPlatformFilter] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [filtersOpen, setFiltersOpen] = useState(false);
  
  const itemsPerPage = 8;

  // Apply filters and search
  const filteredCases = allPiracyCases.filter(item => {
    // Apply search filter
    const matchesSearch = 
      searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.platform.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Apply status filter
    const matchesStatus = 
      statusFilter === 'all' || 
      item.status === statusFilter;
    
    // Apply platform filter
    const matchesPlatform = 
      platformFilter === 'all' || 
      item.platform === platformFilter;
    
    return matchesSearch && matchesStatus && matchesPlatform;
  });

  // Calculate pagination
  const totalItems = filteredCases.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);
  const currentItems = filteredCases.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Reset filters
  const resetFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setPlatformFilter('all');
    setCurrentPage(1);
  };

  const stats = [
    { label: "Total Detections", value: "1,872", change: "+12.5%", positive: true, icon: <Flag className="h-5 w-5 text-white" />, color: "bg-piracy-600" },
    { label: "Takedowns Sent", value: "1,628", change: "+8.3%", positive: true, icon: <Clock className="h-5 w-5 text-white" />, color: "bg-blue-600" },
    { label: "Successfully Removed", value: "1,543", change: "+15.2%", positive: true, icon: <CheckCircle className="h-5 w-5 text-white" />, color: "bg-green-600" },
    { label: "Review Required", value: "85", change: "-2.4%", positive: true, icon: <XCircle className="h-5 w-5 text-white" />, color: "bg-red-600" },
  ];

  return (
    <MainLayout>
      <div className="pt-16 pb-12 bg-gray-50 dark:bg-gray-900 min-h-screen">
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
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                <div className="relative w-full sm:w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-4 w-4 text-gray-400" />
                  </div>
                  <Input
                    type="search"
                    className="pl-10 pr-4 py-2 h-9 border border-gray-300 rounded-md text-sm w-full"
                    placeholder="Search detections..."
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCurrentPage(1);
                    }}
                  />
                </div>
                
                <Popover open={filtersOpen} onOpenChange={setFiltersOpen}>
                  <PopoverTrigger asChild>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="h-9 px-3 text-gray-700 border-gray-300"
                    >
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 p-4">
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm">Filter Detections</h4>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Status</label>
                        <Select 
                          value={statusFilter} 
                          onValueChange={(value) => {
                            setStatusFilter(value);
                            setCurrentPage(1);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select status" />
                          </SelectTrigger>
                          <SelectContent>
                            {statusOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Platform</label>
                        <Select 
                          value={platformFilter} 
                          onValueChange={(value) => {
                            setPlatformFilter(value);
                            setCurrentPage(1);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select platform" />
                          </SelectTrigger>
                          <SelectContent>
                            {platformOptions.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="flex justify-between pt-2">
                        <Button 
                          variant="outline" 
                          size="sm" 
                          onClick={resetFilters}
                        >
                          Reset
                        </Button>
                        <Button 
                          size="sm"
                          onClick={() => setFiltersOpen(false)}
                        >
                          Apply Filters
                        </Button>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Content Title</TableHead>
                    <TableHead>Platform</TableHead>
                    <TableHead>Date Detected</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {currentItems.length > 0 ? (
                    currentItems.map((item, index) => (
                      <TableRow key={index} className="hover:bg-gray-50 transition-colors">
                        <TableCell className="font-medium">{item.id}</TableCell>
                        <TableCell>{item.title}</TableCell>
                        <TableCell>{item.platform}</TableCell>
                        <TableCell>{item.date}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 text-xs rounded-full ${item.statusColor}`}>
                            {item.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-right">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-4 text-gray-500">
                        No results found. Try different search or filter criteria.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div className="flex items-center">
                <span className="text-sm text-gray-700">
                  Showing <span className="font-medium">{startIndex + 1}</span> to <span className="font-medium">{endIndex}</span> of <span className="font-medium">{totalItems}</span> results
                </span>
              </div>
              
              {totalPages > 1 && (
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage > 1) handlePageChange(currentPage - 1);
                        }} 
                        className={cn(currentPage === 1 && "pointer-events-none opacity-50")}
                      />
                    </PaginationItem>
                    
                    {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                      // Show pagination links for the first 5 pages or less
                      let pageNum = i + 1;
                      
                      // Adjust page numbers to always show current page in the middle when possible
                      if (totalPages > 5 && currentPage > 3) {
                        pageNum = currentPage - 3 + i;
                        
                        // Don't show page numbers beyond the total
                        if (pageNum > totalPages) {
                          pageNum = totalPages - (4 - i);
                        }
                      }
                      
                      // Ensure we don't show negative or zero page numbers
                      if (pageNum < 1) pageNum = 1;
                      
                      return (
                        <PaginationItem key={i}>
                          <PaginationLink 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(pageNum);
                            }}
                            isActive={currentPage === pageNum}
                          >
                            {pageNum}
                          </PaginationLink>
                        </PaginationItem>
                      );
                    })}
                    
                    {totalPages > 5 && currentPage < totalPages - 2 && (
                      <>
                        <PaginationItem>
                          <span className="flex h-9 w-9 items-center justify-center">...</span>
                        </PaginationItem>
                        <PaginationItem>
                          <PaginationLink 
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              handlePageChange(totalPages);
                            }}
                            isActive={currentPage === totalPages}
                          >
                            {totalPages}
                          </PaginationLink>
                        </PaginationItem>
                      </>
                    )}
                    
                    <PaginationItem>
                      <PaginationNext 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          if (currentPage < totalPages) handlePageChange(currentPage + 1);
                        }}
                        className={cn(currentPage === totalPages && "pointer-events-none opacity-50")}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              )}
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
