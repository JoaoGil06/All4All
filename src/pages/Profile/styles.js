import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;

  h1 {
    margin-top: 56px;
    margin-bottom: 24px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;

  & > span {
    font-size: 16px;
    margin-left: 16px;
  }

  & > .button {
    width: 260px;
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
    margin-left: auto;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;
