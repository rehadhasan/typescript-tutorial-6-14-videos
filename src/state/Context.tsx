import React, {createContext} from 'react';
import {theme} from './theme';

type ThemeContextProviderProps = {
    children: React.ReactNode;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext(theme)

const ThemeContextProvider = ({children}: ThemeContextProviderProps) => {
    return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}

export default ThemeContextProvider;