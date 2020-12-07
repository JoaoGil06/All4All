import styled from "styled-components";
import { FiTrash2 } from "react-icons/fi";

export const Container = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;

  & > strong {
    display: block;
    margin-bottom: 8px;
    color: #41414d;
  }

  & > p + strong {
    margin-top: 16px;
  }

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
