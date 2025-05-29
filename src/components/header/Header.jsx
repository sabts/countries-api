import { StyledButton, StyledH1, StyledHeaderContainer } from "./header-styles";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledH1>Where in the world?</StyledH1>
      <StyledButton>
        <img src="/assets/Dark Mode Icon.svg"/>
        <span>Dark Mode</span> 
        </StyledButton>
    </StyledHeaderContainer>
  );
};

export default Header;
