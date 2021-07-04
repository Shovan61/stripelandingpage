import React, { useState, useContext } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [isSidemenuOpen, setisSidemenuOpen] = useState(true);

    const handleSideMenu = () => {
        setisSidemenuOpen(false);
    };

    return (
        <AppContext.Provider
            value={{ isSidemenuOpen, setisSidemenuOpen, handleSideMenu }}>
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};
