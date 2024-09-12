import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";
import Spinner from "./Sidebar";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";

// eslint-disable-next-line
function CountryList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  // eslint-disable-next-line
  if (!cities.length)
    return (
      <Message message="Add tour first city by clicking on a city on your map" />
    );

  // eslint-disable-next-line
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);

  return (
    <ul className={styles.countryList}>
      {/*eslint-disable-next-line  */}
      {countries.map((country) => (
        // eslint-disable-next-line
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountryList;
