import { useState } from "react";
import { ThemeModeContext } from "../contexts/themeMode.context"
import { COLORS_DARK, COLORS_LIGHT } from "../../styles/colors";
import { ThemeProvider } from "styled-components";

const ThemeModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeTheme = () => setIsDarkMode(darkMode => !darkMode)

    const theme = isDarkMode ? COLORS_DARK : COLORS_LIGHT; 

    return <ThemeModeContext.Provider value={{ isDarkMode, changeTheme  }}>
         <ThemeProvider theme={theme}>
 {children}
 </ThemeProvider>
    </ThemeModeContext.Provider>
}

export default ThemeModeProvider