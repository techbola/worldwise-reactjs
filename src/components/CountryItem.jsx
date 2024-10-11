import PropTypes from "prop-types";
import styles from "./CountryItem.module.css";

function CountryItem({ country, emoji }) {
  return (
    <li className={styles.countryItem}>
      <span>{emoji}</span>
      <span>{country}</span>
    </li>
  );
}

CountryItem.propTypes = {
  country: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
};

export default CountryItem;
