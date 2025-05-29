import { Link} from "react-router-dom";

const Country = ({countries}) => {

  return <>
  <Link to="/">
  <button>Back</button>
  </Link>
  <img src={countries.flags.png} alt={countries.flags.alt}/>
  <section>
  <h2>{countries.name.common}</h2>
  <div>
    <h6>Native Name:</h6>
    <p>{countries.name.nativeName.ara.official}</p>
  </div>
  <div>
    <h6>Population:</h6>
    <p>{countries.population}</p>
  </div>
  <div>
    <h6>Region:</h6>
    <p>{countries.region}</p>
  </div>
  <div>
    <h6>Sub Region:</h6>
    <p>{countries.subRegion}</p>
  </div>
  <div>
    <h6>Capital:</h6>
    <p>{countries.capital}</p>
  </div>
  </section>
  <section>
  <div>
    <h6>Top Level Domain:</h6>
    <p>{countries.car.cca2}</p>
  </div>
  <div>
    <h6>Top Level Domain:</h6>
    <p>{countries.currencies.name}</p>
  </div>
  <div>
    <h6>Languages:</h6>
    <p>{countries.languages}</p>
  </div>
  </section>
  <Selection>
    <h6>Border Countries</h6>
    {countries.borders.map(country => (
      <button>{country.name.common}</button>

    ))}
  </Selection>
  </>
};
export default Country;
