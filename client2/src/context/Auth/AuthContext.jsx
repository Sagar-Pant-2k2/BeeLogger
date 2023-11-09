import React, { createContext, useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    const [login, setLogin] = useState(false);

    return (
        <AuthContext.Provider value={{ login, setLogin }}>
            {children}
        </AuthContext.Provider>
    );
}

export {
    AuthContext,
    AuthContextProvider
};
