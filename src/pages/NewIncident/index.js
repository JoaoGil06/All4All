import React, { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/auth";

import { db } from "../../firebase";

import {
  Container,
  Content,
  LogoAll4All,
  Section,
  Form,
  Button,
} from "./styles";

import logo from "../../assets/Logo.svg";

const NewIncident = () => {
  const { user } = useAuth();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [valueIncident, setValueIncident] = useState("");

  if (!user) {
    history.push("/login");
  }

  const handleRegisterIncident = (e) => {
    e.preventDefault();

    db.collection("incidents").doc(user.uid).set({
      title: title,
      description: description,
      value: valueIncident,
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

          <Link to="/profile">
            <FiArrowLeft size={16} color="#0B99F8" />
            Voltar para profile
          </Link>
        </Section>

        <Form>
          <input
            type="text"
            placeholder="Titulo do caso"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            placeholder="Valor em €uros"
            onChange={(e) => setValueIncident(e.target.value)}
          />

          <Button type="submit" onClick={handleRegisterIncident}>
            Registar
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default NewIncident;
