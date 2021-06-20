import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items: center;
  box-shadow: 0 0.2rem 0.35rem 0 #555;
  padding: 1rem 0.6rem;
  border-radius: 0.25rem;
  width: 24rem;
  background-color: white;
`;

export const AppLabel = styled.span`
  color: black;
  font-size: 1rem;
  font-weight: bold;
`;

export const CityContainer = styled.div`
  flex-direction: column;
  display: flex;
  font-size: inherit;
`;

export const WeatherContainer = styled.div`
  flex-direction: column;
  display: flex;
  font-size: inherit;
`;
