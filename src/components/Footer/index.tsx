import React from "react";
import Image from "next/image";
import { contactIcons } from "../../constants/icons";
import { Container, Icon } from "../../styles/components/footer";

interface Props {
  iconSize: number;
}

export default function Footer({ iconSize }: Props) {
  return (
    <Container>
      {contactIcons.map((item, index) => (
        <Icon key={index}>
          <a href={String(item.link)} target="_blank" rel="noreferrer">
            <Image
              alt={item.name}
              src={item.icon}
              width={iconSize}
              height={iconSize}
            />
          </a>
        </Icon>
      ))}
    </Container>
  );
}
