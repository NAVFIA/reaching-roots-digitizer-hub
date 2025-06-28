
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Heart, Target, Users, Calendar } from 'lucide-react';

const FundraisersPage: React.FC = () => {
  const fundraisers = [
    {
      id: 1,
      title: "Digital Equipment for VLEs",
      description: "Help us provide tablets and smartphones to Village Level Entrepreneurs for better data collection and reporting.",
      target: 100000,
      raised: 65000,
      donors: 127,
      daysLeft: 15,
      image: "🖥️"
    },
    {
      id: 2,
      title: "Training Workshop Series",
      description: "Support our comprehensive training programs to educate VLEs on digital tools and sustainable farming practices.",
      target: 50000,
      raised: 32000,
      donors: 89,
      daysLeft: 23,
      image: "📚"
    },
    {
      id: 3,
      title: "Mobile Health Clinics",
      description: "Fund mobile health clinics to provide essential healthcare services to remote rural communities.",
      target: 200000,
      raised: 145000,
      donors: 203,
      daysLeft: 8,
      image: "🏥"
    }
  ];

  const getProgressPercentage = (raised: number, target: number) => {
    return Math.min((raised / target) * 100, 100);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Active Fundraisers</h1>
          <p className="text-xl text-gray-600">Support our mission to empower rural communities</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fundraisers.map((fundraiser) => (
            <Card key={fundraiser.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl text-center mb-4">{fundraiser.image}</div>
                <CardTitle className="text-xl">{fundraiser.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm">{fundraiser.description}</p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">
                      ₹{fundraiser.raised.toLocaleString()} / ₹{fundraiser.target.toLocaleString()}
                    </span>
                  </div>
                  <Progress value={getProgressPercentage(fundraiser.raised, fundraiser.target)} className="h-2" />
                  <div className="text-xs text-gray-500">
                    {getProgressPercentage(fundraiser.raised, fundraiser.target).toFixed(1)}% funded
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-blue-600" />
                    <span>{fundraiser.donors} donors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span>{fundraiser.daysLeft} days left</span>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Heart className="h-4 w-4 mr-2" />
                  Donate Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-r from-green-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              <Target className="h-6 w-6 text-green-600" />
              Our Impact Goal
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-700 leading-relaxed">
              Every contribution helps us reach more rural communities, provide better tools and training 
              to Village Level Entrepreneurs, and create sustainable economic opportunities. Together, 
              we can build a more connected and prosperous rural ecosystem.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">500+</div>
                <div className="text-sm text-gray-600">VLEs Supported</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">25</div>
                <div className="text-sm text-gray-600">Villages Reached</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">₹50L+</div>
                <div className="text-sm text-gray-600">Income Generated</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FundraisersPage;
