import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { REGIONS } from "../../constants/region";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    getCountries(setCountries);
  }, []);
  return (
    <>
      <Header />
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
          <option value="default">all</option>
          {REGIONS.map(region => (
            <option value={region} key={region}>
              {region}
            </option>
          ))}
        </select>
      </form>
    </>
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
