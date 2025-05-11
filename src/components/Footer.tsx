import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <span className="font-bold text-2xl">
                Ads<span className="text-[#E7521F]">Strategists</span>
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              We help businesses achieve exceptional ROI through strategic, data-driven advertising campaigns.
            </p>
            <div className="flex space-x-4 mb-6">
              {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href={`#${platform}`} 
                  className="text-gray-400 hover:text-[#E7521F] transition-colors duration-300"
                >
                  <span className="sr-only">{platform}</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Google Ads',
                'YouTube Ads',
                'LinkedIn Ads',
                'Facebook & Instagram Ads',
                'Strategy & Planning',
                'Analytics & Tracking'
              ].map((service) => (
                <li key={service}>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-[#E7521F] transition-colors duration-300"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {[
                'About Us',
                'Case Studies',
                'Testimonials',
                'Careers',
                'Blog',
                'Privacy Policy'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-gray-400 hover:text-[#E7521F] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">
                123 Marketing Ave, Suite 400<br />
                Digital City, CA 94105
              </li>
              <li>
                <a 
                  href="tel:5551234567" 
                  className="text-gray-400 hover:text-[#E7521F] transition-colors duration-300"
                >
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a 
                  href="mailto:hello@adsstrategists.com" 
                  className="text-gray-400 hover:text-[#E7521F] transition-colors duration-300"
                >
                  hello@adsstrategists.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Ads Strategists. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center">
            Made with <Heart className="h-4 w-4 text-[#E7521F] mx-1" /> by Ads Strategists Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;