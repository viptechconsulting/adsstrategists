import React from 'react';
import { ChevronRight, TrendingUp, Award, Users } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 bg-black text-white relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black to-gray-900 opacity-90"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Turn Your <span className="text-[#E7521F]">Ad Budget</span> Into 
              <span className="text-[#E7521F]"> Revenue</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl">
              We help businesses achieve exceptional ROI through strategic, data-driven 
              advertising campaigns across Google, YouTube, LinkedIn, Facebook, and Instagram.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#E7521F] hover:bg-[#d04718] text-white py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center font-medium">
                Get Free Strategy <ChevronRight className="ml-1 h-5 w-5" />
              </button>
              <button className="border border-white hover:border-[#E7521F] hover:text-[#E7521F] text-white py-3 px-8 rounded-md transition-colors duration-300 flex items-center justify-center font-medium">
                View Our Work
              </button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#E7521F]">150+</p>
                <p className="text-sm text-gray-400 mt-1">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#E7521F]">$25M+</p>
                <p className="text-sm text-gray-400 mt-1">Ad Spend Managed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-[#E7521F]">10x</p>
                <p className="text-sm text-gray-400 mt-1">Average ROAS</p>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 pl-0 md:pl-10">
            <div className="bg-gray-900 rounded-xl p-8 shadow-2xl border border-gray-800 transform transition-transform hover:scale-[1.02]">
              <h3 className="text-xl font-semibold mb-4">Why Businesses Choose Us</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#E7521F]/10 p-3 rounded-lg mr-4">
                    <TrendingUp className="h-6 w-6 text-[#E7521F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Data-Driven Results</h4>
                    <p className="text-gray-400 text-sm">We optimize for revenue, not just impressions or clicks</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E7521F]/10 p-3 rounded-lg mr-4">
                    <Award className="h-6 w-6 text-[#E7521F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Platform Specialization</h4>
                    <p className="text-gray-400 text-sm">Expert teams dedicated to each ad platform</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[#E7521F]/10 p-3 rounded-lg mr-4">
                    <Users className="h-6 w-6 text-[#E7521F]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Reporting</h4>
                    <p className="text-gray-400 text-sm">Clear metrics and regular performance updates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;