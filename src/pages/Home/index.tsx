import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { BikeCard, InformationCard } from "../../components/Cards";
import { LinkButton, UnderlineButton } from "../../components/Buttons";
import { NavLink } from "react-router-dom";
import introductionImage from "../../assets/img/photos/introduction.jpg";
import tecnologiesImage from "../../assets/img/photos/tecnologies.jpg";
import testimonialImage from "../../assets/img/photos/testimonial.jpg";
import magicHomeImage from "../../assets/img/bikes/magic-home.jpg";
import nimbusHomeImage from "../../assets/img/bikes/nimbus-home.jpg";
import nebulaHomeImage from "../../assets/img/bikes/nebula-home.jpg";
import { ReactComponent as Eletrical } from "../../assets/svg/icons/eletrical.svg";
import { ReactComponent as Searcher } from "../../assets/svg/icons/searcher.svg";
import { ReactComponent as Caravan } from "../../assets/svg/partners/caravan.svg";
import { ReactComponent as Dogs } from "../../assets/svg/partners/dogs.svg";
import { ReactComponent as Flexblog } from "../../assets/svg/partners/flexblog.svg";
import { ReactComponent as Handel } from "../../assets/svg/partners/handel.svg";
import { ReactComponent as Lescone } from "../../assets/svg/partners/lescone.svg";
import { ReactComponent as Ranek } from "../../assets/svg/partners/ranek.svg";
import { ReactComponent as Surfbot } from "../../assets/svg/partners/surfbot.svg";
import { ReactComponent as Wildbeast } from "../../assets/svg/partners/wildbeast.svg";

const Introduction = styled.main`
  background-color: var(--c12);
  color: var(--w);
  box-shadow: inset 0 -120px var(--w);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 40px;
  }

  > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 800px) {
    background: var(--c11);
    padding-top: 40px;
    box-shadow: inset 0 -60px var(--w);

    > div {
      grid-template-columns: 1fr;
      gap: 32px;
    }

    > div img {
      height: 300px;
      width: 100%;
    }
  }
`;

const IntroductionContent = styled.div`
  align-self: end;
  padding-bottom: 200px;

  @media (max-width: 800px) {
    padding-bottom: 0px;
  }
`;

const Title = styled.h1`
  margin-bottom: 32px;

  @media (max-width: 800px) {
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  margin-bottom: 20px;
  color: var(--c05);
`;

const BikeList = styled.article`
  padding: 60px 0px 120px 0px;

  > h2 {
    margin: 0px auto 40px auto; 
  }

  > ul {
    display: flex;
    gap: 40px;
    padding: 0px 20px 20px 20px;
    max-width: 1400px;
    margin: 0 auto;
    overflow-x: auto;
  }

  > ul > li {
    flex: 1;
    min-width: 280px;
  }

  > a {
    display: block;
  }

  @media (max-width: 800px) {
    padding: 60px 0px 60px 0px;

    > ul {
      gap: 20px;

    }
  }
`;

const Tecnology = styled.article`
  background: var(--c11);
  box-shadow: inset 0 80px var(--w), inset 0 -80px var(--w);

  > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  > div img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position : left;
  }

  @media (max-width: 800px) {
    box-shadow: initial;

    > div {
      grid-template-columns: 1fr;      
    }

    > div img {
      display: none;
    }
  }
`;

const TecnologyContent = styled.div`
  padding: 160px 0px;

  > h2 {
    color: var(--w);
    margin-bottom: 32px;
  }

  > span, & > p {
    color: var(--c05);
  }

  > span {
    display: block;
    margin-bottom: 20px;
  }

  > p {
    margin-bottom: 20px;
  }

  > a {
    margin-bottom: 80px;
  }

  > div {
    display: flex;
    gap: 40px;    
  }

  @media (max-width: 800px) {
    padding: 60px 0px;

    > a {
      margin-bottom: 60px;
    }
  }

  @media (max-width: 600px) {
    > div {
      flex-direction: column;
    }
  }
`;

const Partners = styled.section`
  padding: 60px 0px 120px 0px;

  > h2 {
    margin-bottom: 60px;
  }

  > ul {
    max-width: 1400px;
    padding: 0px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  > ul > li {
    display: flex;
    padding: 32px;
    border-left: 2px solid var(--c02);
  }

  > ul > li:first-child, > ul > li:nth-child(5) {
    border-left: none;
  }

  > ul > li:nth-child(n + 5) {
    border-top: 2px solid var(--c02);
  }

  > ul > li > svg {
    margin: auto;
  }

  @media (max-width: 1100px) {
    padding-bottom: 60px;

    > h2 {
      margin-bottom: 20px;
    }

    > ul {
      grid-template-columns: repeat(2, 1fr);
    }

    > ul > li {
      padding: 20px;
    }

    > ul > li:nth-child(n + 3) {
      border-top: 2px solid var(--c02);
    }

    > ul > li:nth-child(odd) {
      border-left: none;
    }
  }
`;

const Testimony = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--p01);
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;   

    img {
      max-height: 200px;
    }
  }
`;

const TestimonyContent = styled.div`
  padding: 40px 40px 80px 80px;
  align-self: end;
  
  > blockquote {
    color: var(--p05)
  }
  
  > blockquote > p {
    font-family: Merriweather, sans-serif;
    font-style: italic;
    font-weight: 900;
    margin-bottom: 32px;
    max-width: 32ch;
    position: relative;
  }
  
  > blockquote > p:before,
  > blockquote > p:after {
    font-size: 5rem;
    color: var(--p02);
    position: absolute;
  }

  > blockquote > p:before {
    content: "“";    
    left: -50px;
    top: -20px;
  }

  > blockquote > p:after {
    content: "”";
  }

  > span {
    color: var(--p04);
  }

  @media (max-width: 800px) {
    text-align: center;
    padding: 40px 20px;
    justify-self: center;
  }
`;

const Home = () => {
  const partners = [Caravan, Ranek, Handel, Dogs, Lescone, Flexblog, Wildbeast, Surfbot];

  return (
    <>
      <Helmet>
        <title>Bikcraft - Bicicletas Elétricas</title>
      </Helmet>

      <Introduction>
        <div className="container">
          <IntroductionContent>
            <Title className="poppins-xxl">
              Bicicletas feitas sob medida<span className="dot">.</span>
            </Title>
            <Description className="roboto-l">
              Bicicletas elétricas de alta precisão e qualidade, feitas sob medida para o cliente. Explore o mundo na
              sua velocidade com a Bikcraft.
            </Description>
            <LinkButton to="/bicicletas">Escolha a sua</LinkButton>
          </IntroductionContent>
          <div>
            <img src={introductionImage} alt="Bicicleta elétrica preta." />
          </div>
        </div>
      </Introduction>

      <BikeList>
        <h2 className="poppins-xxl container">
          escolha a sua<span className="dot">.</span>
        </h2>

        <ul>
          <li>
            <NavLink to="/bicicletas/magic_might">
              <BikeCard title="Magic Might" price={2499} image={{ src: magicHomeImage, alt: "Bicicleta preta" }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bicicletas/nimbus_stark">
              <BikeCard title="Nimbus Stark" price={4999} image={{ src: nimbusHomeImage, alt: "Bicicleta preta" }} />
            </NavLink>
          </li>
          <li>
            <NavLink to="/bicicletas/nebula_cosmic">
              <BikeCard title="Nebula Cosmic" price={3999} image={{ src: nebulaHomeImage, alt: "Bicicleta preta" }} />
            </NavLink>
          </li>
        </ul>
      </BikeList>

      <Tecnology>
        <div className="container">
          <TecnologyContent>
            <span className="roboto-l-b">Tecnologia avançada</span>
            <h2 className="poppins-xxl">
              você escolhe as suas cores e componentes<span className="dot">.</span>
            </h2>
            <p className="roboto-l">
              Cada Bikcraft é única e possui a sua identidade. As medidas serão exatas para o seu corpo e altura,
              garantindo maior conforto e ergonomia na sua pedalada. Você pode também personalizar completamente as suas
              cores.
            </p>
            <UnderlineButton to="/bicicletas">ESCOLHA UM MODELO</UnderlineButton>
            <div>
              <InformationCard
                icon={<Eletrical />}
                title="Motor Elétrico"
                description="Toda Bikcraft é equipada com um motor elétrico que possui duração de até 120h. A bateria é recarregada com a sua energia gasta ao pedalar."
              />
              <InformationCard
                icon={<Searcher />}
                title="Rastreador"
                description="Sabemos o quão preciosa é a sua Bikcraft, por isso adicionamos rastreadores e sistemas anti-furto para garantir o seu sossego."
              />
            </div>
          </TecnologyContent>
          <div>
            <img src={tecnologiesImage} alt="tecnologias" />
          </div>
        </div>
      </Tecnology>

      <Partners aria-label="Nossos parceiros">
        <h2 className="poppins-xxl container">
          nossos parceiros<span className="dot">.</span>
        </h2>

        <ul>
          {partners.map((Icon, index) => (
            <li key={`partner-${index}`}>
              <Icon />
            </li>
          ))}
        </ul>
      </Partners>

      <Testimony aria-label="Depoimento">
        <div>
          <img src={testimonialImage} alt="Pessoa pedalando uma bicicleta Bikcraft" />
        </div>
        <TestimonyContent>
          <blockquote className="poppins-xl">
            <p>
              Pedalar sempre foi a minha paixão, o que o pessoal da Bikcraft fez foi intensificar o meu amor por esta
              atividade. Recomendo à todos que amo.
            </p>
          </blockquote>
          <span className="poppins-m-b">Ana Júlia</span>
        </TestimonyContent>
      </Testimony>
    </>
  );
};

export default Home;
