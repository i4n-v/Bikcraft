import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LinkButton } from "../../components/Buttons";
import IntroductionImage from "../../assets/img/photos/introduction.jpg";

const Introduction = styled.main`
  background-color: #000000;
  color: #FFFFFF;
  box-shadow: inset 0 -120px;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px;
  max-width: 1200px;
  padding: 0px 20px;
  margin: 0px auto;
`;

const Content = styled.div`
  align-self: end;
  padding-bottom: 200px;
`;

const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 64px;
  line-height: 1.125;
`;

const Description = styled.p`
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 1.5;
  color: #B2B2B2;
`;

const Dot = styled.span`
  color: #FFBB00;
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;
`;

const Home = () => {
  return (
    <Introduction>
      <Helmet>
        <title>Bikcraft - Bicicletas Eléticas</title>
      </Helmet>

      <Container>
        <Content>
          <Title>
            Bicicletas feitas sob medida<Dot>.</Dot>
          </Title>
          <Description>
            Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na sua
            velocidade com a Bikcraft.
          </Description>
          <LinkButton to="/bicicletas">Escolha a sua</LinkButton>
        </Content>
        <div>
          <Image src={IntroductionImage} alt="Bicicleta elétrica preta." />
        </div>
      </Container>
    </Introduction>
  );
};

export default Home;
