import { createContext, useState } from "react";

const Auth = createContext();

const AuthProvider = ({ children }) => {
  // Corrected the usage of localStorage
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem("loggedIn") === "true");
  const [profile, setProfile] = useState(JSON.parse(localStorage.getItem("profile")) || {});

  return (
    <Auth.Provider value={{ loggedIn, setLoggedIn, profile, setProfile }}>
      {children}
    </Auth.Provider>
  );
};

export { Auth, AuthProvider };
