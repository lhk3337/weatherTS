import styled from "styled-components";

export const WeatherLogo = styled.img`
  width: 9rem;
  height: 9rem;
  margin: 2.5em auto;
`;
export const ChooseCityLabel = styled.span`
  color: black;
  font-size: 1em;
  font-weight: bold;
  margin: 0.6em auto;
`;
export const SearchBox = styled.form`
  display: flex;
  flex-direction: row;
  border: black solid 0.06em;
  border-radius: 0.12em;
  color: black;
  font-size: 1em;
  margin: 1.25em auto;
  & input {
    padding: 0.62em;
    font-size: 1em;
    font-weight: bold;
    border: none;
    outline: none;
  }
  & button {
    padding: 0.62em;
    font-size: 1em;
    color: white;
    background-color: black;
    font-weight: bold;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;
