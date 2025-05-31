import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/Router";
import ThemeModeProvider from "./lib/providers/ThemeMode.provider";

const App = () => {
  return (
    <>
    <ThemeModeProvider>
      <BrowserRouter>
        <GlobalStyles isDarkMode={isDarkMode} />
        <Router />
      </BrowserRouter>
      </ThemeModeProvider>
    </>
  );
};

export default App;
