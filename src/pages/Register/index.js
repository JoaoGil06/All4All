import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import { db, auth } from "../../firebase";

import { Link, useHistory } from "react-router-dom";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [city, setCity] = useState("");

  const history = useHistory();

  const handleRegister = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        db.collection("users").doc(cred.user.uid).set({
          name: name,
          contact: contact,
          city: city,
        });

        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <input
            type="text"
            placeholder="Nome da IPSS"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="text"
            placeholder="Contacto"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            placeholder="Cidade"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />

          <Button type="submit" onClick={handleRegister}>
            Registar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Register;
