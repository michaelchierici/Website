import React from "react";
import { Container, Content } from "../../styles/components/button";

interface Props {
  title: string;
  size?: number;
}

export default function Button({ title, size }: Props) {
  return (
    <Container>
      <Content>{title}</Content>
    </Container>
  );
}
