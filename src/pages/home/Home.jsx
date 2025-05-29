import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { REGIONS, REGIONS_INDEX } from "../../constants/region";
import CountriesDataSheet from "../../components/countries-data-sheet/CountriesDataSheet";
import { StyledCountriesDataSheetContainer, StyledMainContainer } from "./home-styles";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(REGIONS_INDEX.ALL);

  useEffect(() => {
    getCountries(setCountries);
  }, []);
  return (
    <StyledMainContainer>
      <form>
        <input
          type="text"
          placeholder="Search for a contry..."
          value={search}
          onChange={search => setSearch(search.target.value)}
        />
        <select
          value={filter}
          placeholder="Filter by Region"
          onChange={e => setFilter(e.target.value)}
        >
          {REGIONS.map(region => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
      <StyledCountriesDataSheetContainer>
        {countries.map(country=>(
          <div key={country.name.common}>
            <CountriesDataSheet
        flag={country.flags}
        name={country.name.common}
        population={country.population}
        region={country.region}
        capital={country.capital?.[0]}
      />
      </div>
        ))}
      </StyledCountriesDataSheetContainer>
    </StyledMainContainer>
  );
};
export default Home;

const getCountries = async setCountries => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const countries = await response.json();
    setCountries(countries);
    console.log(countries);
  } catch (error) {
    console.error("Country not found");
  }
};

