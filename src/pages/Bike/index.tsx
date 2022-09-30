import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import { PageTitle } from "../../components";
import { LinkButton } from "../../components/Buttons";
import { InformationCard } from "../../components/Cards";
import { useNavigate, useParams } from "react-router-dom";
import { IImageElement } from "../../types/interfaces/html";
import nimbusImage from "../../assets/img/bike/nimbus1.jpg";
import magicImage from "../../assets/img/bike/nimbus2.jpg";
import nebulaImage from "../../assets/img/bike/nimbus3.jpg";
import { ReactComponent as Delivere } from "../../assets/svg/icons/delivere.svg";
import { ReactComponent as Inventory } from "../../assets/svg/icons/inventory.svg";
import { ReactComponent as Eletrical } from "../../assets/svg/icons/eletrical.svg";
import { ReactComponent as Carbono } from "../../assets/svg/icons/carbono.svg";
import { ReactComponent as Speed } from "../../assets/svg/icons/speed.svg";
import { ReactComponent as Searcher } from "../../assets/svg/icons/searcher.svg";

type IBike = {
  name: string;
  price: string;
  description: string;
  images: IImageElement[];
};

const nimbus: IBike = {
  name: "Nimbus Stark",
  price: "R$ 4999",
  description:
    "A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
  images: [
    { src: nimbusImage, alt: "" },
    { src: nebulaImage, alt: "" },
    { src: magicImage, alt: "" },
  ],
};

const magic: IBike = {
  name: "Magic Might",
  price: "R$ 2499",
  description:
    "A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
  images: [
    { src: magicImage, alt: "" },
    { src: nimbusImage, alt: "" },
    { src: nebulaImage, alt: "" },
  ],
};

const nebula: IBike = {
  name: "Nebula Cosmic",
  price: "R$ 3999",
  description:
    "A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade.",
  images: [
    { src: nebulaImage, alt: "" },
    { src: nimbusImage, alt: "" },
    { src: magicImage, alt: "" },
  ],
};

const BikeContainer = styled.main`
  background: var(--c11);
`;

const BikeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 40px;
  padding: 60px 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }
`;

const Images = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;

  > img {
    flex: 1;
    min-width: 200px;
  }

  > img:first-child {
    min-width: 100%;
  }

  @media (max-width: 800px) {
    grid-row: 2;
  }
`;

const Informations = styled.div`
  > p {
    color: var(--c05);
    margin-bottom: 32px;
  }

  > div {
    display: grid;
    grid-template-columns: max-content auto;
    align-items: center;
    justify-items: start;
    gap: 8px 12px;
    margin-bottom: 40px;
  }

  > div > a {
    grid-row: span 2;
  }

  > div > span {
    color: var(--c06);
    display: flex;
    align-items: center;
    background: var(--c12);
    padding: 4px 8px;
    border-radius: 4px;
    gap: 8px;
  }

  > h2 {
    color: var(--w);
    text-transform: uppercase;
    letter-spacing: 0.015rem;
    margin-bottom: 12px;
  }

  @media (max-width: 400px) {
    > div {
      grid-template-columns: 1fr;
    }
  }
`;

const BikeInformations = styled.ul`
  padding: 32px;
  background: var(--c12);
  border-radius: 4px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const DataSheet = styled.ul` 
  padding: 32px;
  background: var(--c12);
  border-radius: 4px;

  > li {
    color: var(--c04);
    padding: 4px 0px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--c11);
  }

  > li:last-child {
    border: none;
  }

  > li > span {
    color: var(--c06);
  }
`;

const Terms = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [bike, setBike] = useState<IBike>();

  useEffect(() => {
    if (name === "nimbus_stark") {
      setBike(nimbus);
    } else if (name === "magic_might") {
      setBike(magic);
    } else if (name === "nebula_cosmic") {
      setBike(nebula);
    } else {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <>
      <Helmet>
        <title>Termos e Condições | Bikcraft</title>
      </Helmet>

      <BikeContainer>
        <PageTitle title={bike?.name} subtitle={bike?.price} />
        <BikeContent className="container">
          <Images>
            {bike?.images.map(({ src, alt }) => (
              <img key={src} src={src} alt={alt} />
            ))}
          </Images>
          <Informations>
            <p className="roboto-l">{bike?.description}</p>
            <div>
              <LinkButton to="/orcamentos">Comprar Agora</LinkButton>
              <span className="poppins-xs">
                <Delivere /> entrega em 5 dias
              </span>
              <span className="poppins-xs">
                <Inventory /> 18 em estoque
              </span>
            </div>
            <h2 className="poppins-xs">Informações</h2>
            <BikeInformations>
              <li>
                <InformationCard
                  icon={<Eletrical />}
                  title="Motor Elétrico"
                  description="Permite você viajar distâncias inimaginaveis com a sua bike."
                />
              </li>
              <li>
                <InformationCard
                  icon={<Speed />}
                  title="40 km/h"
                  description="A mais rápida bicicleta elétrica disponível hoje no mercado."
                />
              </li>
              <li>
                <InformationCard
                  icon={<Searcher />}
                  title="Rastreador"
                  description="Rastreador e sistema anti-furto para garantir o seu sossego."
                />
              </li>
              <li>
                <InformationCard
                  icon={<Carbono />}
                  title="Fibra de Carbono"
                  description="Maior proteção possível para a sua Bikcraft com fibra de carbono."
                />
              </li>
            </BikeInformations>
            <h2 className="poppins-xs">Ficha Técnica</h2>
            <DataSheet>
              <li>
                Peso <span>9k</span>
              </li>
              <li>
                Altura <span>60cm</span>
              </li>
              <li>
                Largura <span>120cm</span>
              </li>
              <li>
                Profundidade <span>10cm</span>
              </li>
              <li>
                Marchas <span>16</span>
              </li>
              <li>
                Rodas <span>29</span>
              </li>
            </DataSheet>
          </Informations>
        </BikeContent>
      </BikeContainer>
    </>
  );
};

export default Terms;
