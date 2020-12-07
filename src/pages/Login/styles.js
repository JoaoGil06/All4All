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

export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;

  form {
    margin-top: 20px;

    h1 {
      font-size: 24px;
      margin-bottom: 16px;
      color: #565656;
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
  }
`;

export const LogoAll4All = styled.img``;

export const AllForAllImg = styled.img`
  width: 35rem;
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
