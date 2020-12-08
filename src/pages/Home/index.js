import React from "react";

import { Container, CasesList } from "./styles";

import Card from "../../components/Card";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Container>
      <Header />
      <h1>Todos os casos</h1>
      <hr />
      <CasesList>
        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="1"
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="2"
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="3"
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="4"
        />
      </CasesList>
    </Container>
  );
};

export default Home;
