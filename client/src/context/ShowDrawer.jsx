import { createContext, useState } from "react";

const DrawerContext = createContext();

const DrawerContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);
  return (
    <DrawerContext.Provider value={{ show, setShow }}>
      {children}
    </DrawerContext.Provider>
  );
};

export { DrawerContext, DrawerContextProvider };
