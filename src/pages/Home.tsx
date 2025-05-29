import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import { ChevronRight, Award, Truck, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="pt-16">
      <Hero />

      <FeaturedProducts />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Why Choose Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <FeatureCard 
              icon={<Award size={40} className="text-amber-600" />}
              title="Premium Quality"
              description="We use only the finest ingredients to create authentic flavors that transport you back to the streets of India."
            />
            <FeatureCard 
              icon={<Truck size={40} className="text-amber-600" />}
              title="Fast Delivery"
              description="We ensure that our products reach you fresh and in perfect condition with our efficient delivery network."
            />
            <FeatureCard 
              icon={<Shield size={40} className="text-amber-600" />}
              title="Customer Satisfaction"
              description="Your satisfaction is our top priority. We stand behind the quality of every product we offer."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
            <TestimonialCard 
              text="The snacks remind me of my childhood in India. Authentic flavors that you can't find anywhere else!"
              name="Priya Sharma"
              location="Mumbai"
            />
            <TestimonialCard 
              text="I ordered for a family gathering and everyone loved it. The packaging was excellent and everything arrived fresh."
              name="Rahul Patel"
              location="Delhi"
            />
            <TestimonialCard 
              text="These are the most authentic Indian snacks I've found outside of India. Amazing quality and taste!"
              name="Anita Desai"
              location="Hyderabad"
            />
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-amber-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Experience Authentic Flavors?</h2>
          <p className="max-w-2xl mx-auto text-amber-100 mb-8">
            Explore our wide range of traditional Indian snacks and discover the true taste of India.
          </p>
          <Link to="/shop" className="inline-flex items-center bg-white text-amber-800 hover:bg-amber-100 font-medium py-3 px-6 rounded-md transition-colors">
            Shop Now <ChevronRight size={20} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-amber-50 p-6 rounded-lg text-center transition-transform hover:-translate-y-2 duration-300">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-serif text-xl font-semibold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TestimonialCard = ({ text, name, location }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="mb-4">
        {/* Stars */}
        <div className="flex justify-center mb-3">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
        <p className="text-gray-600 italic mb-4">"{text}"</p>
      </div>
      <div className="text-center">
        <p className="font-semibold text-gray-800">{name}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default Home;