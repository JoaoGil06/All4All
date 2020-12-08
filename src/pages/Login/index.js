import React, { useState } from "react";
import { FiLogIn } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";

import {
  Container,
  LogoAll4All,
  AllForAllImg,
  FormSection,
  Button,
} from "./styles";

import allImg from "../../assets/all.svg";
import logo from "../../assets/Logo.svg";
import { auth } from "../../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSignIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container>
      <FormSection>
        <LogoAll4All src={logo} alt="All 4 All" />
        <form>
          <h1>Faz o teu login</h1>
          <input
            type="email"
            placeholder="Inserir o e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Inserir password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" onClick={handleSignIn}>
            Entrar
          </Button>

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
