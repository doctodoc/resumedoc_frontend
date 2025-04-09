import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }:any) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch the user's auth state from your authentication service
    // and set the user state accordingly
  }, []);

  const login = async (email: string, password: string) => {
    // Implement your login logic here
  };

  const logout = async () => {
    // Implement your logout logic here
  };

  return(
    <AuthContext.Provider value={{login, logout, user}}>
      {children}
    </AuthContext.Provider>
  )

};

export const useAuth = () => useContext(AuthContext);