import { Link, useLocation } from "react-router-dom";
import { StyledBorderCaption, StyledBorderDiv, StyledButton, StyledCaption, StyledCountryContainer, StyledCountryFlag, StyledCountryInfo, Styledtext, StyledTextDiv, StyledTitle } from "./country-styles";

const Country = ({}) => {
  const { state } = useLocation();
  const {country, countries} = state;

  const nativeName = Object.values(country.name.nativeName)[0].official;
  const topLevelDomain = Object.values(country.tld)[0];
  const currencies = Object.values(country.currencies)[0].name;
   const languages = Object.values(country.languages).join(", ")

   const borderCountries = country.borders?.map(borderCode =>
    countries.find(c => c.cca3 === borderCode)
  )
  return (
    <StyledCountryContainer>
      <Link to="/">
        <StyledButton> 
          <img src="/assets/back-arrow.svg"/>
          Back</StyledButton>
      </Link>
      < StyledCountryFlag src={country.flags.png} alt={country.flags.alt} />
      <StyledCountryInfo>
        <StyledTitle>{country.name.common}</StyledTitle>
        <StyledTextDiv>
          <StyledCaption >Native Name:</StyledCaption>
          <Styledtext>{nativeName}</Styledtext>
        </StyledTextDiv>
        <StyledTextDiv>
          <StyledCaption >Population:</StyledCaption>
          <Styledtext>{country.population}</Styledtext>
        </StyledTextDiv>
        <StyledTextDiv>
          <StyledCaption>Region:</StyledCaption>
          <Styledtext>{country.region}</Styledtext>
        </StyledTextDiv>
        <StyledTextDiv>
          <StyledCaption >Sub Region:</StyledCaption>
          <Styledtext>{country.subregion}</Styledtext>
        </StyledTextDiv>
        <StyledTextDiv>
          <StyledCaption>Capital:</StyledCaption>
          <Styledtext>{country.capital}</Styledtext>
        </StyledTextDiv>
      </StyledCountryInfo>
      <StyledCountryInfo>
        <StyledTextDiv>
          <StyledCaption>Top Level Domain:</StyledCaption>
          <Styledtext>{topLevelDomain}</Styledtext>
        </StyledTextDiv>
        <StyledTextDiv>
          <StyledCaption>Currencies:</StyledCaption>
          <Styledtext>{currencies}</Styledtext>
        </StyledTextDiv>
        <StyledTextDiv>
          <StyledCaption>Languages:</StyledCaption>
          <Styledtext>{languages }</Styledtext>
        </StyledTextDiv>
      </StyledCountryInfo>
      <section>
        <StyledBorderCaption>Border Countries</StyledBorderCaption>
        <StyledBorderDiv>
        {borderCountries.map(border => (
           <Link 
           to={`/${border.name.common}`} 
           key={border.cca3} 
           state={{ country: border, countries }}>
          <StyledButton key={border}>{border.name.common}</StyledButton>
          </Link>
        ))}
        </StyledBorderDiv>
      </section>
    </StyledCountryContainer>
  );
};
export default Country;

//hacer un find de todos los paises con el country.name.common con las iniciales del borderCode

//find(c => c.cca3 === borderCode)
//cioc es igual que el  bordercode