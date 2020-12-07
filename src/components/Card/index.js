import React from "react";

import { Container, TrashButton } from "./styles";

const Card = ({ caseName, description, value }) => {
  return (
    <Container>
      <strong>Caso:</strong>
      <p>{caseName}</p>

      <strong>Descrição:</strong>
      <p>{description}</p>

      <strong>Valor:</strong>
      <p>{value}€</p>

      <TrashButton />
    </Container>
  );
};

export default Card;
