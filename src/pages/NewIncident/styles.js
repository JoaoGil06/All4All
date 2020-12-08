import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;

  h1 {
    font-size: 24px;
    color: #565656;
    margin: 16px 0 8px;
  }

  p {
    font-size: 18px;
    color: #737380;
    line-height: 24px;
    margin-bottom: 32px;
  }

  a {
    display: flex;
    align-items: center;
    margin-top: 16px;
    color: #41414d;
    font-size: 16px;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.2s;

    & > svg {
      margin-right: 8px;
    }

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;

  input,
  textarea {
    margin-top: 8px;
  }
`;

export const LogoAll4All = styled.img`
  margin-top: -32px;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: #0b99f8;
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(90%);
  }
`;
