import { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => void;
  signup: (name: string, email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  
  // Check if user is already logged in
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Failed to parse user from localStorage:', error);
      }
    }
  }, []);

  const login = (email, password) => {
    // In a real app, this would call an API
    // For demo purposes, we'll authenticate locally

    // Demo admin account
    if (email === 'admin@example.com' && password === 'password123') {
      const adminUser = {
        id: 'admin-1',
        name: 'Admin User',
        email: 'admin@example.com',
        isAdmin: true
      };
      setUser(adminUser);
      localStorage.setItem('user', JSON.stringify(adminUser));
      return;
    }

    // Demo regular user
    if (email === 'demo@example.com' && password === 'password123') {
      const demoUser = {
        id: 'user-1',
        name: 'Demo User',
        email: 'demo@example.com',
        isAdmin: false
      };
      setUser(demoUser);
      localStorage.setItem('user', JSON.stringify(demoUser));
      return;
    }

    // For demo purposes, allow any login
    const newUser = {
      id: `user-${Date.now()}`,
      name: email.split('@')[0],
      email,
      isAdmin: false
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const signup = (name, email, password) => {
    // In a real app, this would call an API
    // For demo purposes, create a new user locally
    const newUser = {
      id: `user-${Date.now()}`,
      name,
      email,
      isAdmin: false
    };
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      isAdmin: user?.isAdmin || false,
      login,
      signup,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};