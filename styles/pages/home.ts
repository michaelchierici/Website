import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  padding: 25px 0;
  position: relative;
`;

export const Menu = styled.nav`
  width: 99%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.main`
  width: 90%;
  height: 40em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
  margin: auto;
`;

export const CardTitle = styled.div`
  width: 40%;
  height: 15rem;
  border-radius: 8px;
  position: relative;
  z-index: 10;
  margin-bottom: auto;
  margin-left: 50px;
  border: 1px solid;
`;

export const Title = styled.h1`
  width: 332.39px;

  font-family: "Lato";
  font-style: normal;
  font-weight: 400;
  font-size: 28px;
  line-height: 34px;

  background: linear-gradient(109.87deg, #16db65 31.49%, #1462bc 53.35%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  margin-left: 10px;
`;

export const Circle = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 20rem;
  background-color: palevioletred;
  z-index: 0;
  position: relative;
  margin-right: auto;
  right: 5%;
`;

export const Button = styled.button`
  width: 105px;
  height: 30px;
  border-radius: 8.5px;
  border: none;
  background-color: ${({ theme }) => theme.colors.button};

  z-index: 20;
  margin-right: auto;
  margin-top: 200px;
`;

export const Footer = styled.footer`
  width: 100%;
  height: 5em;
  margin-top: auto;
`;
