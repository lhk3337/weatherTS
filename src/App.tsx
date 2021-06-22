import React, { useState } from "react";
import GlobalStyle from "./style/GlobalStyle";
import City from "./components/City";
import Weather from "./components/Weather";
import axios from "axios";
import { Container, AppLabel } from "./style/AppStyle";

function App() {
  const [city, updateCity] = useState();
  const [weather, setWeather] = useState();

  const API_KEY = process.env.REACT_APP_API_KEY;

  const fetchWeather = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      );
      setWeather(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <GlobalStyle />
      <AppLabel>React Weather Web</AppLabel>
      {weather ? (
        <Weather weather={weather} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
