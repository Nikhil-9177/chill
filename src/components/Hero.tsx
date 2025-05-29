import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-amber-100 to-amber-50 min-h-[70vh] flex items-center">
      <div className="container mx-auto px-4 py-16 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-slide-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-amber-800 mb-4">
              Authentic Traditional Indian Snacks
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Handcrafted with love and tradition, our snacks bring the authentic flavors 
              of India right to your doorstep. Experience the taste of heritage.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="btn-primary flex items-center">
                Shop Now <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link to="/about" className="border border-amber-600 text-amber-600 hover:bg-amber-50 font-medium py-2 px-4 rounded-md transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <img 
              src="https://images.pexels.com/photos/7474372/pexels-photo-7474372.jpeg" 
              alt="Traditional Indian Snacks" 
              className="rounded-lg shadow-2xl w-full max-w-md h-auto object-cover transform md:translate-y-4 md:translate-x-4"
            />
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-amber-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-500 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
};

export default Hero;