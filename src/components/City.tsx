import React from "react";
import { WeatherLogo, ChooseCityLabel, SearchBox } from "../style/CityStyle";
interface updateCityProps {
  updateCity: any;
  fetchWeather: any;
}
const City = (props: updateCityProps) => {
  const { updateCity, fetchWeather } = props;
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input
          placeholder="City"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateCity(e.target.value)
          }
        />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  );
};

export default City;
