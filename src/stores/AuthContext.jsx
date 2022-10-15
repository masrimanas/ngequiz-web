import { useContext,  useState, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import fakeAuth from '../dummy/dummyAuth';

export const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [token, setToken] = useState(null);

  const handleLogin = async () => {
    const tokenObtained = await fakeAuth();

    setToken(tokenObtained);
    const origin = location.state?.from?.pathname || '/dashboard';
    navigate(origin);
    // eslint-disable-next-line no-console
    console.log('authenticated');
  };

  const handleLogout = () => {
    setToken(null);
  };

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
      token,
      handleLogin,
      handleLogout
    };
  

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
