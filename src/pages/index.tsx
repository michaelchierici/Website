import Head from "next/head";
import {
  CardTitle,
  Container,
  Content,
  Main,
  Title,
} from "../styles/pages/home";

import Menu from "../components/Menu";
import Button from "../components/Button";
import Footer from "../components/Footer";
import Photo from "../components/Photo";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Container>
          <Content>
            <CardTitle>
              <Title type="name">MICHAEL CHIERICI,</Title>
              <Title type="dev">DESENVOLVEDOR</Title>
              <Title type="front">FRONT-END</Title>
            </CardTitle>
            <Button title="Resumo" />
            <Footer iconSize={45} />
          </Content>
          <Photo active />
          <Menu menuSize={50} />
        </Container>
      </Main>
    </>
  );
}
