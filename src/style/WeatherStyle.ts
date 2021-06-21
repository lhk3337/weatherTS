import styled from "styled-components";

export const WeatherCondition = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 1.875em auto;
`;

export const Condition = styled.span`
  margin: 1.25em auto;
  font-size: 0.8em;
  font-weight: bold;

  color: #bdc3c7;
  & span {
    color: black;
    font-size: 2em;
    margin-right: 0.7em;
  }
`;
export const WeatherLogo = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  margin: 0.31em auto;
`;

export const Location = styled.span`
  font-size: 2em;
  font-weight: bold;
`;
export const WeatherInfoLabel = styled.span`
  font-size: 0.9em;
  font-weight: bold;
  margin: 1.25em 1.56em 0.62em;
  width: 90%;
`;

export const WeatherInfoContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;

export const InfoContainer = styled.div`
  display: flex;
  margin: 0.31em 0.62em;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const InfoIcon = styled.img`
  width: 2em;
  height: 2em;
`;
export const InfoLabel = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
  margin: 1em;
  & span {
    margin-top: 0.4em;
    font-size: 0.8em;
    /* text-transform: capitalize; */
  }
`;
