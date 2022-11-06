import Image from "next/image";
import React from "react";
import { Container } from "../../styles/components/menu";

import menu from "../../assets/menu.svg";
import arrow from "../../assets/arrow.svg";

interface Props {
  menuSize?: number;
  arrowSize?: number;
}

export default function Button({ menuSize, arrowSize }: Props) {
  return (
    <Container>
      <Image
        alt="menu de opções de idioma"
        src={menu}
        width={menuSize}
        height={menuSize}
      />
      <Image
        alt="seta para alterar o conteúdo da página"
        src={arrow}
        width={arrowSize}
        height={arrowSize}
      />
    </Container>
  );
}
