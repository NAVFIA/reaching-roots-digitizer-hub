
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '@/components/ui/button';
import { LogOut, Leaf } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-green-600 border-b-2 border-green-600' : ''
    }`;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <span className="text-xl font-bold text-gray-800">Reaching Roots</span>
            </NavLink>
          </div>

          <div className="flex items-center space-x-4">
            {!isAuthenticated ? (
              <>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact Us
                </NavLink>
                <NavLink to="/fundraisers" className={navLinkClass}>
                  Fundraisers
                </NavLink>
                <NavLink to="/login" className={navLinkClass}>
                  Volunteer Sign In
                </NavLink>
                <NavLink to="/signup">
                  <Button className="bg-green-600 hover:bg-green-700">
                    Volunteer Sign Up
                  </Button>
                </NavLink>
              </>
            ) : (
              <>
                <span className="text-sm text-gray-600">Welcome, {user?.username}</span>
                <NavLink to="/upload" className={navLinkClass}>
                  Upload
                </NavLink>
                <NavLink to="/dashboard" className={navLinkClass}>
                  Dashboard
                </NavLink>
                <Button
                  onClick={logout}
                  variant="outline"
                  size="sm"
                  className="flex items-center space-x-1"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
