import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import City from "./components/City";
import Weather from "./components/Weather";

import { Container, AppLabel } from "./style/AppStyle";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <AppLabel>React Weather Web</AppLabel>
      <City />
      <Weather />
    </Container>
  );
}

export default App;
