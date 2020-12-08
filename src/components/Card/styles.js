import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const Container = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
  transition: box-shadow ease 0.5s;

  &:hover {
    box-shadow: 5px 5px 10px #01395f;
  }

  & > a {
    text-decoration: none;
    cursor: pointer;
  }

  & > a > strong,
  & > strong {
    display: block;
    margin-bottom: 8px;
    color: #41414d;
  }

  & > a > p + strong,
  & > p + strong {
    margin-top: 16px;
  }

  & > a > p,
  & > p {
    color: #737380;
    line-height: 21px;
    font-size: 16px;
  }
`;

export const TrashButton = styled(FiTrash2)`
  width: 20px;
  color: #a8a8b3;
  position: absolute;
  right: 24px;
  top: 24px;
  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(90%);
  }
`;
