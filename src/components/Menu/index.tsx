import Image from "next/image";
import React, { useState } from "react";
import { Container } from "../../styles/components/menu";

import menu from "../../assets/menu.svg";

interface Props {
  menuSize?: number;
}

export default function Button({ menuSize }: Props) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function handleOpen() {
    setOpenMenu((prevState) => !prevState);
  }

  return (
    <Container open={openMenu}>
      <Image
        alt="menu de opções de idioma"
        src={menu}
        width={menuSize}
        height={menuSize}
        onClick={handleOpen}
      />
    </Container>
  );
}
