import React from "react";

import { useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";

import { Container, CasesList } from "./styles";

import Card from "../../components/Card";
import Header from "../../components/Header";

const Profile = () => {
  const { user } = useAuth();
  const history = useHistory();

  if (!user) {
    history.push("/login");
  }
  return (
    <Container>
      <Header />

      <h1>Casos</h1>
      <hr />
      <CasesList>
        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="1"
          trash={true}
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="2"
          trash={true}
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="3"
          trash={true}
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
          id="1"
          trash={true}
        />
      </CasesList>
    </Container>
  );
};

export default Profile;
