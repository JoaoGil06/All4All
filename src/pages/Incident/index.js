import React from "react";
import { FiPower } from "react-icons/fi";

import { Link } from "react-router-dom";

import { Container, CasesList, Contacts, Button } from "./styles";

import Card from "../../components/Card";
import Header from "../../components/Header";

const Incident = () => {
  return (
    <Container>
      <Header />
      <CasesList>
        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
        />
      </CasesList>

      <hr />
      <Contacts>
        <h1>Queres ajudar a resolver este problema?</h1>
        <h2>Contamos contigo!</h2>
        <div>
          <Button>Telemóvel</Button>
          <Button>E-mail</Button>
        </div>
      </Contacts>
    </Container>
  );
};

export default Incident;
