import React from "react";
import { FiLogIn } from "react-icons/fi";

import { Link } from "react-router-dom";

import {
  Container,
  LogoAll4All,
  AllForAllImg,
  FormSection,
  Button,
} from "./styles";

import allImg from "../../assets/all.svg";
import logo from "../../assets/Logo.svg";

const Login = () => {
  return (
    <Container>
      <FormSection>
        <LogoAll4All src={logo} alt="All 4 All" />
        <form>
          <h1>Faz o teu login</h1>
          <input type="email" placeholder="Inserir o e-mail" />
          <Button type="submit">Entrar</Button>

          <Link to="/register">
            <FiLogIn size={16} color="#0B99F8" />
            Não tenho registo
          </Link>
        </form>
      </FormSection>

      <AllForAllImg src={allImg} alt="All for All" />
    </Container>
  );
};

export default Login;
