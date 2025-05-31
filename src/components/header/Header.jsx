import { useContext } from "react";  
import { ThemeModeContext } from "../../lib/contexts/themeMode.context";
import { StyledButton, StyledH1, StyledHeaderContainer, StyledLabel} from "./header-styles";

const Header = () => {
  const { isDarkMode, changeTheme } = useContext(ThemeModeContext)
  return (
    <StyledHeaderContainer>
      <StyledH1>Where in the world?</StyledH1>
      <StyledLabel>
          <StyledButton 
          type="checkbox" 
          checked={isDarkMode} 
          onChange={changeTheme} 
        />
         <img 
          src={isDarkMode ? "/assets/Light Mode Icon.svg" : "/assets/Dark Mode Icon.svg"} 
          alt={isDarkMode ? "Sun Icon" : "Moon Icon"} 
        />
        <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span> 
      </StyledLabel>
    </StyledHeaderContainer>
  );
};

export default Header;