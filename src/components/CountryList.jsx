import PropTypes from "prop-types";

import Spinner from "./Spinner";
import styles from "./CountryList.module.css";
import Message from "./Message";
import CountryItem from "./CountryItem";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) {
    return <Spinner />;
  }

  if (cities.length === 0) {
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  }

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((country) => country.country).includes(city.country)) {
      return [...acc, { country: city.country, emoji: city.emoji }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map(({ country, emoji }, index) => (
        <CountryItem country={country} emoji={emoji} key={index} />
      ))}
    </ul>
  );
}

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
