import { StyledCaption, StyledCountryContainer, StyledCountryFlag, StyledCountryInfo, Styledtext, StyledTextDiv, StyledTitle } from "./countries-data-sheet-styles";

const CountriesDataSheet = ({ flag, name, population, region, capital }) => {
  return (
    <StyledCountryContainer>
      <StyledCountryFlag src={flag.png} alt={flag.alt} />
      <StyledCountryInfo>
      <StyledTitle>{name}</StyledTitle>
      <StyledTextDiv>
        <StyledCaption>Population:</StyledCaption>
        <Styledtext>{population}</Styledtext>
      </StyledTextDiv>
      <StyledTextDiv>
        <StyledCaption>Region:</StyledCaption>
        <Styledtext>{region}</Styledtext>
      </StyledTextDiv>
      <StyledTextDiv>
        <StyledCaption>Capital:</StyledCaption>
        <Styledtext>{capital}</Styledtext>
      </StyledTextDiv>
      </StyledCountryInfo>
    </StyledCountryContainer>
  );
};
export default CountriesDataSheet;