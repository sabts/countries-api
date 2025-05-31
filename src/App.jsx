import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from "./lib/Router";
import ThemeModeProvider from "./lib/providers/ThemeMode.provider";
import { useContext } from "react";

const App = () => {
  return (
    <>
    <ThemeModeProvider>
      <BrowserRouter>
        <GlobalStyles />
        <Router />
      </BrowserRouter>
      </ThemeModeProvider>
    </>
  );
};

export default App;
