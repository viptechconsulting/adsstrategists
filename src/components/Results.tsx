import React from 'react';
import { ArrowUpRight, PieChart, DollarSign, TrendingUp } from 'lucide-react';

interface CaseStudyProps {
  company: string;
  industry: string;
  goal: string;
  result: string;
  metrics: {
    icon: React.ReactNode;
    value: string;
    label: string;
  }[];
}

const CaseStudy: React.FC<CaseStudyProps> = ({ company, industry, goal, result, metrics }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100">
      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-xs font-semibold bg-gray-100 py-1 px-3 rounded-full text-gray-700">{industry}</span>
            <h3 className="text-xl font-bold mt-2 text-gray-900">{company}</h3>
          </div>
          <button className="text-[#E7521F] hover:text-[#d04718] transition-colors">
            <ArrowUpRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="mb-6">
          <div className="mb-3">
            <h4 className="text-sm font-medium text-gray-500">Goal</h4>
            <p className="text-gray-800">{goal}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-500">Outcome</h4>
            <p className="text-gray-800">{result}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="bg-[#E7521F]/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                {metric.icon}
              </div>
              <p className="font-bold text-lg text-[#E7521F]">{metric.value}</p>
              <p className="text-xs text-gray-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Results: React.FC = () => {
  const caseStudies = [
    {
      company: "TechSolutions Inc.",
      industry: "B2B SaaS",
      goal: "Increase qualified leads for enterprise software",
      result: "Scaled LinkedIn campaign to deliver consistent monthly leads",
      metrics: [
        { icon: <TrendingUp className="h-5 w-5 text-[#E7521F]" />, value: "278%", label: "Lead increase" },
        { icon: <DollarSign className="h-5 w-5 text-[#E7521F]" />, value: "-41%", label: "Cost per lead" },
        { icon: <PieChart className="h-5 w-5 text-[#E7521F]" />, value: "12x", label: "ROI" }
      ]
    },
    {
      company: "Fitness Connect",
      industry: "Health & Wellness",
      goal: "Drive app downloads and subscriptions",
      result: "Created high-converting Facebook & Instagram campaign",
      metrics: [
        { icon: <TrendingUp className="h-5 w-5 text-[#E7521F]" />, value: "85K+", label: "App installs" },
        { icon: <DollarSign className="h-5 w-5 text-[#E7521F]" />, value: "$2.40", label: "CPA" },
        { icon: <PieChart className="h-5 w-5 text-[#E7521F]" />, value: "8.5x", label: "ROAS" }
      ]
    },
    {
      company: "Luxury Homes Realty",
      industry: "Real Estate",
      goal: "Generate high-value property inquiries",
      result: "Optimized Google Ads campaign targeting luxury home buyers",
      metrics: [
        { icon: <TrendingUp className="h-5 w-5 text-[#E7521F]" />, value: "34", label: "Transactions" },
        { icon: <DollarSign className="h-5 w-5 text-[#E7521F]" />, value: "$8.2M", label: "Revenue" },
        { icon: <PieChart className="h-5 w-5 text-[#E7521F]" />, value: "15x", label: "ROAS" }
      ]
    }
  ];

  return (
    <section id="results" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results That Matter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We drive measurable outcomes for businesses of all sizes. Our data-driven approach delivers exceptional ROI across platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudy 
              key={index}
              company={study.company}
              industry={study.industry}
              goal={study.goal}
              result={study.result}
              metrics={study.metrics}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-[#E7521F] hover:bg-[#d04718] text-white px-8 py-3 rounded-md transition-colors duration-300 font-medium"
          >
            Get Similar Results
            <ArrowUpRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Results;