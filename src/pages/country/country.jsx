import { Link, useLocation } from "react-router-dom";
import { StyledCountryContainer, StyledTextDiv } from "./country-styles";

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
  console.log(borderCountries)
  return (
    <StyledCountryContainer>
      <Link to="/">
        <button>Back</button>
      </Link>
      <img src={country.flags.png} alt={country.flags.alt} />
      <section>
        <h2>{country.name.common}</h2>
        <StyledTextDiv>
          <h6>Native Name:</h6>
          <p>{nativeName}</p>
        </StyledTextDiv>
        <StyledTextDiv>
          <h6>Population:</h6>
          <p>{country.population}</p>
        </StyledTextDiv>
        <StyledTextDiv>
          <h6>Region:</h6>
          <p>{country.region}</p>
        </StyledTextDiv>
        <StyledTextDiv>
          <h6>Sub Region:</h6>
          <p>{country.subregion}</p>
        </StyledTextDiv>
        <StyledTextDiv>
          <h6>Capital:</h6>
          <p>{country.capital}</p>
        </StyledTextDiv>
      </section>
      <section>
        <StyledTextDiv>
          <h6>Top Level Domain:</h6>
          <p>{topLevelDomain}</p>
        </StyledTextDiv>
        <StyledTextDiv>
          <h6>Currencies:</h6>
          <p>{currencies}</p>
        </StyledTextDiv>
        <StyledTextDiv>
          <h6>Languages:</h6>
          <p>{languages }</p>
        </StyledTextDiv>
      </section>
      <section>
        <h6>Border Countries</h6>
        {borderCountries.map(border => (
           <Link 
           to={`/${border.name.common}`} 
           key={border.cca3} 
           state={{ country: border, countries }}>
          <button key={border}>{border.name.common}</button>
          </Link>
        ))}
      </section>
    </StyledCountryContainer>
  );
};
export default Country;

//hacer un find de todos los paises con el country.name.common con las iniciales del borderCode

//find(c => c.cca3 === borderCode)
//cioc es igual que el  bordercode