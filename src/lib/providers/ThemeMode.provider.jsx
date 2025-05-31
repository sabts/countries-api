import { useState } from "react";
import { ThemeModeContext } from "../contexts/themeMode.context"

const ThemeModeProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const changeTheme = () => setIsDarkMode(darkMode => !darkMode)
 

    return <ThemeModeContext.Provider value={{ isDarkMode, changeTheme  }}>
 {children}
    </ThemeModeContext.Provider>
}

export default ThemeModeProvider