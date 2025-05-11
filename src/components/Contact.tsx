import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Transform Your Ad Strategy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to see what strategic advertising can do for your business? Get in touch with our team for a free consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#E7521F]/20 p-3 rounded-lg mr-4">
                  <Phone className="h-5 w-5 text-[#E7521F]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300 mb-1">Call Us</h4>
                  <p className="text-white">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E7521F]/20 p-3 rounded-lg mr-4">
                  <Mail className="h-5 w-5 text-[#E7521F]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300 mb-1">Email Us</h4>
                  <p className="text-white">hello@adsstrategists.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#E7521F]/20 p-3 rounded-lg mr-4">
                  <MapPin className="h-5 w-5 text-[#E7521F]" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-300 mb-1">Visit Us</h4>
                  <p className="text-white">123 Marketing Ave, Suite 400<br />Digital City, CA 94105</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h4 className="font-medium text-gray-300 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'twitter', 'linkedin', 'instagram'].map((platform) => (
                  <a 
                    key={platform}
                    href={`#${platform}`} 
                    className="bg-gray-800 hover:bg-[#E7521F] transition-colors duration-300 w-10 h-10 rounded-full flex items-center justify-center"
                  >
                    <span className="sr-only">{platform}</span>
                    <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Ad Strategy</h3>
            
            <form>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7521F] focus:border-[#E7521F]"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7521F] focus:border-[#E7521F]"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7521F] focus:border-[#E7521F]"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7521F] focus:border-[#E7521F]"
                    placeholder="Company Inc."
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                    Interested In
                  </label>
                  <select
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7521F] focus:border-[#E7521F] bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="google">Google Ads</option>
                    <option value="youtube">YouTube Ads</option>
                    <option value="linkedin">LinkedIn Ads</option>
                    <option value="facebook">Facebook/Instagram Ads</option>
                    <option value="multi">Multi-Platform Strategy</option>
                  </select>
                </div>
                
                <div className="md:col-span-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about your goals
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#E7521F] focus:border-[#E7521F]"
                    placeholder="What are you looking to achieve with your advertising?"
                  ></textarea>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#E7521F] hover:bg-[#d04718] text-white font-medium py-3 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
              >
                Send Message <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;