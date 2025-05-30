import { Link, useLocation} from "react-router-dom";
import { StyledCountryContainer, StyledTextDiv } from "./country-styles";

const Country = ({}) => {
const {state} = useLocation()
const country = state.country;
//console.log(country)
  const nativeName = Object.values(country.name)
  console.log(nativeName)

  return <StyledCountryContainer>
  <Link to="/">
  <button>Back</button>
  </Link>
  <img src={country.flags.png} alt={country.flags.alt}/>
  <section>
  <h2>{country.name.common}</h2>
  <StyledTextDiv>
    <h6>Native Name:</h6>
    <p>{country.name.nativeName?.ara?.official}</p>
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
    <p>{country.subRegion}</p>
  </StyledTextDiv>
  <StyledTextDiv>
    <h6>Capital:</h6>
    <p>{country.capital}</p>
  </StyledTextDiv>
  </section>
  <section>
  <StyledTextDiv>
    <h6>Top Level Domain:</h6>
    <p>{country.car.cca2}</p>
  </StyledTextDiv>
  <StyledTextDiv>
    <h6>Top Level Domain:</h6>
    <p>{Object.values(country.currencies.name)}</p>
  </StyledTextDiv>
  <StyledTextDiv>
    <h6>Languages:</h6>
    <p>{country.languages[0]}</p>
  </StyledTextDiv>
  </section>
  <section>
    <h6>Border Countries</h6>
    {country?.borders?.map(borderCode => (
  <button key={borderCode}>{borderCode}</button>

    ))}
  </section>
  </StyledCountryContainer>
};
export default Country;