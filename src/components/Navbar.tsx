import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User, Home, Info, MapPin, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartItems } = useCart();
  const { isAuthenticated, isAdmin } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold text-amber-800">Indhira Chegodila</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/" icon={<Home size={18} />} label="Home" />
            <NavLink to="/shop" icon={<ShoppingBag size={18} />} label="Shop" />
            <NavLink to="/about" icon={<Info size={18} />} label="About" />
            <NavLink to="/address" icon={<MapPin size={18} />} label="Find Us" />
            {isAdmin && (
              <NavLink to="/admin\" icon={<User size={18} />} label="Admin" />
            )}
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="flex items-center text-gray-700 hover:text-amber-600 transition-colors relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <Link to="/cart" className="text-gray-700 hover:text-amber-600 transition-colors relative">
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-amber-600 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white absolute left-0 right-0 top-full shadow-md animate-fade-in">
            <div className="flex flex-col p-4 space-y-3">
              <MobileNavLink to="/" icon={<Home size={18} />} label="Home" />
              <MobileNavLink to="/shop" icon={<ShoppingBag size={18} />} label="Shop" />
              <MobileNavLink to="/about" icon={<Info size={18} />} label="About" />
              <MobileNavLink to="/address" icon={<MapPin size={18} />} label="Find Us" />
              <MobileNavLink to="/login" icon={<User size={18} />} label="Account" />
              {isAdmin && (
                <MobileNavLink to="/admin\" icon={<User size={18} />} label="Admin" />
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

// Desktop Nav Link component
const NavLink = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center text-sm font-medium transition-colors ${
        isActive
          ? 'text-amber-600 border-b-2 border-amber-600'
          : 'text-gray-700 hover:text-amber-600'
      }`}
    >
      <span className="mr-1">{icon}</span>
      {label}
    </Link>
  );
};

// Mobile Nav Link component
const MobileNavLink = ({ to, icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center p-2 rounded-md ${
        isActive
          ? 'bg-amber-50 text-amber-600'
          : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
      }`}
    >
      <span className="mr-2">{icon}</span>
      {label}
    </Link>
  );
};

export default Navbar;