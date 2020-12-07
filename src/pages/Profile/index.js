import React from "react";
import { FiPower } from "react-icons/fi";

import { Link } from "react-router-dom";

import {
  Container,
  Header,
  LogoAll4All,
  LogoutButton,
  CasesList,
} from "./styles";

import Card from "../../components/Card";

import logo from "../../assets/Logo.svg";

const Profile = () => {
  return (
    <Container>
      <Header>
        <LogoAll4All src={logo} alt="All 4 All" />
        <span>Bem-vinda, IPSS</span>
        <Link className="button" to="/incidents/new">
          Registar novo caso
        </Link>
        <LogoutButton type="button">
          <FiPower size={18} color="#E02041" />
        </LogoutButton>
      </Header>

      <h1>Casos registados</h1>
      <CasesList>
        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
        />

        <Card
          caseName="Caso teste"
          description="Descrição teste"
          value="120,00 "
        />
      </CasesList>
    </Container>
  );
};

export default Profile;
