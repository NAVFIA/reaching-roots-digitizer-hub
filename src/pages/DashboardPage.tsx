
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart3, Search, User, Clock, DollarSign, Activity } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { vleId: urlVleId } = useParams();
  const [inputVleId, setInputVleId] = useState(urlVleId || '');
  const [searchedVleId, setSearchedVleId] = useState(urlVleId || '');
  const [analyticsData, setAnalyticsData] = useState<any>(null);

  const handleSearch = () => {
    if (!inputVleId.trim()) return;
    
    // Simulate data fetch
    const mockAnalytics = {
      vleId: inputVleId,
      totalActivities: 25,
      totalMachineHours: 110,
      totalEarnings: 27500,
      recentReports: [
        { date: '2024-01-15', machineType: 'Thresher', hours: 6, earnings: 1500 },
        { date: '2024-01-12', machineType: 'Harvester', hours: 4, earnings: 2000 },
        { date: '2024-01-10', machineType: 'Tractor', hours: 8, earnings: 2400 },
      ]
    };
    
    setAnalyticsData(mockAnalytics);
    setSearchedVleId(inputVleId);
  };

  React.useEffect(() => {
    if (urlVleId) {
      handleSearch();
    }
  }, [urlVleId]);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <BarChart3 className="h-8 w-8 text-blue-600" />
            VLE Analytics Dashboard
          </h1>
          <p className="text-gray-600">Monitor and analyze Village Level Entrepreneur performance</p>
        </div>

        {/* Search Section */}
        <Card className="max-w-2xl mx-auto mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="h-5 w-5" />
              Search VLE Data
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-1">
                <Label htmlFor="vle-search">VLE ID</Label>
                <Input
                  id="vle-search"
                  type="text"
                  value={inputVleId}
                  onChange={(e) => setInputVleId(e.target.value)}
                  placeholder="Enter VLE ID to view analytics"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              <div className="flex items-end">
                <Button onClick={handleSearch} className="bg-blue-600 hover:bg-blue-700">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Analytics Display */}
        {analyticsData && (
          <div className="space-y-6">
            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">VLE ID</p>
                      <p className="text-2xl font-bold text-gray-900">{searchedVleId}</p>
                    </div>
                    <User className="h-8 w-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Activities</p>
                      <p className="text-2xl font-bold text-gray-900">{analyticsData.totalActivities}</p>
                    </div>
                    <Activity className="h-8 w-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Machine Hours</p>
                      <p className="text-2xl font-bold text-gray-900">{analyticsData.totalMachineHours}</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-600" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Earnings</p>
                      <p className="text-2xl font-bold text-gray-900">₹{analyticsData.totalEarnings.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Reports */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">Date</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Machine Type</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Hours</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Earnings (₹)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {analyticsData.recentReports.map((report: any, index: number) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-4 py-2">{report.date}</td>
                          <td className="border border-gray-300 px-4 py-2">{report.machineType}</td>
                          <td className="border border-gray-300 px-4 py-2">{report.hours}</td>
                          <td className="border border-gray-300 px-4 py-2">₹{report.earnings}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Charts Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Performance Charts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center text-gray-500">
                    <BarChart3 className="h-12 w-12 mx-auto mb-2" />
                    <p>Chart.js or Recharts component will go here</p>
                    <p className="text-sm">Interactive charts for earnings, hours, and activity trends</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {!analyticsData && (
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-12 text-center">
              <BarChart3 className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Selected</h3>
              <p className="text-gray-600">Enter a VLE ID above to view their analytics and performance data.</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
