import { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  firstName: string;
  phone: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (phone: string, otp: string) => Promise<void>;
  logout: () => void;
}

const defaultUser: User = {
  name: "John Doe",
  firstName: "John",
  phone: "+91"
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (phone: string, otp: string): Promise<void> => {
    // Simulate login with mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        setUser({
          name: "John Doe",
          firstName: "John",
          phone: phone, // Use the actual phone number used during login
        });
        
        setIsAuthenticated(true);
        resolve();
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
