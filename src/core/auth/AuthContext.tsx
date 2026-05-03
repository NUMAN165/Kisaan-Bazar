import React, { createContext, useContext, useState, useEffect } from 'react';

export type Role = 'FARMER' | 'BUYER' | 'ADMIN' | null;

interface User {
  id: string;
  name: string;
  role: Role;
}

interface AuthContextData {
  user: User | null;
  isLoading: boolean;
  login: (name: string, role: Role) => void;
  register: (name: string) => void;
  setRole: (role: Role) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing session (mocked)
    const checkAuth = async () => {
      // simulate delay
      await new Promise(resolve => setTimeout(() => resolve(undefined), 500));
      setIsLoading(false);
    };
    checkAuth();
  }, []);

  const login = (name: string, role: Role) => {
    setUser({ id: Math.random().toString(), name, role });
  };

  const register = (name: string) => {
    // Just set the name, role will be set in the next step
    setUser({ id: Math.random().toString(), name, role: null });
  };

  const setRole = (role: Role) => {
    if (user) {
      setUser({ ...user, role });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, setRole, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const usePermissions = () => {
  const { user } = useAuth();
  
  const hasRole = (roles: Role[]) => {
    return user && roles.includes(user.role);
  };

  return { hasRole };
};
