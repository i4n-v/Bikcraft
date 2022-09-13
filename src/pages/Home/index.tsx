import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { LinkButton } from "../../components/Buttons";
import IntroductionImage from "../../assets/img/photos/introduction.jpg";
import { LargeText, MediumText, Dot } from "../../components/Typographies";

const Introduction = styled.main`
  background-color: var(--c12);
  color: var(--w);
  box-shadow: inset 0 -120px var(--w);

  @media (max-width: 800px) {
    background: var(--c11);
    padding-top: 40px;
    box-shadow: inset 0 -60px var(--w);

  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 40px;
  max-width: 1200px;
  padding: 0px 20px;
  margin: 0px auto;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Content = styled.div`
  align-self: end;
  padding-bottom: 200px;

  @media (max-width: 800px) {
    padding-bottom: 0px;
  }
`;

const Title = styled(LargeText)`
  margin-bottom: 32px;

  @media (max-width: 800px) {
    margin-bottom: 16px;
  }
`;

const Description = styled(MediumText)`
  margin-bottom: 20px;
  color: var(--c05);
`;

const Image = styled.img`
  height: 100%;
  object-fit: cover;

  @media (max-width: 800px) {
    height: 300px;
    width: 100%;
  }
`;

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Bikcraft - Bicicletas Elétricas</title>
      </Helmet>

      <Introduction>
        <Container>
          <Content>
            <Title>
              Bicicletas feitas sob medida<Dot>.</Dot>
            </Title>
            <Description>
              Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na
              sua velocidade com a Bikcraft.
            </Description>
            <LinkButton to="/bicicletas">Escolha a sua</LinkButton>
          </Content>
          <div>
            <Image src={IntroductionImage} alt="Bicicleta elétrica preta." />
          </div>
        </Container>
      </Introduction>
    </>
  );
};

export default Home;
