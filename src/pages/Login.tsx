import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { LogIn, UserPlus, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      // Login user
      login(email, password);
      navigate('/');
    } else {
      // Sign up user
      signup(name, email, password);
      navigate('/');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    // Reset form fields
    setEmail('');
    setPassword('');
    setName('');
  };

  return (
    <div className="pt-24 pb-12 bg-amber-50 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-serif font-bold text-center text-amber-800 mb-6">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h1>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div>
                  <label className="block text-gray-700 mb-2\" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your name"
                    required={!isLogin}
                  />
                </div>
              )}
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your email"
                    required
                  />
                  <Mail size={18} className="absolute left-3 top-3.5 text-gray-400" />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="password">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Enter your password"
                    required
                  />
                  <Lock size={18} className="absolute left-3 top-3.5 text-gray-400" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
              
              {isLogin && (
                <div className="text-right">
                  <a href="#" className="text-sm text-amber-600 hover:text-amber-700 transition-colors">
                    Forgot Password?
                  </a>
                </div>
              )}
              
              <button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                {isLogin ? (
                  <>
                    <LogIn size={18} className="mr-2" />
                    Login
                  </>
                ) : (
                  <>
                    <UserPlus size={18} className="mr-2" />
                    Sign Up
                  </>
                )}
              </button>
            </form>
            
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleForm}
                  className="ml-1 text-amber-600 hover:text-amber-700 font-medium transition-colors"
                >
                  {isLogin ? 'Sign Up' : 'Login'}
                </button>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-8 pt-4 border-t border-gray-200 text-center">
              <p className="text-sm text-gray-600 mb-1">Demo Account</p>
              <p className="text-sm text-gray-500">Email: demo@example.com</p>
              <p className="text-sm text-gray-500">Password: password123</p>
              <p className="text-xs text-gray-400 mt-1">(For admin access, use admin@example.com)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;