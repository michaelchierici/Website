import styled, { keyframes, css, ThemeContext } from "styled-components";

interface Props {
  open: boolean;
}

function openMenu(degree: number) {
  const open = keyframes`
 0% {
  width: 0;
  opacity: 0;

    }
    25% {
      width: ${degree}px;

    }
    50% {
      width: ${degree}px;

    }
    75% {
      width: ${degree}px;

    }  
`;
  return open;
}

export const Container = styled.nav<Props>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;

  height: 100%;
  border-radius: 8px;

  background-color: ${({ open, theme }) =>
    open && theme.colors.menu_background};
  overflow: hidden;

  width: ${({ open }) => open && "150px"};
  animation: ${({ open }) =>
    open
      ? css`
          ${openMenu(150)} 1s
        `
      : css`
          ${openMenu(-100)} 1s
        `};
  transition: all 0.8s;
`;
