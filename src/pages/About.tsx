import React from 'react';

const About = () => {
  return (
    <div className="pt-20 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="section-title">About Us</h1>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-8">
            Welcome to Indhira Chegodila Shop! We specialize in offering the finest traditional Indian snacks, 
            made with care and authentic flavors. Our mission is to bring you the best products that not only 
            satisfy your taste buds but also bring back cherished memories.
          </p>
        </div>

        {/* Main Image */}
        <div className="flex justify-center mb-16">
          <img
            src="https://images.pexels.com/photos/5490251/pexels-photo-5490251.jpeg" 
            alt="Traditional Indian cooking"
            className="w-full max-w-3xl h-auto rounded-lg shadow-xl"
          />
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <InfoCard
            title="Our Story"
            content="Our journey began with a simple idea: to share the rich flavors of Indian snacks with the world. Over time, we've honed our craft to offer products that speak for themselves."
          />
          <InfoCard
            title="Our Vision"
            content="We strive to become a global name known for delivering premium quality, authenticity, and trust. Our goal is to expand our offerings and bring more joy to our customers."
          />
          <InfoCard
            title="Our Promise"
            content="We promise to deliver snacks made with the highest quality ingredients, ensuring every bite is a moment of bliss and a taste of tradition."
          />
        </div>

        {/* Our Process Section */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6 text-center">Our Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProcessStep 
              number="01"
              title="Source"
              description="We carefully select the finest ingredients from trusted suppliers."
            />
            <ProcessStep 
              number="02"
              title="Prepare"
              description="Our skilled chefs prepare each item using traditional recipes."
            />
            <ProcessStep 
              number="03"
              title="Quality Check"
              description="Every product undergoes strict quality checks before packaging."
            />
            <ProcessStep 
              number="04"
              title="Deliver"
              description="We ensure that our products reach you fresh and in perfect condition."
            />
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-serif font-bold text-amber-800 mb-8">Meet Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Satya Narayana"
              role="Founder & Chef"
              image="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
            />
            <TeamMember
              name="Lakshmi Devi"
              role="Master Chef"
              image="https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg"
            />
            <TeamMember
              name="Raj Kumar"
              role="Operations Manager"
              image="https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-serif font-semibold text-amber-600 mb-4">{title}</h3>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

const ProcessStep = ({ number, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 rounded-full bg-amber-100 text-amber-800 flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

const TeamMember = ({ name, role, image }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:-translate-y-2 duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h3 className="font-serif font-semibold text-lg">{name}</h3>
        <p className="text-amber-600">{role}</p>
      </div>
    </div>
  );
};

export default About;