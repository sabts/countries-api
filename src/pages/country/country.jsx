import { Link, useLocation} from "react-router-dom";

const Country = ({}) => {
const {state} = useLocation()
const country = state.country;
//console.log(country)
  
  return <>
  <Link to="/">
  <button>Back</button>
  </Link>
  <img src={country.flags.png} alt={country.flags.alt}/>
  <section>
  <h2>{country.name.common}</h2>
  <div>
    <h6>Native Name:</h6>
    <p>{country.name.nativeName?.ara?.official}</p>
  </div>
  <div>
    <h6>Population:</h6>
    <p>{country.population}</p>
  </div>
  <div>
    <h6>Region:</h6>
    <p>{country.region}</p>
  </div>
  <div>
    <h6>Sub Region:</h6>
    <p>{country.subRegion}</p>
  </div>
  <div>
    <h6>Capital:</h6>
    <p>{country.capital}</p>
  </div>
  </section>
  <section>
  <div>
    <h6>Top Level Domain:</h6>
    <p>{country.car.cca2}</p>
  </div>
  <div>
    <h6>Top Level Domain:</h6>
    <p>{country.currencies.name}</p>
  </div>
  <div>
    <h6>Languages:</h6>
    <p>{country.languages[0]}</p>
  </div>
  </section>
  <section>
    <h6>Border Countries</h6>
    {country?.borders?.map(borderCode => (
  <button key={borderCode}>{borderCode}</button>

    ))}
  </section>
  </>
};
export default Country;