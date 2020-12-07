import React from "react";
import { FiLogIn } from "react-icons/fi";

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
          <input type="text" placeholder="Inserir o e-mail" />
          <Button type="submit">Entrar</Button>

          <a href="">
            <FiLogIn size={16} color="#0B99F8" />
            Não tenho registo
          </a>
        </form>
      </FormSection>

      <AllForAllImg src={allImg} alt="All for All" />
    </Container>
  );
};

export default Login;
