import styled from "styled-components";

export const Container = styled.footer`
  height: 5em;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 3.5em;
  margin-right: auto;
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
