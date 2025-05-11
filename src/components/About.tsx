import React from 'react';
import { CheckCircle, Zap, Users, BarChart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Ads Strategists</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Ads Strategists was founded with a clear mission: to transform how businesses approach digital advertising. 
              Unlike agencies that focus solely on impressions or clicks, we're obsessed with generating real, measurable 
              business outcomes through strategic advertising.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team consists of certified specialists across all major advertising platforms. We combine deep technical 
              expertise with creative thinking to develop campaigns that not only reach your audience but convert them into 
              loyal customers.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#E7521F] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Platform-certified experts</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#E7521F] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Data-driven approach</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#E7521F] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Transparent reporting</span>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-[#E7521F] mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Revenue-focused KPIs</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="bg-[#E7521F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Zap className="text-[#E7521F] h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Results</h3>
              <p className="text-gray-600">
                We focus on quick wins while building long-term growth strategies
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="bg-[#E7521F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Users className="text-[#E7521F] h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Dedicated Team</h3>
              <p className="text-gray-600">
                Your account gets a specialized team that understands your business
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="bg-[#E7521F]/10 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-[#E7521F] h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Weekly Reports</h3>
              <p className="text-gray-600">
                Clear, actionable insights on campaign performance
              </p>
            </div>
            
            <div className="bg-black p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">Our Mission</h3>
              <p className="text-gray-300">
                To help businesses achieve breakthrough growth through strategic advertising that delivers measurable ROI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;