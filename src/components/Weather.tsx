import React from "react";

import {
  WeatherCondition,
  Condition,
  WeatherLogo,
  Location,
  WeatherInfoLabel,
  WeatherInfoContainer,
  InfoContainer,
  InfoIcon,
  InfoLabel,
} from "../style/WeatherStyle";

interface WetherInfoProps {
  name: string;
  value: string;
}

const WeatherInfoIcons: any = {
  sunset: "/icons/temp.svg",
  sunrise: "/icons/temp.svg",
  humidity: "/icons/humidity.svg",
  wind: "/icons/wind.svg",
  pressure: "/icons/pressure.svg",
};

const WeatherInfoComponent = (props: WetherInfoProps) => {
  const { name, value } = props;
  return (
    <InfoContainer>
      <InfoIcon src={WeatherInfoIcons[name]} />
      <InfoLabel>
        {value}
        <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
      </InfoLabel>
    </InfoContainer>
  );
};

const Weather = () => {
  return (
    <>
      <WeatherCondition>
        <Condition>
          <span>30℃ </span> Cloudy
        </Condition>
        <WeatherLogo src="/icons/perfect-day.svg" />
      </WeatherCondition>
      <Location>London, GB</Location>
      <WeatherInfoLabel>Weather Info</WeatherInfoLabel>
      <WeatherInfoContainer>
        <WeatherInfoComponent name="sunrise" value="19:47" />
        <WeatherInfoComponent name="humidity" value="19:47" />
        <WeatherInfoComponent name="wind" value="19:47" />
        <WeatherInfoComponent name="pressure" value="19:47" />
      </WeatherInfoContainer>
    </>
  );
};

export default Weather;
