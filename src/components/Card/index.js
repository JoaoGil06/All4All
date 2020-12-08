import React from "react";

import { Link } from "react-router-dom";

import { Container, TrashButton } from "./styles";

const Card = ({ id, caseName, description, value, trash }) => {
  if (id) {
    return (
      <Container>
        <Link to="/incidents/incident">
          <strong>Caso:</strong>
          <p>{caseName}</p>

          <strong>Descrição:</strong>
          <p>{description}</p>

          <strong>Valor:</strong>
          <p>{value}€</p>

          {trash ? <TrashButton /> : ""}
        </Link>
      </Container>
    );
  } else {
    return (
      <Container>
        <strong>Caso:</strong>
        <p>{caseName}</p>

        <strong>Descrição:</strong>
        <p>{description}</p>

        <strong>Valor:</strong>
        <p>{value}€</p>

        {trash ? <TrashButton /> : ""}
      </Container>
    );
  }
};

export default Card;
