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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div {
    display: flex;
    align-items: center;
  }

  & > div > span {
    font-size: 16px;
    margin-left: 16px;
  }

  & > div > .button {
    width: 200px;
    height: 50px;
    background: #0b99f8;
    border: 0;
    border-radius: 8px;
    color: #fff;
    font-weight: 700;
    margin-top: 0;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    transition: filter 0.2s;
    margin-left: 16px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const LogoAll4All = styled.img`
  height: 80px;
`;

export const LogoutButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
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
