import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    color: #0b99f8;
  }

  h2 {
    color: #565656;
  }

  hr {
    height: 1px;
    background: #0b99f8;
    border: none;
    margin: 24px 0;
  }
`;

export const CasesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  margin-top: 80px;

  & > li {
    width: 50%;
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > div {
    display: flex;

    & > button:not(:first-child) {
      margin-left: 16px;
    }
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 40px;
  background: #0b99f8;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  text-decoration: none;
  font-size: 16px;
  line-height: 60px;
  transition: filter 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(90%);
  }
`;
