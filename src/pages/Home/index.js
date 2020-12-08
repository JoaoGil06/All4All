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

const Home = () => {
  return (
    <Container>
      <Header>
        <div>
          <Link to="/">
            <LogoAll4All src={logo} alt="All 4 All" />
          </Link>
          <span>Bem-vinda, IPSS</span>
        </div>
        <div>
          <Link className="button" to="/profile">
            Perfil
          </Link>
          <Link className="button" to="/incidents/new">
            Registar novo caso
          </Link>
          <LogoutButton type="button">
            <FiPower size={18} color="#E02041" />
          </LogoutButton>
        </div>
      </Header>

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
