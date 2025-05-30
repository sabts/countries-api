import { useEffect, useState } from "react";
import { REGIONS, REGIONS_MAP } from "../../constants/region";
import CountriesDataSheet from "../../components/countries-data-sheet/CountriesDataSheet";
import { StyledCountriesDataSheetContainer, StyledForm, StyledMainContainer, StyledSearch, StyledSelection } from "./home-styles";
import { Link } from "react-router-dom";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(REGIONS_MAP.ALL);

  const filteredCountriesByRegion = filterByRegion(countries, filter);
  const filteredCountries = filterBySearch(filteredCountriesByRegion, search);
  useEffect(() => {
    getCountries(setCountries);
  }, []);
  return (
    <StyledMainContainer>
      <StyledForm>
        <StyledSearch
          type="text"
          placeholder="Search for a country..."
          value={search}
          onChange={search => setSearch(search.target.value)}
        />
      <StyledSelection
  value={filter}
  onChange={(e) => setFilter(e.target.value)}
>
          {REGIONS.map(region => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </StyledSelection>
      </StyledForm>
      <StyledCountriesDataSheetContainer>
        {filteredCountries.map(country=>(
          <Link key={country.name.common}
          to={`/${country.name.common}`}
          state={{ country, countries: countries }}>
          <div>
            <CountriesDataSheet
        flag={country.flags}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital}
      />
      </div>
      </Link>
        ))}
      </StyledCountriesDataSheetContainer>
    </StyledMainContainer>
  );
};
export default Home;

const filterByRegion = (countries, filter) => {
  return filter === "All"
    ? countries
    : countries.filter((country) => country.region === filter);
}

const filterBySearch = (filteredCountriesByRegion, search) => {
  return  search
    ?  filteredCountriesByRegion.filter(country =>
        country.name.common.toLowerCase().includes(search.toLowerCase())
      )
    :  filteredCountriesByRegion;
};

const getCountries = async setCountries => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    setCountries(countries);
  } catch (error) {
    console.error("Country not found");
  }
};

