import styled from "styled-components";

export const Container = styled.header`
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
