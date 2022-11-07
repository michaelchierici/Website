import styled from "styled-components";

export const Container = styled.div`
  width: 35rem;
  height: 35rem;
  border-radius: 20rem;
  position: relative;
  z-index: 0;
  right: 9.5%;

  margin-right: auto;

  background-color: rosybrown;
`;

export const Icon = styled.div`
  padding: 0px 10px;
  transition: all 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(0.95);
  }
`;
