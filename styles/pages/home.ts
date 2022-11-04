import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 90vh;
  padding: 20px 0;
  position: relative;
`;

export const Menu = styled.nav`
  width: 100%;
  height: 2rem;
  background-color: gold;
`;

export const Container = styled.main`
  width: 70%;
  height: 70%;
  background-color: gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const CardTitle = styled.div`
  background-color: royalBlue;
  width: 52%;
  height: 13rem;
  border-radius: 8px;
  margin-right: auto;
  position: relative;
  z-index: 10;
  background: linear-gradient(
    to right,
    rgba(71, 115, 167),
    rgba(22, 219, 101),
    rgba(149, 239, 185)
  );
  padding: 3px;
`;

export const Title = styled.h1`
  padding: 2rem;
  color: white;
`;

export const Circle = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 20rem;
  background-color: palevioletred;
  z-index: 0;
  position: absolute;
  bottom: 0;
  top: 18%;
  left: 40%;
`;

export const Button = styled.button`
  width: 105px;
  height: 30px;
  border-radius: 8.5px;
  background-color: #16db65;
  border: none;
  z-index: 20;
  margin-right: auto;
  margin-top: 100px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5rem;
  background-color: violet;
  margin-top: auto;
`;
