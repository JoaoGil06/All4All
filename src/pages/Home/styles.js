import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 56px;
    margin-bottom: 8px;
    color: #0b99f8;
  }

  hr {
    height: 1px;
    background: #0b99f8;
    border: none;
    margin-bottom: 24px;
  }
`;

export const CasesList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;
