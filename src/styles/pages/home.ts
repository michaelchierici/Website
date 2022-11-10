import styled from "styled-components";

interface TitleProps {
  type: "name" | "dev" | "front";
}

export const Main = styled.div`
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 45%;
  height: 100%;
`;

export const CardTitle = styled.div`
  width: 90%;
  height: 26%;

  position: relative;
  z-index: 10;

  margin-left: auto;
  margin-top: 100px;
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

  font-size: ${({ theme }) => theme.font.size.xxl}px;

  background: ${({ theme }) =>
    `linear-gradient(${theme.colors.text_gradient})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  margin: 15px 0 0 10px;
`;
