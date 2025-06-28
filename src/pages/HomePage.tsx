
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { NavLink } from 'react-router-dom';
import { Users, Zap, TrendingUp, Heart, Globe, Sprout } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Empowering Rural Communities Through Technology
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Join our mission to digitize and strengthen Village Level Entrepreneur networks across rural communities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/signup">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Become a Volunteer
              </Button>
            </NavLink>
            <NavLink to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* Impact Areas Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Impact Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Community Empowerment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Supporting Village Level Entrepreneurs to build sustainable livelihoods through technology and training programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Digital Transformation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Digitizing paper-based reporting systems to improve efficiency and data accessibility for rural enterprises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle className="text-xl">Economic Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enabling data-driven decision making to boost income generation and business sustainability in rural areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Accomplishments Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Recent Accomplishments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Heart className="h-8 w-8 text-green-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-green-600">500+</h3>
              <p className="text-gray-600">VLEs Supported</p>
            </div>
            
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Globe className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-blue-600">25</h3>
              <p className="text-gray-600">Villages Reached</p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Sprout className="h-8 w-8 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-purple-600">1000+</h3>
              <p className="text-gray-600">Reports Digitized</p>
            </div>
            
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <TrendingUp className="h-8 w-8 text-orange-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-orange-600">₹50L+</h3>
              <p className="text-gray-600">Income Generated</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg mb-8 opacity-90">
            Join our volunteer network and help digitize rural entrepreneurship data to create lasting impact.
          </p>
          <NavLink to="/signup">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Start Volunteering Today
            </Button>
          </NavLink>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
