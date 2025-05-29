import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-amber-800 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Indhira Chegodila</h3>
            <p className="text-amber-100 text-sm">
              Authentic traditional Indian snacks made with care and love, 
              bringing the taste of India to your doorstep since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-amber-200 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-amber-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-amber-100 hover:text-white transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-amber-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/address" className="text-amber-100 hover:text-white transition-colors">
                  Find Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin size={18} className="mr-2 text-amber-200" />
                <span className="text-amber-100">
                  Adivarapu peta, Near NTR Park
                  <br />
                  Narasanna peta village, Srikakulam Dist,
                  <br />
                  Andhra Pradesh, 532421
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-amber-200" />
                <span className="text-amber-100">(+91) 7032645526</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-amber-200" />
                <span className="text-amber-100 break-all">maddisatyannarayana7893412138@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber-700 mt-8 pt-6 text-center text-amber-200 text-sm">
          <p>© {new Date().getFullYear()} Indhira Chegodila Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;