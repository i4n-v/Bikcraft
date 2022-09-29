import React from "react";
import { Helmet } from "react-helmet";
import { PageTitle } from "../../components";
import { InformationBikeCard } from "../../components/Cards";
import nimbusImage from "../../assets/img/bikes/nimbus.jpg";
import magicImage from "../../assets/img/bikes/magic.jpg";
import nebulaImage from "../../assets/img/bikes/nebula.jpg";
import { ReactComponent as Eletrical } from "../../assets/svg/icons/eletrical.svg";
import { ReactComponent as Carbono } from "../../assets/svg/icons/carbono.svg";
import { ReactComponent as Speed } from "../../assets/svg/icons/speed.svg";
import { ReactComponent as Searcher } from "../../assets/svg/icons/searcher.svg";

const Bikes = () => {
  const bikeFeatures = [
    { name: "Motor Elétrico", icon: <Eletrical /> },
    { name: "Fibra de Carbono", icon: <Carbono /> },
    { name: "40 km/h", icon: <Speed /> },
    { name: "Rastreador", icon: <Searcher /> },
  ];

  return (
    <>
      <Helmet>
        <title>Bicicletas | Bikcraft</title>
      </Helmet>

      <main>
        <PageTitle title="nossas bicicletas" subtitle="Escolha a melhor para você" />
        <InformationBikeCard
          image={{ src: nimbusImage, alt: "Bicicleta preta" }}
          link="/bicicletas/nimbus_stark"
          name="Nimbus Stark"
          price={4999}
          description="A Nimbus Stark é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
          features={bikeFeatures}
        />
        <InformationBikeCard
          variant="secondary"
          image={{ src: magicImage, alt: "Bicicleta preta" }}
          link="/bicicletas/magic_might"
          name="Magic Might"
          price={2499}
          description="A Magic Might é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
          features={bikeFeatures}
        />
        <InformationBikeCard
          image={{ src: nebulaImage, alt: "Bicicleta cinza" }}
          link="/bicicletas/nebula_cosmic"
          name="Nebula Cosmic"
          price={3999}
          description="A Nebula Cosmic é a melhor Bikcraft já criada pela nossa equipe. Ela vem equipada com os melhores acessórios, o que garante maior velocidade."
          features={bikeFeatures}
        />
      </main>
    </>
  );
};

export default Bikes;
