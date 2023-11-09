import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
    // Retrieve theme from localStorage on component mount
    const initialTheme = localStorage.getItem("theme") || "dark";
    const [currentTheme, setTheme] = useState(initialTheme);

    useEffect(() => {
        // Save currentTheme to localStorage whenever it changes
        localStorage.setItem("theme", currentTheme);
    }, [currentTheme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export { ThemeContext, ThemeContextProvider };
