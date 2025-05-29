import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Address = () => {
  return (
    <div className="pt-20 bg-amber-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="section-title">Find Us</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-10">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <ContactItem 
                icon={<MapPin size={24} className="text-amber-600" />}
                title="Our Location"
                details={[
                  "Indhira Chegodila Shop",
                  "Adivarapu peta, Near NTR Park",
                  "Narasanna peta village, Srikakulam Dist",
                  "Andhra Pradesh, 532421"
                ]}
              />
              
              <ContactItem 
                icon={<Phone size={24} className="text-amber-600" />}
                title="Phone Numbers"
                details={[
                  "(+91) 7032645526",
                  "(+91) 9177906645"
                ]}
              />
              
              <ContactItem 
                icon={<Mail size={24} className="text-amber-600" />}
                title="Email Address"
                details={[
                  "maddisatyannarayana7893412138@gmail.com"
                ]}
              />
              
              <ContactItem 
                icon={<Clock size={24} className="text-amber-600" />}
                title="Business Hours"
                details={[
                  "Monday - Saturday: 9:00 AM - 7:00 PM",
                  "Sunday: 10:00 AM - 5:00 PM"
                ]}
              />
            </div>
          </div>
          
          {/* Map */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6">Find Us on the Map</h2>
            
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.591300946269!2d84.04381497361356!3d18.41144287250167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c4691625d53b3%3A0x70b86db84177244d!2sAdivarapupeta%20St%2C%20Adivarapu%20Peta%2C%20Narasannapeta%2C%20Andhra%20Pradesh%20532421!5e0!3m2!1sen!2sin!4v1735066902640!5m2!1sen!2sin"

                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Map"
              ></iframe>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="max-w-2xl mx-auto mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-serif font-bold text-amber-800 mb-6 text-center">Send Us a Message</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="How can we help you?"
              />
            </div>
            
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="btn-primary px-8 py-3"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, details }) => {
  return (
    <div className="flex">
      <div className="mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
        {details.map((detail, index) => (
          <p key={index} className="text-gray-600">{detail}</p>
        ))}
      </div>
    </div>
  );
};

export default Address;