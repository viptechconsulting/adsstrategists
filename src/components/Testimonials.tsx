import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, position, company, rating }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? 'text-[#E7521F] fill-[#E7521F]' : 'text-gray-300'}`}
          />
        ))}
      </div>
      <blockquote className="text-gray-800 text-lg mb-6 italic">"{quote}"</blockquote>
      <div>
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-gray-600 text-sm">
          {position}, {company}
        </p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Ads Strategists transformed our online presence. Within 3 months, our lead volume increased by 215% while our cost per acquisition decreased by 40%.",
      author: "Sarah Johnson",
      position: "Marketing Director",
      company: "Tech Innovations Ltd",
      rating: 5
    },
    {
      quote: "Their expertise with Google Ads helped us dominate our market. We're now generating consistent leads that actually convert into high-value customers.",
      author: "Michael Chen",
      position: "CEO",
      company: "GrowthPro Solutions",
      rating: 5
    },
    {
      quote: "The team at Ads Strategists brings both creativity and analytical precision to our campaigns. They've helped us achieve an average ROAS of 11.3x.",
      author: "Jessica Williams",
      position: "CMO",
      company: "Urban Lifestyle Brands",
      rating: 5
    },
    {
      quote: "They understand our industry and consistently deliver impressive results. Our YouTube campaigns now generate 65% more conversions at a lower cost.",
      author: "Robert Garcia",
      position: "Founder",
      company: "Evergreen Properties",
      rating: 5
    },
    {
      quote: "Hiring Ads Strategists was the best marketing decision we made last year. Our LinkedIn campaigns are generating qualified B2B leads consistently.",
      author: "Amanda Turner",
      position: "VP of Sales",
      company: "Enterprise Solutions Inc",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We're proud of the results we deliver for businesses just like yours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Testimonial {...testimonials[currentIndex]} />
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                      index === currentIndex ? 'bg-[#E7521F]' : 'bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full transition-colors duration-300"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;