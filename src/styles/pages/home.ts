import styled from "styled-components";

interface TitleProps {
  type: "name" | "dev" | "front";
}

export const Main = styled.div`
  height: 100vh;

  position: relative;

  display: flex;
  flex-direction: column;

  padding: 25px 0;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  margin-bottom: auto;

  height: 56%;
  padding-right: 16px;
`;

export const Container = styled.main`
  width: 100%;
  height: 60em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const CardTitle = styled.div`
  width: 40%;
  height: 15rem;

  position: relative;
  z-index: 10;

  margin-top: 100px;
  margin-left: 50px;
  margin-bottom: auto;

  background: linear-gradient(
    103.59deg,
    rgba(255, 255, 255, 0.01) 15.34%,
    rgba(255, 255, 255, 0.04) 79.99%
  );
  backdrop-filter: blur(20px);
  filter: drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.2));

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 8px;
    padding: 2px;
    background: ${({ theme }) => `linear-gradient(${theme.colors.gradient})`};
    -webkit-mask: linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
  }
`;

export const Title = styled.h1<TitleProps>`
  font-weight: ${({ theme, type }) =>
    type === "name" ? theme.font.weight.regular : theme.font.weight.light};

  font-weight: ${({ theme, type }) =>
    type === "dev" && theme.font.weight.extra_light};

  font-size: ${({ theme }) => theme.font.size.xxl}px;

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.text_gradient})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  margin-top: 15px;
  margin-left: 10px;
`;

export const Circle = styled.div`
  width: 25rem;
  height: 25rem;
  border-radius: 20rem;

  position: relative;
  z-index: 0;
  right: 5%;

  margin-right: auto;

  background-color: rosybrown;
`;

export const Button = styled.button`
  width: 9rem;
  height: 2.5rem;

  font-size: ${({ theme }) => theme.font.size.md}px;
  font-weight: ${({ theme }) => theme.font.weight.light};

  border-radius: 12px;
  border: none;

  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text_primary};

  margin-top: 30px;
  padding: 5px 22.5px;
  cursor: pointer;
`;

export const Footer = styled.footer`
  height: 5em;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding-left: 18px;
`;

export const Icon = styled.div`
  padding: 0px 10px;
  transition: transform 450ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
