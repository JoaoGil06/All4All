import React from "react";
import { FiArrowLeft } from "react-icons/fi";

import { Link } from "react-router-dom";

import {
  Container,
  Content,
  LogoAll4All,
  Section,
  Form,
  Button,
} from "./styles";

import logo from "../../assets/Logo.svg";

const Register = () => {
  return (
    <Container>
      <Content>
        <Section>
          <LogoAll4All src={logo} alt="All 4 All" />
          <h1>Faz o teu registo</h1>
          <p>
            Faz o teu registo, entra na plataforma e ajuda pessoas a encontrarem
            casos na tua IPSS.
          </p>

          <Link to="/">
            <FiArrowLeft size={16} color="#0B99F8" />
            Voltar para Login
          </Link>
        </Section>

        <Form>
          <input type="text" placeholder="Nome da IPSS" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Contacto" />
          <input type="text" placeholder="Cidade" />

          <Button type="submit">Entrar</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
