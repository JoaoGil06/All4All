import React from "react";
import { FiPower } from "react-icons/fi";

import { Link } from "react-router-dom";

import {
  Container,
  Header,
  LogoAll4All,
  LogoutButton,
  CasesList,
  Contacts,
  Button,
} from "./styles";

import Card from "../../components/Card";

import logo from "../../assets/Logo.svg";

const Incident = () => {
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
