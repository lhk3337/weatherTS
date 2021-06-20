import React from "react";
import { WeatherLogo, ChooseCityLabel, SearchBox } from "../style/CityStyle";
const City = () => {
  return (
    <>
      <WeatherLogo src="/icons/perfect-day.svg" />
      <ChooseCityLabel>Find Weather of your city</ChooseCityLabel>
      <SearchBox>
        <input placeholder="City" />
        <button>Search</button>
      </SearchBox>
    </>
  );
};

export default City;
