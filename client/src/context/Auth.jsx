import { createContext, useState } from "react";

const Auth = createContext();

const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [profile, setProfile] = useState({});
  return (
    <Auth.Provider value={{ loggedIn, setLoggedIn, profile, setProfile }}>
      {children}
    </Auth.Provider>
  );
};
export { Auth, AuthProvider };
