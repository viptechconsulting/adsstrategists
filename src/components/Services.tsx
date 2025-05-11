import React from 'react';
import { Youtube, Linkedin, Instagram, Search, BarChart3, Target } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl border border-gray-100 hover:translate-y-[-8px]">
      <div className="text-[#E7521F] mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
      <p className="text-gray-700 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <span className="bg-[#E7521F]/10 rounded-full p-1 mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-[#E7521F]"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="text-sm text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Search className="h-10 w-10" />,
      title: "Google Ads",
      description: "Capture high-intent customers actively searching for your products or services.",
      features: [
        "Search campaign optimization",
        "Shopping ads management",
        "Display network targeting",
        "Keyword research & analysis"
      ]
    },
    {
      icon: <Youtube className="h-10 w-10" />,
      title: "YouTube Ads",
      description: "Engage potential customers with compelling video content that converts.",
      features: [
        "Video ad creation",
        "Audience targeting",
        "Ad sequence campaigns",
        "Performance tracking"
      ]
    },
    {
      icon: <Linkedin className="h-10 w-10" />,
      title: "LinkedIn Ads",
      description: "Target decision-makers with precision B2B campaigns that generate leads.",
      features: [
        "Sponsored content",
        "B2B audience targeting",
        "InMail campaigns",
        "Industry-specific strategies"
      ]
    },
    {
      icon: <Instagram className="h-10 w-10" />,
      title: "Instagram & Facebook Ads",
      description: "Build brand awareness and drive sales through visual-centric platforms.",
      features: [
        "Feed & story ad creation",
        "Retargeting campaigns",
        "Audience building",
        "Engagement optimization"
      ]
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Analytics & Tracking",
      description: "Turn data into actionable insights that improve campaign performance.",
      features: [
        "Conversion tracking setup",
        "Custom reporting dashboards",
        "A/B testing framework",
        "ROI analysis"
      ]
    },
    {
      icon: <Target className="h-10 w-10" />,
      title: "Strategy & Planning",
      description: "Develop comprehensive advertising roadmaps aligned with business goals.",
      features: [
        "Multi-platform strategy",
        "Budget allocation",
        "Seasonal planning",
        "Competitive analysis"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Specialized Ad Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We create, optimize, and scale advertising campaigns that maximize your return on investment across major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;